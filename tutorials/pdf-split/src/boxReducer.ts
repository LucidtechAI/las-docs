import { PageBoundingBoxes } from './types';
import { generateSemiRandomId } from './utils';

export type State = PageBoundingBoxes;
export type Action =
  | { type: 'addBox'; page: number }
  | { type: 'ensurePageCount'; pages: number }
  | { type: 'deleteBox'; page: number; id: string }
  | { type: 'deriveFromPredictions'; predictions: PageBoundingBoxes }
  | { type: 'updateBox'; w: number; h: number; x: number; y: number; page: number; id: string };

export function boxReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'deriveFromPredictions': {
      const newState: State = [];
      for (const page of action.predictions) {
        const newPage = page.map((boxPrediction, idx) => ({
          ...boxPrediction,
          id: `prediction-${idx}-${generateSemiRandomId()}`,
        }));
        newState.push(newPage);
      }
      return newState;
    }
    // after the PDF has been loaded, we can ensure we have all pages as arrays
    case 'ensurePageCount': {
      const stateCopy = [...state];
      for (let i = state.length; i < action.pages; i++) {
        stateCopy.push([]);
      }
      return stateCopy;
    }
    case 'addBox': {
      const stateCopy = [...state];
      if (stateCopy[action.page]) {
        const pageCopy = [...stateCopy[action.page]];
        const newBoxId = `newBox-${generateSemiRandomId()}`;
        pageCopy.push({ x: 0.35, y: 0.35, w: 0.2, h: 0.2, id: newBoxId });
        stateCopy[action.page] = pageCopy;
      }
      return stateCopy;
    }
    case 'updateBox': {
      const stateCopy = [...state];
      if (stateCopy[action.page]) {
        const pageCopy = [...stateCopy[action.page]];
        const indexToUpdate = pageCopy.findIndex((box) => box.id === action.id);

        if (indexToUpdate >= 0) {
          pageCopy[indexToUpdate] = { ...pageCopy[indexToUpdate], w: action.w, h: action.h, x: action.x, y: action.y };
          stateCopy[action.page] = pageCopy;
        }
      }
      return stateCopy;
    }
    case 'deleteBox': {
      const stateCopy = [...state];
      if (stateCopy[action.page]) {
        const pageCopy = [...stateCopy[action.page]];
        const indexToDelete = pageCopy.findIndex((box) => box.id === action.id);

        if (indexToDelete >= 0) {
          pageCopy.splice(indexToDelete, 1);
        }
        stateCopy[action.page] = pageCopy;
      }
      return stateCopy;
    }
    default:
      return state;
  }
}
