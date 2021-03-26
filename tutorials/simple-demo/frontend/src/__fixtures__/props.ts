import { Transition, TransitionExecution } from '@lucidtech/las-sdk-core';
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

export function createTransitionExecution(transitionId?: string, documentId = ''): TransitionExecution {
  const input = {
    documentId,
    predictions: [
      {
        label: 'document_type',
        value: 'INVOICE',
        confidence: 0.9833426,
      },
      {
        label: 'bank_account',
        value: '1010101',
        confidence: 0.9833426,
      },
      {
        label: 'bank_account',
        value: '1010201',
        confidence: 0.8833426,
      },
      {
        label: 'due_date',
        value: '21.01.2021',
        confidence: 0.913426,
      },
    ],
  };

  const execution: TransitionExecution = {
    executionId: faker.random.uuid(),
    transitionId: transitionId || faker.random.uuid(),
    status: 'running',
    completedBy: null,
    startTime: new Date().toISOString(),
    endTime: null,
    input,
  };

  return execution;
}
