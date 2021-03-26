import React, { ComponentType, useState } from 'react';
import { Client as SDKClient } from '@lucidtech/las-sdk-core';
import { Asset, TransitionExecution } from '@lucidtech/las-sdk-core';

import documents from './documents';
import assets from './assets';
import { QueueStatus, RemoteComponentExternalProps } from '../types';
import { createTransition, createTransitionExecution } from './props';

class Client {
  async getDocument(documentId: string): Promise<any> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        const document = documents[documentId];
        return resolve(document);
      }, 1000);
    });
  }
}

const client = (new Client() as unknown) as SDKClient;

type PropProviderProps = {
  Component: ComponentType<RemoteComponentExternalProps>;
};

const PropProvider = ({ Component }: PropProviderProps): JSX.Element => {
  const [transition, setTransition] = useState(createTransition());
  const [transitionExecution, setTransitionExecution] = useState(createTransitionExecution(transition.transitionId));
  const [queueStatus, setQueueStatus] = useState(QueueStatus.READY);

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
    setQueueStatus(QueueStatus.LOADING);
    new Promise<TransitionExecution>((resolve, _reject) => {
      setTimeout(() => {
        const execution = createTransitionExecution(transition.transitionId);
        return resolve(execution);
      }, 1500);
    }).then((res) => {
      setQueueStatus(QueueStatus.READY);
      setTransitionExecution(createTransitionExecution(res.transitionId));
    });
  };

  const getAsset = async (assetId: string): Promise<Asset> => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        const asset = assets[assetId];
        return resolve(asset);
      }, 1000);
    });
  };

  return (
    <Component
      transition={transition}
      onApprove={onApprove}
      onReject={onReject}
      onEndSession={onEndSession}
      onRequestNew={onRequestNew}
      client={client}
      transitionExecution={transitionExecution}
      getAsset={getAsset}
      numProcessed={0}
      onSkip={onSkip}
      queueStatus={queueStatus}
    />
  );
};

export default PropProvider;
