import { format, parse } from 'date-fns';
import { EnumOption, Field } from './types';

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

export function normalizeEnumFromFieldConfig(str: string, fieldConfig?: Field): EnumOption {
  const normalized = { value: str, display: str };
  if (Array.isArray(fieldConfig?.enum)) {
    for (const enumOption of fieldConfig?.enum || []) {
      if (typeof enumOption === 'object' && enumOption.value === str) {
        normalized.display = enumOption.display;
      }
    }
  }
  return normalized;
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

export function normalizeOutput(values: Record<string, string | number | null | undefined>) {}
