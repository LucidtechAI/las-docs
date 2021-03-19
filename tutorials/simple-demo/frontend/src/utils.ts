import { format, parse } from 'date-fns';
import { EnumOption } from './types';

/**
 * Attempt to normalize dates to dd.mm.yy format
 * @param dateString
 */
export function normalizeDate(dateString: string): string {
  const delimited = dateString.replaceAll(/[\,\-_\/\\]+/g, '.');
  const inputFormat = delimited.length > 8 ? 'dd.MM.yyyy' : 'dd.MM.yy';
  const referenceDate = new Date();
  let formatted = '';
  try {
    const parsedDate = parse(delimited, inputFormat, referenceDate);
    formatted = format(parsedDate, 'dd.MM.yy');
  } catch (e) {
    console.error(e);
  }

  return formatted;
}

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
