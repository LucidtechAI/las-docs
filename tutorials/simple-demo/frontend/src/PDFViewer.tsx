import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Spinner from './Spinner';

import styles from './PDFViewer.module.css';
import { debounce } from './utils';
import { ZoomState } from './DocumentViewer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const options = {
  cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
};

type PDFViewerProps = {
  doc: string;
  zoom?: ZoomState;
};

const PDFViewer = ({ doc, zoom = 1 }: PDFViewerProps): JSX.Element => {
  const [pages, setPages] = useState(null);
  const [width, setWidth] = useState(600);
  function onDocumentLoadSuccess({ numPages }) {
    setPages(numPages);
  }

  const docContainerRef = useRef<HTMLElement | null>(null);

  const docBinary = useMemo(() => {
    const docBinary = atob(doc || '');
    return { data: docBinary };
  }, [doc]);

  useLayoutEffect(() => {
    if (docContainerRef.current) {
      const containerWidth = docContainerRef.current.getBoundingClientRect().width;
      setWidth(containerWidth);
    }
  }, []);

  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (docContainerRef.current) {
        const containerWidth = docContainerRef.current.getBoundingClientRect().width;
        console.log(containerWidth);
        setWidth(containerWidth);
      }
    }, 30);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <Document
      file={docBinary}
      onLoadSuccess={onDocumentLoadSuccess}
      onSourceSuccess={() => setPages(null)}
      loading={<Spinner />}
      options={options}
      inputRef={(ref) => (docContainerRef.current = ref)}
      rotate={0}
      className={styles.document}
    >
      {[...new Array(pages)].map((_page, pageIndex) => {
        return <Page pageIndex={pageIndex} width={width} key={pageIndex} className={styles.page} scale={zoom} />;
      })}
    </Document>
  );
};

export default PDFViewer;
