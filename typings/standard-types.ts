/**
 * Optional
 * @desc Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined
//--------------------------------------------------------------------------------------------------
/**
 * Keys
 * @desc Type representing [`Keys`] in TypeScript: `T`
 */
export type Keys<T> = keyof T
//--------------------------------------------------------------------------------------------------
/**
 * Processor
 * @desc Type representing processor function type in TypeScript
 * @example
 *   type Processor = (v) => return new String(v)
 */
export type Processor<T, V> = (v: T) => V
//--------------------------------------------------------------------------------------------------
