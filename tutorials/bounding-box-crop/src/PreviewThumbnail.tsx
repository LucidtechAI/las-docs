import React, { useMemo } from "react";
import { Group, Image as KonvaImage } from "react-konva";
import { BoundingBox } from "./Canvas";

type PreviewThumbnailProps = BoundingBox & {
  onSelect: () => void;
  image: HTMLImageElement | undefined;
  crop: BoundingBox;
};

const PreviewThumbnail = ({
  x,
  y,
  width: containerWidth,
  height: containerHeight,
  onSelect,
  image,
  crop,
}: PreviewThumbnailProps) => {
  let { width, height } = crop;

  // could add padding or extra dimension to make up for here
  const targetWidth = containerWidth; // + (padding * 2) for instance
  const targetHeight = containerHeight;

  // compute the ratios of image dimensions to aperture dimensions
  const widthFit = targetWidth / width;
  const heightFit = targetHeight / height;

  // compute a scale for best fit and apply it
  const scale = widthFit > heightFit ? heightFit : widthFit;

  width = width * scale;
  height = height * scale;

  return (
    <KonvaImage
      image={image}
      onClick={onSelect}
      onTap={onSelect}
      x={x}
      y={y}
      width={width}
      height={height}
      crop={{ x: crop.x * scale, y: crop.y * scale, width, height}}
    />
  );
};

export default PreviewThumbnail;
