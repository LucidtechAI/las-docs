import { Position } from 'react-rnd';
import { Dimensions } from './types';

// good enough for our purpose ok
export function generateSemiRandomId(): string {
  const newBoxId = `${new Date().getTime()}-${Math.floor(Math.random() * 10000)}`;

  return newBoxId;
}

export function normalizeDimensionsToScale(dimensions: Dimensions, imageDimensions: Dimensions): Dimensions {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const scaleWidth = (1 / imageWidth) * dimensions.width;
  const scaleHeight = (1 / imageHeight) * dimensions.height;
  return {
    width: scaleWidth,
    height: scaleHeight,
  };
}

export function normalizePositionToScale(position: Position, imageDimensions: Dimensions): Position {
  const { width: imageWidth, height: imageHeight } = imageDimensions;
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
  const { width: imageWidth, height: imageHeight } = imageDimensions;
  const { x, y, width, height } = dimensions;
  const pixelX = x * imageWidth;
  const pixelY = y * imageHeight;
  const pixelWidth = width * imageWidth;
  const pixelHeight = height * imageHeight;

  return { x: pixelX, y: pixelY, width: pixelWidth, height: pixelHeight };
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
