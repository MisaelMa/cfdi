export function isPath(input: string): boolean {
  const pathPattern = /[\/\\]|(\.\w+)$/;
  return pathPattern.test(input);
}
