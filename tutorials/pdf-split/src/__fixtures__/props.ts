import { Transition, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';
import faker from 'faker';

export function createTransition(): Transition {
  const transition: Transition = {
    name: faker.hacker.ingverb(),
    description: 'test',
    inputJsonSchema: {},
    transitionId: faker.random.uuid(),
    transitionType: 'manual',
    assets: {
      jsRemoteComponent: 'las:asset:abcdefg',
      fieldConfig: 'las:asset:fieldConfig',
    },
  };

  return transition;
}

export function createTransitionExecution(transitionId?: string): TransitionExecution {
  const input: any = {
    documentId: 'las:document:a',
    inferenceTime: 0,
    modelId: 'las:model:abc',
    predictionId: 'las:prediction:abc',
    timestamp: 0,
    predictions: [
      { pages: [1], category: 'INVOICE' },
      { pages: [2], category: 'RECEIPT' },
      { pages: [3, 4], category: 'MULTIPLE_RECEIPTS' },
    ],
  };

  const execution: TransitionExecution = {
    executionId: faker.random.uuid(),
    transitionId: transitionId || faker.random.uuid(),
    status: 'running',
    completedBy: null,
    endTime: null,
    startTime: null,
    input,
  };

  return execution;
}
