import boxen from 'boxen'

import { FileSizeType, FormatOptions, KeyRecord } from '../../typings/domain-types'

import { strToEnum } from '../utils/commons'

/**
 * Supported file size units
 * - 'b' - bytes
 * - 'kb' - kilobytes
 * - 'mb' - megabytes
 * - 'gb' - gigabytes
 * - 'tb' - terabytes
 * - 'pb' - petabytes
 */
const SIZE_UNITS = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'] as const

/**
 * File size configuration options
 */
export const FILE_SIZE_OPTIONS: KeyRecord<typeof SIZE_UNITS[number]> = strToEnum(Object.values(SIZE_UNITS))

/**
 * Format configuration options
 */
export const FORMAT_OPTIONS: Readonly<FormatOptions> = {
    sizeUnit: 'kb',
}

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

/**
 * Size unit configuration options
 */
export const SIZE_OPTIONS: Readonly<Record<FileSizeType, number>> = {
    b: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
    tb: 1024 * 1024 * 1024 * 1024,
    pb: 1024 * 1024 * 1024 * 1024 * 1024,
}
