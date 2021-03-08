import React, { useState } from 'react';

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

type ZoomState = 1 | 1.5 | 2;

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

  console.log(zoom);

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
          <span className="fe fe-zoom-out" onClick={onZoomOut} />
          <span className="fe fe-zoom-in" onClick={onZoomIn} />
        </div>
        <div className={styles['toolbar-group']}>
          <span className="fe fe-rotate-ccw" />
          <span className="fe fe-rotate-cw" />
        </div>
        <div className={styles['toolbar-group']}>
          <span className="fe fe-download" onClick={downloadDocument} />
        </div>
      </div>
      {loading ? (
        <div className={styles['loading-container']}>
          <Spinner color="white" />
        </div>
      ) : (
        <div className={styles['content-container']}>
          {!loading && !doc && 'Waiting for document...'}
          {!loading && doc && isSimpleImage && <SimpleImageViewer doc={dataUrl} />}
          {!loading && doc && isPDF && <PDFViewer doc={doc} />}
          {!loading && doc && isTIFF && <TIFFViewer doc={doc} zoom={zoom} />}
          {!loading && !documentType && 'Unsupported document format. Download to view locally.'}
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;
