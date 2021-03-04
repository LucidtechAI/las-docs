import React, { useMemo, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Spinner from './Spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const options = {
  cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
};

type PDFViewerProps = {
  doc: string;
};

const PDFViewer = ({ doc }: PDFViewerProps): JSX.Element => {
  const [pages, setPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setPages(numPages);
  }

  const docBinary = useMemo(() => {
    const docBinary = atob(doc || '');
    return { data: docBinary };
  }, [doc]);

  return (
    <Document
      file={docBinary}
      onLoadSuccess={onDocumentLoadSuccess}
      onSourceSuccess={() => setPages(null)}
      loading={<Spinner />}
      options={options}
    >
      <div>
        <Page pageNumber={1} width={600} />
      </div>
    </Document>
  );
};

export default PDFViewer;
