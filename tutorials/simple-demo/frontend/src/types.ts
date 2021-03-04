import { Client } from "@lucidtech/las-sdk-core";
import { Asset, Transition, TransitionExecution } from "@lucidtech/las-sdk-core/lib/types";

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
