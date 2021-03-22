import { EnumOption } from './types';

export function normalizeEnum(str: string): EnumOption {
  return { value: str, display: str };
}

/**
 * Decode base64 encoded content to unicode string
 * @param str
 */
export function b64DecodeUnicode(str: string): string {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
}
