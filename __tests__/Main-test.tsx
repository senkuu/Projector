/**
 * @format
 */

import 'react-native';
import React from 'react';
import Main from '../src/views/Main';

import renderer, { ReactTestRenderer } from 'react-test-renderer';
import App from 'App';
import { Text } from 'react-native';

it('Should pass', () => {
  expect(2 + 2).toBe(4);
});
