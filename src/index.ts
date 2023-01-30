/**
 * Arrow function not being correctly included in documentation.
 */
export const foo = (foo: string): boolean => {
  return true;
};

/**
 * Non-arrow function being correctly included.
 */
export function bar(bar: string): boolean {
  return true;
}
