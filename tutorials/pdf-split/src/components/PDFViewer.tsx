import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { GlobalHotKeys } from 'react-hotkeys';

import styles from './PDFViewer.module.css';
import ScissorButton from './ScissorButton';
import MergeButton from './MergeButton';
import Spinner from './Spinner';
import { Groups } from 'src';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const options = {
  cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
};

type PDFViewerProps = {
  doc: string;
  loading?: boolean;
  groups: Groups;
  setGroups: (groups: Groups) => void;
  extraKeymap?: Record<string, any>;
  extraHandlers?: Record<string, any>;
  predictions?: Groups;
};

const PDFViewer = ({
  doc,
  loading = true,
  groups,
  setGroups,
  extraHandlers = {},
  extraKeymap = {},
  predictions,
}: PDFViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [previewPage, setPreviewPage] = useState(1);

  // ref for looking for focusable elements
  const groupContainerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const docBinary = useMemo(() => {
    const docBinary = atob(doc || '');
    return { data: docBinary };
  }, [doc]);

  useEffect(() => {
    if (!numPages) return;
    setPreviewPage(1);

    // for now no predictions are expected, but this should make it possible to receive them in the future
    // if no predictions, group all pages together by default
    if (!predictions || predictions?.length === 0) {
      const allPages = [...Array(numPages).keys()].map((key) => key + 1);
      setGroups([{ pages: allPages, category: 'INVOICE' }]);
    } else if (predictions && predictions.length > 0) {
      setGroups(predictions);
      console.log(predictions);
    }
  }, [numPages, predictions]);

  // Unclear what behavior should be like after cutting a group, but for now when the groups changes,
  // we will focus the last focused page again. This also makes the first page focus on page load.
  useLayoutEffect(() => {
    focusPage(previewPage);
  }, [groups]);

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
    const combinedGroup = { ...firstGroup, pages: [...firstGroup.pages, ...secondGroup.pages] };

    groupsCopy.splice(firstGroupIndex, 2, combinedGroup);

    setGroups(groupsCopy);
  };

  // Split a group into two groups, where cutIndex indicates where the second group
  // should start.
  const cutGroup = (groupIndex: number, cutIndex: number): void => {
    const groupsCopy = [...groups];
    const oldGroup = groupsCopy[groupIndex];
    const newFirstGroup = { ...oldGroup, pages: oldGroup.pages.slice(0, cutIndex) };
    const newSecondGroup = { ...oldGroup, pages: oldGroup.pages.slice(cutIndex) };

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
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasPrevGroup = currentGroupIndex > 0;

      if (hasPrevGroup) {
        const firstPageOfPrevGroup = groups[currentGroupIndex - 1][0];
        onFocus(currentGroupIndex - 1, 0, firstPageOfPrevGroup);
        focusPage(firstPageOfPrevGroup);
      }
    },
    // focus first page in next group
    SELECT_NEXT_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasNextGroup = currentGroupIndex >= 0 && currentGroupIndex !== groups.length - 1;

      if (hasNextGroup) {
        const firstPageOfNextGroup = groups[currentGroupIndex + 1][0];
        onFocus(currentGroupIndex - 1, 0, firstPageOfNextGroup);
        focusPage(firstPageOfNextGroup);
      }
    },
    CUT_PREV: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      if (currentGroupIndex >= 0) {
        const currentPageIndex = groups[currentGroupIndex].pages.findIndex((page) => page === previewPage);
        const hasPrevPage = currentPageIndex > 0;
        hasPrevPage && cutGroup(currentGroupIndex, currentPageIndex);
      }
    },
    CUT_NEXT: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      if (currentGroupIndex >= 0) {
        const currentPageIndex = groups[currentGroupIndex].pages.findIndex((page) => page === previewPage);
        const hasNextPage = currentPageIndex >= 0 && currentPageIndex !== groups[currentGroupIndex].pages.length - 1;
        hasNextPage && cutGroup(currentGroupIndex, currentPageIndex + 1);
      }
    },
    MERGE_PREV_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasPrevGroup = currentGroupIndex > 0;
      if (hasPrevGroup) {
        joinGroups(currentGroupIndex - 1, currentGroupIndex);
      }
    },
    MERGE_NEXT_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasNextGroup = currentGroupIndex >= 0 && currentGroupIndex !== groups.length - 1;
      if (hasNextGroup) {
        joinGroups(currentGroupIndex, currentGroupIndex + 1);
      }
    },
    ...extraHandlers,
  };

  // react-hotkeys types aren't 100% correct sadly
  const keyMap: any = {
    SELECT_PREV_GROUP: {
      name: 'Move to previous group',
      sequences: ['ctrl+left'],
    },
    SELECT_NEXT_GROUP: {
      name: 'Move to next group',
      sequences: ['ctrl+right'],
    },
    CUT_PREV: {
      name: 'Cut previous page',
      sequences: ['ctrl+z'],
    },
    CUT_NEXT: {
      name: 'Cut next page',
      sequences: ['ctrl+x'],
    },
    MERGE_PREV_GROUP: {
      name: 'Merge with previous group',
      sequences: 'shift+z',
    },
    MERGE_NEXT_GROUP: {
      name: 'Merge with next group',
      sequences: 'shift+x',
    },
    ...extraKeymap,
  };

  return (
    <>
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges />
      {loading ? (
        <Spinner />
      ) : (
        <Document
          file={docBinary}
          onLoadSuccess={onDocumentLoadSuccess}
          onSourceSuccess={() => setNumPages(null)}
          loading={<Spinner />}
          options={options}
          className={styles['outer-container']}
        >
          <div className={styles['page-preview']}>
            <Page pageNumber={previewPage} width={600} className={styles['page-preview-canvas']} />
          </div>
          <div className={styles['group-container']} ref={groupContainerRef}>
            {!loading &&
              groups.map((group, groupIndex) => {
                const hasNextGroup = groupIndex !== groups.length - 1;
                const groupKey = `group_${groupIndex}-${group.pages.join('-')}`;
                return (
                  <div key={groupKey} className={styles['page-container']}>
                    <div className={styles['group-tab']}>{(groupIndex + 1).toString().padStart(2, '0')}</div>
                    <ul>
                      {group.pages.map((pageNumber, pageIndex) => {
                        const hasPrevPage = pageIndex !== 0;
                        const hasNextPage = pageIndex !== group.pages.length - 1;
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
      )}
    </>
  );
};

export default PDFViewer;
