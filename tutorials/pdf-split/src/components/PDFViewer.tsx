import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { GlobalHotKeys } from 'react-hotkeys';

import styles from './PDFViewer.module.css';
import ScissorButton from './ScissorButton';
import MergeButton from './MergeButton';

type PDFViewerProps = {
  doc: string;
  predictions?: Array<Array<number>>;
  loading?: boolean;
};

const PDFViewer = ({ doc, predictions, loading }: PDFViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState(null);
  const [previewPage, setPreviewPage] = useState(1);
  const [groups, setGroups] = useState<Array<Array<number>>>([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // This assumes groups are always sequential,
  // we don't support joining arbitrary groups
  const joinGroups = (firstGroupIndex: number, secondGroupIndex: number): void => {
    if (secondGroupIndex !== firstGroupIndex + 1) {
      console.error('Attempted to join non-sequential groups');
      return;
    }

    const groupsCopy = [...groups];
    const firstGroup = groupsCopy[firstGroupIndex];
    const secondGroup = groupsCopy[secondGroupIndex];
    const combinedGroup = [...firstGroup, ...secondGroup];
    groupsCopy.splice(firstGroupIndex, 2, combinedGroup);

    setGroups(groupsCopy);
  };

  // Split a group into two groups, where cutIndex indicates where the second group
  // should start.
  const cutGroup = (groupIndex: number, cutIndex: number): void => {
    const groupsCopy = [...groups];
    const oldGroup = groupsCopy[groupIndex];
    const newFirstGroup = oldGroup.slice(0, cutIndex);
    const newSecondGroup = oldGroup.slice(cutIndex);

    groupsCopy.splice(groupIndex, 1, newFirstGroup, newSecondGroup);

    setGroups(groupsCopy);
  };

  const onFocus = (_groupIndex: number, _pageIndex: number, pageNumber: number): void => {
    setPreviewPage(pageNumber);
  };

  const handlers = {
    MOVE_UP: (event?: KeyboardEvent) => console.log(event),
  };
  const keyMap = {
    MOVE_UP: ['ctrl+up'],
  };

  useEffect(() => {
    if (!numPages) return;
    // for now no predictions are expected, but this should make it possible to receive them in the future
    // if no predictions, group all pages together by default
    if (predictions?.length === 0 || !predictions) {
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
      className={styles['outer-container']}
    >
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      <div className={styles['page-preview']}>
        <Page pageNumber={previewPage} width={600} className={styles['page-preview-canvas']} />
      </div>
      <div className={styles['group-container']}>
        {groups.map((group, groupIndex) => {
          const hasNextGroup = groupIndex !== groups.length - 1;
          return (
            <div key={`group_${groupIndex}-${group.join('-')}`} className={styles['page-container']}>
              <div className={styles['group-tab']}>{(groupIndex + 1).toString().padStart(2, '0')}</div>
              <ul>
                {group.map((pageNumber, pageIndex) => {
                  const hasPrevPage = pageIndex !== 0;
                  const hasNextPage = pageIndex !== group.length - 1;
                  return (
                    <li className={`${styles['list-item']}`} key={`page_${pageNumber}`}>
                      <div
                        className={styles['list-item-page']}
                        tabIndex={0}
                        data-has-prev={hasPrevPage ? true : undefined}
                        data-has-next={hasNextPage ? true : undefined}
                        onFocus={() => onFocus(groupIndex, pageIndex, pageNumber)}
                      >
                        <Page pageNumber={pageNumber} height={150} />
                      </div>
                      {hasPrevPage && (
                        <ScissorButton
                          className={`${styles['scissor-button']} ${styles['scissor-button-prev']}`}
                          onClick={() => cutGroup(groupIndex, pageIndex)}
                          tabIndex={-1}
                        />
                      )}
                      {hasNextPage && (
                        <ScissorButton
                          className={`${styles['scissor-button']} ${styles['scissor-button-next']}`}
                          onClick={() => cutGroup(groupIndex, pageIndex + 1)}
                          tabIndex={-1}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
              {hasNextGroup && (
                <MergeButton
                  className={`${styles['merge-button']} ${styles['merge-button-next']}`}
                  onClick={() => joinGroups(groupIndex, groupIndex + 1)}
                >
                  +
                </MergeButton>
              )}
            </div>
          );
        })}
      </div>
    </Document>
  );
};

export default PDFViewer;
