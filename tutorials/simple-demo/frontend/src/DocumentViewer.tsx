import React, { useEffect, useState } from 'react';

import PDFViewer from './PDFViewer';
import SimpleImageViewer from './SimpleImageViewer';

import styles from './DocumentViewer.module.css';
import Spinner from './Spinner';
import TIFFViewer from './TIFFViewer';
import { useDownload } from './useDownload';

export type DocumentType = 'image/jpeg' | 'application/pdf' | 'image/png' | 'image/tiff';

type DocumentViewerProps = {
  fileName?: string;
  doc?: string | null;
  documentType?: DocumentType | null;
  loading?: boolean;
  className?: string;
};

export type ZoomState = 1 | 1.5 | 2;

const DocumentViewer = ({
  doc,
  documentType,
  className = '',
  loading = false,
  fileName = 'flyt-download',
}: DocumentViewerProps): JSX.Element => {
  const isSimpleImage = documentType === 'image/jpeg' || documentType === 'image/png';
  const isTIFF = documentType === 'image/tiff';
  const isPDF = documentType === 'application/pdf';
  const dataUrl = (!isPDF && `data:${documentType};base64,${doc}`) || '';
  const containerClasses = `${styles.container} ${className}`;
  const downloadDocument = useDownload(fileName, dataUrl);

  const [zoom, setZoom] = useState<ZoomState>(1);

  useEffect(() => {
    // reset zoom when new document is loaded
    setZoom(1);
  }, [doc]);

  const onZoomIn = (): void => {
    switch (zoom) {
      case 1:
        setZoom(1.5);
        break;
      case 1.5:
        setZoom(2);
        break;
      case 2:
      default:
        break;
    }
  };

  const onZoomOut = (): void => {
    switch (zoom) {
      case 2:
        setZoom(1.5);
        break;
      case 1.5:
        setZoom(1);
        break;
      case 1:
      default:
        break;
    }
  };

  return (
    <div className={containerClasses}>
      <div className={styles.toolbar}>
        <div className={styles['toolbar-group']}>
          <span
            className={`${styles.button} ${zoom === 1 ? styles.disabled : ''} fe fe-zoom-out`}
            onClick={onZoomOut}
            title="Zoom out"
          />
          <span className={styles.info}>{Math.floor(zoom * 100)}%</span>
          <span
            className={`${styles.button} ${zoom === 2 ? styles.disabled : ''} fe fe-zoom-in`}
            onClick={onZoomIn}
            title="Zoom in"
          />
        </div>
        <div className={styles['toolbar-group']}>
          <span className={`${styles.button} fe fe-rotate-ccw`} title="Rotate counter clockwise" />
          <span className={`${styles.button} fe fe-rotate-cw`} title="Rotate clockwise" />
        </div>
        <div className={styles['toolbar-group']}>
          <span className={`${styles.button} fe fe-download`} onClick={downloadDocument} title="Download document" />
        </div>
      </div>
      {loading ? (
        <div className={styles['loading-container']}>
          <Spinner color="white" />
        </div>
      ) : (
        <div className={styles['content-container']}>
          {!loading && !doc && 'Waiting for document...'}
          {!loading && doc && isSimpleImage && <SimpleImageViewer doc={dataUrl} zoom={zoom} />}
          {!loading && doc && isPDF && <PDFViewer doc={doc} zoom={zoom} />}
          {!loading && doc && isTIFF && <TIFFViewer doc={doc} zoom={zoom} />}
          {!loading && !documentType && 'Unsupported document format. Download to view locally.'}
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
