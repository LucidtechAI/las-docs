import React from 'react';
import { PDFObject } from 'react-pdfobject';
import SimpleImageViewer from './SimpleImageViewer';

const PDFContainerStyles = { style: { width: '100%', height: '95vh' } };

export type DocumentType = 'image/jpeg' | 'application/pdf' | 'image/png' | 'image/tiff';
type DocumentViewerProps = {
  doc?: string | null;
  documentType?: DocumentType | null;
};

const DocumentViewer = ({ doc, documentType }: DocumentViewerProps) => {
  if (!doc) {
    return <div>Waiting for document...</div>;
  } else if (!documentType) {
    return <div>Waiting for document type...</div>;
  } else if (documentType === 'application/pdf') {
    return <PDFObject url={doc} containerProps={PDFContainerStyles} />;
  } else if (documentType === 'image/jpeg' || documentType === 'image/png') {
    return <SimpleImageViewer doc={doc} />;
  }
  return <div>Unsupported document format. Download to view locally.</div>;
};

export default DocumentViewer;
