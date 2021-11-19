import { Transition, TransitionExecution } from '@lucidtech/las-sdk-core/lib/types';
import faker from 'faker';

export function createTransition(): Transition {
  const transition: Transition = {
    name: faker.hacker.ingverb(),
    description: 'test',
    inputJsonSchema: {},
    transitionId: faker.random.uuid(),
    transitionType: 'manual',
    parameters: {
      assets: {
        jsRemoteComponent: 'las:asset:abcdefg',
        fieldConfig: 'las:asset:fieldConfig',
      },
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
    pagePredictions: [
      { pages: [1], category: 'INVOICE' },
      { pages: [2], category: 'RECEIPT' },
      { pages: [3, 4], category: 'MULTIPLE_RECEIPTS' },
    ],
    cropPredictions: [
      [
        { x: 0.5, y: 0.5, w: 0.1, h: 0.1 },
        { x: 0.8, y: 0.1, w: 0.1, h: 0.1 },
      ],
      [{ x: 0.2, y: 0.2, w: 0.5, h: 0.5 }],
      [
        { x: 0.1, y: 0.1, w: 0.25, h: 0.25 },
        { x: 0.5, y: 0.5, w: 0.1, h: 0.1 },
        { x: 0.7, y: 0.7, w: 0.2, h: 0.2 },
      ],
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
