import React, { useMemo, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Spinner from './Spinner';

import styles from './PDFViewer.module.css';

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
      {[...new Array(pages)].map((_page, pageIndex) => {
        return <Page pageIndex={pageIndex} width={600} key={pageIndex} className={styles.page} />;
      })}
    </Document>
  );
};

export default PDFViewer;
