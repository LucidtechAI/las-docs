import { format, parse } from 'date-fns';

import { ZoomState } from './DocumentViewer';
import docStyles from './DocumentViewer.module.css';

export function debounce(fn: (args: any) => void, ms: number): () => void {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore 🤷‍♀️
      fn.apply(this, arguments); // eslint-disable-line
    }, ms);
  };
}

export function getZoomStyle(zoom: ZoomState): string {
  let zoomStyle = '';

  switch (zoom) {
    case 2:
      zoomStyle = docStyles['zoom-200'];
      break;
    case 1.5:
      zoomStyle = docStyles['zoom-150'];
      break;
    case 1:
    default:
      break;
  }

  return zoomStyle;
}

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
