import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { FORMAT_OPTIONS, OUTPUT_OPTIONS } from '../constants/constants'

/**
 * ProfileRecord
 * @desc Type representing image profiles configuration options
 */
export type ProfileRecord = Record<Profile, Partial<ProfileOptions>>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileRecord> = {
    dev: {
        formatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        formatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        formatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
