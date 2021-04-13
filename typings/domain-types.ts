import boxen from 'boxen'

import { Keys } from './standard-types'

import { FILE_SIZE_OPTIONS } from '../src/constants/constants'

/**
 * KeyRecord
 * @desc Type representing key record
 */
export type KeyRecord<T extends PropertyKey> = { [K in T]: K }

//--------------------------------------------------------------------------------------------------
/**
 * FileSizeType
 * @desc Type representing supported file size units
 */
export type FileSizeType = Keys<typeof FILE_SIZE_OPTIONS>

//--------------------------------------------------------------------------------------------------
/**
 * ReportStatus
 * @desc Type representing report status
 */
export type ReportStatus = {
    /**
     * Report name
     */
    readonly reportName: string
    /**
     * Source file size
     */
    readonly sourceSize: number
    /**
     * Target file size
     */
    readonly targetSize: number
    /**
     * Size difference
     */
    readonly sizeDiff: number
    /**
     * Size difference (human-readable)
     */
    readonly sizeDiffText: string
    /**
     * Size unit (human-readable)
     */
    readonly sizeUnit: FileSizeType
}

//--------------------------------------------------------------------------------------------------
/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export type ConfigOptions = {
    /**
     * Report name
     */
    readonly reportName: string
    /**
     * Source file path
     */
    readonly sourceFilePath: string
    /**
     * Target file path
     */
    readonly targetFilePath: string
    /**
     * File size unit
     */
    readonly sizeUnit: FileSizeType
}

//--------------------------------------------------------------------------------------------------
/**
 * FormatOptions
 * @desc Type representing format options
 */
export type FormatOptions = {
    /**
     * File size unit
     */
    readonly sizeUnit: FileSizeType
}
//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export type ProfileOptions = {
    /**
     * Format options
     */
    readonly formatOptions: FormatOptions
    /**
     * Output options
     */
    readonly outputOptions?: boxen.Options
}
//--------------------------------------------------------------------------------------------------
