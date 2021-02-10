import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import styles from './PDFViewer.module.css';
import ScissorButton from './ScissorButton';

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
      <div className={styles['outer-container']}>
        {groups.map((group, i) => (
          <div key={`group_${i}-${group.join('-')}`} className={styles['group-container']}>
            <div className={styles['group-tab']}>{(i + 1).toString().padStart(2, '0')}</div>
            <ul>
              {group.map((pageNumber, groupIndex) => {
                const hasPrevPage = groupIndex !== 0;
                const hasNextPage = groupIndex !== group.length - 1;
                return (
                  <li className={`${styles['list-item']}`} key={`page_${pageNumber}`}>
                    <div
                      className={styles['list-item-page']}
                      tabIndex={0}
                      data-has-prev={hasPrevPage ? true : undefined}
                      data-has-next={hasNextPage ? true : undefined}
                    >
                      <Page pageNumber={pageNumber} height={150} width={107} />
                    </div>
                    {hasPrevPage && (
                      <ScissorButton
                        className={`${styles['scissor-button']} ${styles['scissor-button-prev']}`}
                        tabIndex={-1}
                      />
                    )}
                    {hasNextPage && (
                      <ScissorButton
                        className={`${styles['scissor-button']} ${styles['scissor-button-next']}`}
                        tabIndex={-1}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Document>
  );
};

export default PDFViewer;
