import { Client as SDKClient } from '@lucidtech/las-sdk-core';
import { Asset, PredictionResponse, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';

import { QueueStatus, RemoteComponentExternalProps } from '../types';
import assets from './assets';
import documents from './documents';

class Client {
  async getDocument(documentId: string): Promise<any> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        const document = documents[documentId]
        return resolve(document);
      }, 2000);
    })
  }
};

const client = new Client() as unknown as SDKClient

const onReject = (taskError: string): void => {
  console.log(taskError);
};
const onApprove = (taskResult: Record<string, unknown>): void => {
  console.log(taskResult);
};
const onSkip = (): void => {
  console.log('skip task');
};
const onEndSession = (): void => {
  console.log('end session');
};
const onRequestNew = (): void => {
  console.log('request new task');
};
const getAsset = async (assetId: string): Promise<Asset> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const asset = assets[assetId];
      return resolve(asset);
    }, 1000);
  })
};

const input: PredictionResponse = {
  documentId: 'las:document:abc',
  predictions: [
    {
      label: 'bank_account',
      value: '1010101',
      confidence: 0.9833426,
    },
  ],
}

const transitionExecution: TransitionExecution = {
  executionId: '',
  transitionId: '',
  status: 'running',
  completedBy: null,
  input
};

const props: RemoteComponentExternalProps = {
  numProcessed: 0,
  queueStatus: QueueStatus.READY,
  getAsset,
  onReject,
  onApprove,
  onEndSession,
  onRequestNew,
  onSkip,
  client,
  transition: {
    name: 'test',
    description: 'test',
    inputJsonSchema: {},
    transitionId: 'abcdefg',
    transitionType: 'manual',
    assets: {
      jsRemoteComponent: 'las:asset:abcdefg',
      fields: 'las:asset:fields'
    },
  },
  transitionExecution,
};

export default props;
