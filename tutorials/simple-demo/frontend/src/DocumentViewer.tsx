import React from 'react';
import PDFViewer from './PDFViewer';
import SimpleImageViewer from './SimpleImageViewer';

export type DocumentType = 'image/jpeg' | 'application/pdf' | 'image/png' | 'image/tiff';
type DocumentViewerProps = {
  doc?: string | null;
  documentType?: DocumentType | null;
};

const DocumentViewer = ({ doc, documentType }: DocumentViewerProps): JSX.Element => {
  if (!doc) {
    return <div>Waiting for document...</div>;
  } else if (!documentType) {
    return <div>Waiting for document type...</div>;
  } else if (documentType === 'application/pdf') {
    return <PDFViewer doc={doc} />;
  } else if (documentType === 'image/jpeg' || documentType === 'image/png') {
    const dataUrl = `data:${documentType};base64,${doc}`;
    return <SimpleImageViewer doc={dataUrl} />;
  }
  return <div>Unsupported document format. Download to view locally.</div>;
};

export default DocumentViewer;
