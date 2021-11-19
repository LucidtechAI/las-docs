import React, { Dispatch, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { GlobalHotKeys } from 'react-hotkeys';
import { Rnd } from 'react-rnd';
import { Button, Select } from '@lucidtech/flyt-form';

import styles from './PDFViewer.module.css';
import ScissorButton from './ScissorButton';
import MergeButton from './MergeButton';
import Spinner from './Spinner';
import { GroupPrediction, Groups } from '..';
import { Dimensions, EnumOption, PageBoundingBoxes, Position } from '../types';
import CustomHandle from './CustomHandle';
import { normalizeDimensionsToScale, normalizePositionToScale, normalizeToPixels } from '../utils';
import { Action } from '../boxReducer';

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
  boxDispatch: Dispatch<Action>;
  boundingBoxes: PageBoundingBoxes;
  extraKeymap?: Record<string, any>;
  extraHandlers?: Record<string, any>;
  predictions?: Array<GroupPrediction>;
  categories?: Array<EnumOption>;
};

const PDFViewer = ({
  doc,
  loading = true,
  groups,
  setGroups,
  extraHandlers = {},
  extraKeymap = {},
  predictions,
  categories = [],
  boundingBoxes,
  boxDispatch,
}: PDFViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [previewPage, setPreviewPage] = useState(1);
  const [dimensions, setDimensions] = useState<Dimensions>({ w: 600, h: 800 });

  // ref for looking for focusable elements
  const groupContainerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    boxDispatch({ type: 'ensurePageCount', pages: numPages });
  }

  // get new page dimensions on resize or page selection
  const measuredRef = useCallback((node: null | HTMLDivElement) => {
    function outputsize() {
      const w = node?.getBoundingClientRect().width || 600;
      const h = node?.getBoundingClientRect().height || 800;
      setDimensions({ w, h });
    }

    if (node !== null) {
      new ResizeObserver(outputsize).observe(node);
    }
  }, []);

  const docBinary = useMemo(() => {
    const docBinary = atob(doc || '');
    return { data: docBinary };
  }, [doc]);

  // enum options can be string or record. create a lookup map so we can normalize the predictions
  // and map them to the fieldconfig options for enums.
  const categoryLookup = useMemo(() => {
    const lookupMap = new Map<string, string>();
    for (const category of categories) {
      if (typeof category !== 'string') {
        lookupMap.set(category.value, category.display);
      }
    }

    return lookupMap;
  }, [categories]);

  useEffect(() => {
    if (!numPages) return;
    setPreviewPage(1);

    // if no predictions, group all pages together by default
    if (!predictions || predictions?.length === 0) {
      const allPages = [...Array(numPages).keys()].map((key) => key + 1);
      setGroups([{ pages: allPages, category: '' }]);
    } else if (predictions && predictions.length > 0) {
      const mapped: Groups = predictions.map((prediction) => ({
        ...prediction,
        category: {
          display: categoryLookup.get(prediction.category) || prediction.category,
          value: prediction.category,
        },
      }));
      setGroups(mapped);
    }
  }, [numPages, predictions, categoryLookup]);

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

  const changeCategory = (groupIndex: number, category: EnumOption): void => {
    const groupsCopy = [...groups];
    const selectedGroup = groupsCopy[groupIndex];
    selectedGroup.category = category;

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
    // focus the select in the current group
    FOCUS_CATEGORY: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      if (currentGroupIndex >= 0) {
        const selectElements: NodeListOf<HTMLButtonElement> | undefined = groupContainerRef.current?.querySelectorAll(
          `.${styles.select} button`,
        );
        selectElements?.[currentGroupIndex]?.focus();
      }
    },
    // focus first page in previous group
    SELECT_PREV_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasPrevGroup = currentGroupIndex > 0;

      if (hasPrevGroup) {
        const firstPageOfPrevGroup = groups[currentGroupIndex - 1].pages[0];
        onFocus(currentGroupIndex - 1, 0, firstPageOfPrevGroup);
        focusPage(firstPageOfPrevGroup);
      }
    },
    // focus first page in next group
    SELECT_NEXT_GROUP: () => {
      const currentGroupIndex = groups.findIndex((group) => group.pages.includes(previewPage));
      const hasNextGroup = currentGroupIndex >= 0 && currentGroupIndex !== groups.length - 1;

      if (hasNextGroup) {
        const firstPageOfNextGroup = groups[currentGroupIndex + 1].pages[0];
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
    FOCUS_CATEGORY: {
      name: 'Select group category',
      sequences: ['shift+a'],
    },
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
        <>
          <Document
            file={docBinary}
            onLoadSuccess={onDocumentLoadSuccess}
            onSourceSuccess={() => setNumPages(null)}
            loading={<Spinner />}
            options={options}
            className={styles['outer-container']}
          >
            <div className={styles['page-preview']}>
              <Page
                pageNumber={previewPage}
                width={600}
                className={styles['page-preview-canvas']}
                inputRef={measuredRef}
              />
              {boundingBoxes[previewPage - 1]?.map((box) => {
                const { x, y, w, h } = normalizeToPixels(box, dimensions);
                // base key on window dimensions to force a re-render of boxes if window gets resized
                // slightly hacky but necessary it seems
                const key = `${box.id}-${dimensions.w}-${dimensions.h}`;
                return (
                  <Rnd
                    key={key}
                    bounds=".react-pdf__Page"
                    size={{
                      width: w,
                      height: h,
                    }}
                    position={{
                      x: x,
                      y: y,
                    }}
                    onDragStop={(_event: any, d: any) => {
                      const scalePosition = normalizePositionToScale({ x: d.x, y: d.y }, dimensions);
                      boxDispatch({
                        type: 'updateBox',
                        x: scalePosition.x,
                        y: scalePosition.y,
                        w: box.w,
                        h: box.h,
                        page: previewPage - 1,
                        id: box.id || '',
                      });
                    }}
                    onResize={(_event, _direction, ref, _delta, position) => {
                      const scalePosition = normalizePositionToScale({ x: position.x, y: position.y }, dimensions);
                      const scaleDimensions = normalizeDimensionsToScale(
                        { w: ref.offsetWidth, h: ref.offsetHeight },
                        dimensions,
                      );
                      boxDispatch({
                        type: 'updateBox',
                        x: scalePosition.x,
                        y: scalePosition.y,
                        w: scaleDimensions.w,
                        h: scaleDimensions.h,
                        page: previewPage - 1,
                        id: box.id || '',
                      });
                    }}
                    minHeight={40}
                    minWidth={40}
                    style={{
                      backgroundColor: 'rgba(0,255,0,0.05)',
                      border: '1px dashed rgba(0,0,0,0.5)',
                    }}
                    resizeHandleComponent={{
                      bottomLeft: <CustomHandle />,
                      bottomRight: <CustomHandle />,
                      topLeft: <CustomHandle />,
                      topRight: <CustomHandle />,
                    }}
                  >
                    <Button
                      variant="danger"
                      onClick={() => box.id && boxDispatch({ type: 'deleteBox', page: previewPage - 1, id: box.id })}
                      className="m-2 p-1"
                      style={{
                        borderColor: 'var(--danger)',
                      }}
                    >
                      <span className="fe fe-trash-2" />
                    </Button>
                  </Rnd>
                );
              })}
            </div>
            <div className={styles['group-container']} ref={groupContainerRef}>
              {!loading &&
                groups.map((group, groupIndex) => {
                  const hasNextGroup = groupIndex !== groups.length - 1;
                  const groupKey = `group_${groupIndex}-${group.pages.join('-')}`;
                  return (
                    <div key={groupKey} className={styles['page-container']}>
                      <div className={styles['group-tab']}>{(groupIndex + 1).toString().padStart(2, '0')}</div>
                      <Select
                        options={categories}
                        className={styles.select}
                        selectedItem={group.category}
                        innerTabIndex={-1}
                        handleSelectedItemChange={(item) =>
                          item.selectedItem && changeCategory(groupIndex, item.selectedItem)
                        }
                      />
                      <ul className={styles['group-list']}>
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

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: '600px',
            }}
            className="my-3"
          >
            <Button variant="success" onClick={() => boxDispatch({ type: 'addBox', page: previewPage - 1 })}>
              <span className="fe fe-plus-square mr-2" /> Add box
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default PDFViewer;
