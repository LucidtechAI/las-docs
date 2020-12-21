import { Client } from '@lucidtech/las-sdk-core';
import { Transition, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';

export type TaskActions = {
  /** Rejects the current task */
  onReject: (taskError: string) => void;
  /** Approves the current task with the task result (field values) */
  onApprove: (taskResult: Record<string, unknown>) => void;
  /** Skips the current task */
  onSkip: () => void;
  /** Ends the current session (navigates away to /processed) */
  onEndSession: () => void;
  /** Requests a new task from the current queue */
  onRequestNew: () => void;
};

export enum QueueStatus {
  LOADING = 'LOADING',
  LOADING_FIRST_TASK = 'LOADING_FIRST_TASK',
  EMPTY = 'EMPTY',
  READY = 'READY',
  TIMEOUT = 'TIMEOUT',
  REFRESH = 'REFRESH',
}

export type RemoteComponentExternalProps = TaskActions & {
  /** Function to retrieve the specified asset */
  getAsset: (
    assetId: string
  ) => Promise<{
    assetId: string;
    content?: string;
  }>;
  /** The number of processed documents in the current "session" (browsing session without reloads) */
  numProcessed: number;
  /** The "queue" (transition), that the "task" (transitionExecution) is from */
  transition: Transition;
  /** What status the queue is in. Most relevant being "LOADING", "READY" in this case */
  queueStatus: QueueStatus;
  /** Full task data (Ids, input, etc.) */
  transitionExecution: TransitionExecution;
  /** An instantiated Client in case you want to use anything from the SDK directly,
   *  or do a manual request via client.makeGetRequest('/endpoint') or similar.
   */
  client: Client;
};
