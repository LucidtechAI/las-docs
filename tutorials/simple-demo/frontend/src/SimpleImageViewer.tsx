import React from 'react';
import { ZoomState } from './DocumentViewer';

import styles from './SimpleImageViewer.module.css';
import { getZoomStyle } from './utils';

type SimpleImageViewerProps = {
  doc: string;
  zoom?: ZoomState;
};

const SimpleImageViewer = ({ doc, zoom = 1 }: SimpleImageViewerProps): JSX.Element => {
  const zoomStyle = getZoomStyle(zoom);
  return <img src={doc} className={`${styles.image} ${zoomStyle}`} />;
};

export default SimpleImageViewer;
