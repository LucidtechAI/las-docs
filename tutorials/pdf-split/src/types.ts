import { Client } from '@lucidtech/las-sdk-core';
import { Asset, Transition, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';

export enum QueueStatus {
  LOADING = 'LOADING',
  READY = 'READY',
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

export type EnumOption =
  | {
      display: string;
      value: string;
    }
  | string;

export type Field = {
  type: string;
  display: string;
  enum?: Array<EnumOption>;
  confidenceLevels: { automated: number; highest: number; high: number; low: number };
};
