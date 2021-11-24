import { EnumOption } from './types';

export function normalizeEnum(str: string): EnumOption {
  return { value: str, display: str };
}

export function normalizeString(enumOption: EnumOption): string {
  if (typeof enumOption === 'object') {
    return enumOption.value;
  } else {
    return enumOption;
  }
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

import { Position } from 'react-rnd';
import { Dimensions } from './types';

// good enough for our purpose ok
export function generateSemiRandomId(): string {
  const newBoxId = `${new Date().getTime()}-${Math.floor(Math.random() * 10000)}`;

  return newBoxId;
}

export function normalizeDimensionsToScale(boxDimension: Dimensions, imageDimensions: Dimensions): Dimensions {
  const { w: imageWidth, h: imageHeight } = imageDimensions;
  const scaleWidth = (1 / imageWidth) * boxDimension.w;
  const scaleHeight = (1 / imageHeight) * boxDimension.h;
  return {
    w: scaleWidth,
    h: scaleHeight,
  };
}

export function normalizePositionToScale(position: Position, imageDimensions: Dimensions): Position {
  const { w: imageWidth, h: imageHeight } = imageDimensions;
  const scaleX = (1 / imageWidth) * position.x;
  const scaleY = (1 / imageHeight) * position.y;
  return {
    x: scaleX,
    y: scaleY,
  };
}

export function normalizeToPixels(
  dimensions: Dimensions & Position,
  imageDimensions: Dimensions,
): Dimensions & Position {
  const { w: imageWidth, h: imageHeight } = imageDimensions;
  const { x, y, w, h } = dimensions;
  const pixelX = x * imageWidth;
  const pixelY = y * imageHeight;
  const pixelWidth = w * imageWidth;
  const pixelHeight = h * imageHeight;

  return { x: pixelX, y: pixelY, w: pixelWidth, h: pixelHeight };
}

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
