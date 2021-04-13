import * as core from '@actions/core'

import { getConfigOptions, getFilesizeInBytes } from './utils/files'
import { isValidFile } from './utils/validators'
import { serialize } from './utils/serializers'
import { getProperty, getRequiredProperty } from './utils/properties'

import { profile } from './utils/profiles'
import { coreError, coreInfo } from './utils/loggers'

import { ConfigOptions, FileSizeType, ReportStatus } from '../typings/domain-types'

import { SIZE_OPTIONS } from './constants/constants'

const round = (value: number): number => Math.round(value * 100) / 100

const percentageValueOrNa = (value: number): string => (value === Infinity ? 'N/A' : `${value}%`)

const processSourceFile = async (options: ConfigOptions): Promise<ReportStatus> => {
    coreInfo(`Processing input configuration options: [${serialize(options)}]`)

    try {
        const currentSizeBytes = getFilesizeInBytes(options.sourceFilePath)
        const masterSizeBytes = getFilesizeInBytes(options.targetFilePath)

        const sourceSize = round(currentSizeBytes / SIZE_OPTIONS[options.sizeUnit])
        const targetSize = round(masterSizeBytes / SIZE_OPTIONS[options.sizeUnit])
        const sizeDiff = round((currentSizeBytes / masterSizeBytes - 1) * 100) / 100
        const sizeDiffText = percentageValueOrNa(round(sizeDiff * 100))

        return {
            reportName: options.reportName,
            sourceSize,
            targetSize,
            sizeDiff,
            sizeDiffText,
            sizeUnit: options.sizeUnit,
        }
    } catch (error) {
        coreError(`Cannot generate file size report: ${options.reportName}`)
        throw error
    }
}

const buildConfigOptions = (options: Partial<ConfigOptions>): ConfigOptions => {
    const reportName = options.reportName || getRequiredProperty('reportName')
    const sourceFilePath = options.sourceFilePath || getRequiredProperty('sourceFilePath')
    const targetFilePath = options.targetFilePath || getRequiredProperty('targetFilePath')
    const sizeUnit =
        options.sizeUnit || (getProperty('sizeUnit') as FileSizeType) || profile.formatOptions.sizeUnit

    return {
        reportName,
        sourceFilePath,
        targetFilePath,
        sizeUnit,
    }
}

const getOperationStatus = async (option: Partial<ConfigOptions>): Promise<ReportStatus> => {
    const options = buildConfigOptions(option)

    return await processSourceFile(options)
}

const executeOperation = async (...options: Partial<ConfigOptions>[]): Promise<ReportStatus[]> => {
    const promises: Promise<ReportStatus>[] = []

    for (const option of options) {
        promises.push(getOperationStatus(option))
    }

    return await Promise.all(promises)
}

const getOperationResult = async (sourceData: string): Promise<ReportStatus[]> => {
    if (isValidFile(sourceData, '.json')) {
        const options = getConfigOptions(sourceData)

        return await executeOperation(...options)
    }

    return await executeOperation({})
}

const runFileSizeReportOperation = async (): Promise<void> => {
    const sourceData = getProperty('sourceData')

    const report = await getOperationResult(sourceData)

    core.setOutput('fileReport', serialize(report, 0))
}

export default async function run(): Promise<void> {
    try {
        await runFileSizeReportOperation()
    } catch (error) {
        core.setFailed(`Cannot process input image data, message: ${error.message}`)
    }
}

run()
