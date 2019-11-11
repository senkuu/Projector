import React from 'react';
import { View } from 'react-native';

import { name as appName } from '../../app.json';

import Header from 'components/Header';

const Main: React.FC = () => {
  return (
    <View>
      <Header label={appName} />
    </View>
  );
};

export default Main;
