import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { MergeAsyncIterable } from '../merge';

/* tslint:disable:max-line-length */
export function merge<T, T2>(v2: AsyncIterable<T2>): MonoTypeOperatorAsyncFunction<T | T2>;
export function merge<T, T2, T3>(
  v2: AsyncIterable<T2>,
  v3: AsyncIterable<T3>
): MonoTypeOperatorAsyncFunction<T | T2 | T3>;
export function merge<T, T2, T3, T4>(
  v2: AsyncIterable<T2>,
  v3: AsyncIterable<T3>,
  v4: AsyncIterable<T4>
): MonoTypeOperatorAsyncFunction<T | T2 | T3 | T4>;
export function merge<T, T2, T3, T4, T5>(
  v2: AsyncIterable<T2>,
  v3: AsyncIterable<T3>,
  v4: AsyncIterable<T4>,
  v5: AsyncIterable<T5>
): MonoTypeOperatorAsyncFunction<T | T2 | T3 | T4 | T5>;
export function merge<T, T2, T3, T4, T5, T6>(
  v2: AsyncIterable<T2>,
  v3: AsyncIterable<T3>,
  v4: AsyncIterable<T4>,
  v5: AsyncIterable<T5>,
  v6: AsyncIterable<T6>
): MonoTypeOperatorAsyncFunction<T | T2 | T3 | T4 | T5 | T6>;
/* tslint:enable:max-line-length */

export function merge<T>(...args: AsyncIterable<T>[]): MonoTypeOperatorAsyncFunction<T> {
  return function mergeOperatorFunction(source: AsyncIterable<T>): AsyncIterableX<T> {
    return new MergeAsyncIterable<T>([source, ...args]);
  };
}
