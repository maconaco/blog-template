/**
 * 第二引数のテストを満たす要素の数を返す。
 *  @return count
 */
export const count = <T>(
  arr: readonly T[],
  matcher: (a: T) => boolean
): number => {
  return arr.reduce((count, cur) => matcher(cur) ? count + 1 : count, 0);
};

export const initialize = <T>(
  length: number,
  callback: (_: {}, index: number) => T,
): T[] => Array(length).fill({}).map(callback);

/**
 * get step array e.g. [0, 6, 12, ...]
 * @param span span of step
 * @param end maximum of element.
 */
export const step = (
  span: number,
  end: number
): number[] => Array(Math.ceil((end - 1) / span))
  .fill(0)
  .map((_, index) => index * span);

/**
 * id を持つオブジェクトの配列を Map に変換する
 * @param(T extends { id: number })[]
 * @return { [id: number]: T }
 */
export const mapById = <T extends { id: number }>(arr: readonly T[]): { [id: number]: T } => {
  return Object.assign({}, ...arr.map(a => ({ [a.id]: a })));
};
