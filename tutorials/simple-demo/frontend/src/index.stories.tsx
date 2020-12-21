import React from 'react';
import { Meta } from '@storybook/react';

import props from './__fixtures__/props';
import RemoteComponent from './index'

export default {
  title: 'RemoteComponent',
  component: RemoteComponent,
} as Meta;

export const Default = (): JSX.Element => <RemoteComponent {...props} />;
