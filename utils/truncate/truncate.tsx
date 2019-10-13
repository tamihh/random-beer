/**
 * Returns truncated string accordinf to limit number
 * @param {string}
 * @returns {string}
 */

export const truncate = (text: string, limit: number) =>
  text.length > limit ? `${text.substring(0, limit)}... ` : text;
