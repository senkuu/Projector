/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from 'components/Header';

import renderer, {
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer';

it('Should render', () => {
  const headerTree = renderer.create(<Header label="hello" />).toJSON();
  expect(headerTree).toMatchSnapshot();
});

describe('Header label should equal label props', () => {
  it('Should render header with "Projector" as label', () => {
    const label: string = 'Projector';
    const headerComponent: ReactTestRenderer = renderer.create(
      <Header label={label} />,
    );
    expect(headerComponent.root.findByType('text').children).toEqual(label);
  });
});
