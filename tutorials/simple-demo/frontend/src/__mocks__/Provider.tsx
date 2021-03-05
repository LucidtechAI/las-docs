import React, { ComponentType, useState } from 'react';
import { Client as SDKClient } from '@lucidtech/las-sdk-core';
import { Asset, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';

import assets from '../__fixtures__/assets';
import documents from '../__fixtures__/documents';
import { QueueStatus, RemoteComponentExternalProps } from '../types';
import { createTransition, createTransitionExecution } from '../__fixtures__/props';

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
  documentId: string;
};

const PropProvider = ({ Component, documentId }: PropProviderProps): JSX.Element => {
  const [transition, setTransition] = useState(createTransition());
  const [transitionExecution, setTransitionExecution] = useState(
    createTransitionExecution(transition.transitionId, documentId),
  );
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
        const execution = createTransitionExecution(transition.transitionId, documentId);
        return resolve(execution);
      }, 500);
    }).then((res) => {
      setQueueStatus(QueueStatus.READY);
      setTransitionExecution(res);
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
