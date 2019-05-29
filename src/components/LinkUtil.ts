export const isFrontPage = (to: string): boolean => to && to === '/'

export const ensureTrailingSlash = (to: string): string =>
  to && to.replace(/\/$|$/, '/')
