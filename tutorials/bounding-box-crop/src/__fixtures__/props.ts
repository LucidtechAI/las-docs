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
    documentId: 'las:document:abc',
    inferenceTime: 0,
    modelId: 'las:model:abc',
    predictionId: 'las:prediction:abc',
    timestamp: 0,
    predictions: [
      {
        label: 'something',
        value: [0, 0, 0.2, 0.2],
        confidence: 0.9833426,
      },
      {
        label: 'something',
        value: [0.2, 0.2, 0.2, 0.2],
        confidence: 0.9833426,
      },
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
