import React, { useEffect, useMemo, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import styles from './PDFViewer.module.css';

type PDFViewerProps = {
  doc: string;
  predictions?: Array<Array<number>>;
};

const PDFViewer = ({ doc, predictions }: PDFViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [groups, setGroups] = useState<Array<Array<number>>>([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (!numPages) return;
    // no predictions, group all pages together by default?
    if (predictions?.length === 0) {
      const allPages = [...Array(numPages).keys()].map((key) => key + 1);
      setGroups([allPages]);
    }
  }, [predictions, numPages]);

  return (
    <Document
      file={doc}
      onLoadSuccess={onDocumentLoadSuccess}
      options={{
        cMapUrl: 'cmaps/',
        cMapPacked: true,
      }}
    >
      {groups.map((group, i) => (
        <ul className={styles['list-container']} key={`group_${group.join('-')}`}>
          {group.map((pageNumber) => (
            <li className={`${styles['list-item']} mr-3`} tabIndex={0} key={`page_${pageNumber}`}>
              <div>
                <Page pageNumber={pageNumber} height="150" width="107" />
              </div>
            </li>
          ))}
        </ul>
      ))}
    </Document>
  );
};

export default PDFViewer;
