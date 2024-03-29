import { Transition, TransitionExecution } from '@lucidtech/las-sdk-core';
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
    documentId: 'las:document:abc',
    inferenceTime: 0,
    modelId: 'las:model:abc',
    predictionId: 'las:prediction:abc',
    timestamp: 0,
    predictions: [
      { x: 0, y: 0, w: 0.2, h: 0.2 },
      { x: 0.2, y: 0.2, w: 0.2, h: 0.2 },
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
