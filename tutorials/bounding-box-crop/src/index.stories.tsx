import React from 'react';
import { Meta } from '@storybook/react';

import Konva from './index'
import RemoteComponent from './indexReact'
import PropProvider from './__mocks__/Provider';

export default {
  title: 'RemoteComponent',
  component: RemoteComponent,
} as Meta;

export const Default = (): JSX.Element => <PropProvider Component={RemoteComponent} />;
export const KonvaTest = (): JSX.Element => <PropProvider Component={Konva} />;
