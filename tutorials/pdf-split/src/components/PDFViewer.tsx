import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { GlobalHotKeys } from 'react-hotkeys';

import styles from './PDFViewer.module.css';
import ScissorButton from './ScissorButton';
import MergeButton from './MergeButton';
import HotkeyHint from './HotkeyHint';

type PDFViewerProps = {
  doc: string;
  predictions?: Array<Array<number>>;
};

const PDFViewer = ({ doc, predictions }: PDFViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState(null);
  const [previewPage, setPreviewPage] = useState(1);
  const [groups, setGroups] = useState<Array<Array<number>>>([]);
  // ref for looking for focusable elements
  const groupContainerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const docBinary = useMemo(() => {
    const docBinary = atob(doc || '');
    return { data: docBinary };
  }, [doc]);

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

  const focusPage = (pageNumber: number) => {
    // Nothing but divs should be returned, so we know it's HTMLElement instead of Element in the NodeList
    // (Element does not have .focus() so TS will complain)
    const nodes: NodeListOf<HTMLElement> | undefined = groupContainerRef.current?.querySelectorAll(
      `[data-page-number="${pageNumber}"]`,
    );
    if (nodes && nodes.length > 0) {
      nodes[0].focus();
    }
  };

  const handlers = {
    // focus first page in previous group
    SELECT_PREV_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      const hasPrevGroup = currentGroupIndex > 0;

      if (hasPrevGroup) {
        const firstPageOfPrevGroup = groups[currentGroupIndex - 1][0];
        onFocus(currentGroupIndex - 1, 0, firstPageOfPrevGroup);
        focusPage(firstPageOfPrevGroup);
      }
    },
    // focus first page in next group
    SELECT_NEXT_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      const hasNextGroup = currentGroupIndex >= 0 && currentGroupIndex !== groups.length - 1;

      if (hasNextGroup) {
        const firstPageOfNextGroup = groups[currentGroupIndex + 1][0];
        onFocus(currentGroupIndex - 1, 0, firstPageOfNextGroup);
        focusPage(firstPageOfNextGroup);
      }
    },
    CUT_PREV: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      if (currentGroupIndex >= 0) {
        const currentPageIndex = groups[currentGroupIndex].findIndex((page) => page === previewPage);
        const hasPrevPage = currentPageIndex > 0;
        hasPrevPage && cutGroup(currentGroupIndex, currentPageIndex);
      }
    },
    CUT_NEXT: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      if (currentGroupIndex >= 0) {
        const currentPageIndex = groups[currentGroupIndex].findIndex((page) => page === previewPage);
        const hasNextPage = currentPageIndex >= 0 && currentPageIndex !== groups[currentGroupIndex].length - 1;
        hasNextPage && cutGroup(currentGroupIndex, currentPageIndex + 1);
      }
    },
    MERGE_PREV_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      const hasPrevGroup = currentGroupIndex > 0;
      if (hasPrevGroup) {
        joinGroups(currentGroupIndex - 1, currentGroupIndex);
      }
    },
    MERGE_NEXT_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.includes(previewPage));
      const hasNextGroup = currentGroupIndex >= 0 && currentGroupIndex !== groups.length - 1;
      if (hasNextGroup) {
        joinGroups(currentGroupIndex, currentGroupIndex + 1);
      }
    },
  };

  // react-hotkeys types aren't 100% correct sadly
  const keyMap: any = {
    SELECT_PREV_GROUP: {
      name: 'Select first page in previous group',
      sequences: ['ctrl+left', 'cmd+left'],
    },
    SELECT_NEXT_GROUP: {
      name: 'Select first page in next group',
      sequences: ['ctrl+right', 'cmd+right'],
    },
    CUT_PREV: {
      name: 'Cut between current and previous page',
      sequences: ['ctrl+z', 'cmd+z'],
    },
    CUT_NEXT: {
      name: 'Cut between current and next page',
      sequences: ['ctrl+x', 'cmd+x'],
    },
    MERGE_PREV_GROUP: {
      name: 'Merge current and previous group',
      sequences: 'shift+z',
    },
    MERGE_NEXT_GROUP: {
      name: 'Merge current and next group',
      sequences: 'shift+x',
    },
  };

  useEffect(() => {
    if (!numPages) return;
    setPreviewPage(1); // reset focus to first page when new doc is loaded (from numPages changing)

    // for now no predictions are expected, but this should make it possible to receive them in the future
    // if no predictions, group all pages together by default
    if (predictions?.length === 0 || !predictions) {
      const allPages = [...Array(numPages).keys()].map((key) => key + 1);
      setGroups([allPages]);
    }
  }, [predictions, numPages]);

  // Unclear what behavior should be like after cutting a group, but for now when the groups changes,
  // we will focus the last focused page again. This also makes the first page focus on page load.
  useLayoutEffect(() => {
    focusPage(previewPage);
  }, [groups]);

  return (
    <>
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges />
      <HotkeyHint />
      <Document
        file={docBinary}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
        }}
        className={styles['outer-container']}
      >
        <div className={styles['page-preview']}>
          <Page pageNumber={previewPage} width={600} className={styles['page-preview-canvas']} />
        </div>
        <div className={styles['group-container']} ref={groupContainerRef}>
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
                          data-page-number={pageNumber}
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
                    tabIndex={-1}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Document>
    </>
  );
};

export default PDFViewer;
