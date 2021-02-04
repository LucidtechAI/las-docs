import React from "react";
import { Stage, Rect, Layer, StageProps } from "react-konva";

import { BoundingBox } from "./Canvas";
import PreviewThumbnail from "./PreviewThumbnail";

type PreviewProps = StageProps & {
  thumbnails: Array<BoundingBox>;
  image: HTMLImageElement | undefined;
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
};

const Preview = ({ thumbnails, onSelect, image, ...stageProps }: PreviewProps) => {
  const maxThumbnailHeight = 200;
  const maxThumbnailWidth = stageProps.width || 0
 
  return (
    <div style={{ height: `${stageProps.height}px` }}>
      <Stage {...stageProps}>
        <Layer>
          <Rect fill="red" width={stageProps.width} height={stageProps.height} />
          {thumbnails.map((box, i) => {
            const y = i * maxThumbnailHeight
            return <PreviewThumbnail key={box.id} image={image} onSelect={() => onSelect(box.id || null)} x={0} y={y} height={maxThumbnailHeight} width={maxThumbnailWidth} crop={box} />;
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default Preview;
