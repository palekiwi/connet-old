export const isRoot = (s: string): boolean=> {
  return ['/', '/en', '/en/', '/zh', '/zh/'].indexOf(s) > -1;
}
