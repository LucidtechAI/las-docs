import { Client, Asset, Transition, TransitionExecution } from '@lucidtech/las-sdk-core';

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

export type EnumOption = {
  display: string;
  value: string;
};

export type Field = {
  type: string;
  display: string;
  enum?: Array<EnumOption | string>;
  confidenceLevels: { automated: number; highest: number; high: number; low: number };
};
