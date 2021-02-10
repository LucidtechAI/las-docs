import { Client } from '@lucidtech/las-sdk-core';
import { Asset, Transition, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';

export enum QueueStatus {
  LOADING = 'LOADING',
  LOADING_FIRST_TASK = 'LOADING_FIRST_TASK',
  EMPTY = 'EMPTY',
  READY = 'READY',
  TIMEOUT = 'TIMEOUT',
  REFRESH = 'REFRESH',
}

export type RemoteComponentExternalProps = {
  onReject: (taskError: string) => void;
  onApprove: (taskResult: Record<string, unknown>) => void;
  onSkip: () => void;
  onEndSession: () => void;
  onRequestNew: () => void;
  getAsset: (assetId: string) => Promise<Asset>;
  numProcessed: number;
  transition: Transition;
  queueStatus: QueueStatus;
  transitionExecution: TransitionExecution;
  client: Client;
};

export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  id?: string;
};
export interface Dimensions {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Prediction {
  value: [number, number, number, number];
  label: string | null;
}
