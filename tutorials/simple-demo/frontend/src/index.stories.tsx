import React from 'react';
import { Meta } from '@storybook/react';

import RemoteComponent from './index';
import PropProvider from './__mocks__/Provider';

export default {
  title: 'RemoteComponent',
  component: RemoteComponent,
} as Meta;

export const Default = (): JSX.Element => (
  <PropProvider Component={RemoteComponent} documentId="las:document:multipagepdf" />
);
export const BigJPG = (): JSX.Element => <PropProvider Component={RemoteComponent} documentId="las:document:bigjpg" />;
export const MultiPageTIFF = (): JSX.Element => (
  <PropProvider Component={RemoteComponent} documentId="las:document:multipagetiff" />
);
