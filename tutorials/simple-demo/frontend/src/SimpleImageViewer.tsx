import React from 'react';

import styles from './SimpleImageViewer.module.css';

type SimpleImageViewerProps = {
  doc: string;
  zoom?: 100 | 150 | 200;
};

const SimpleImageViewer = ({ doc, zoom = 100 }: SimpleImageViewerProps): JSX.Element => {
  return <img src={doc} className={styles.image} />;
};

export default SimpleImageViewer;
