import React from 'react';
import { View } from 'react-native';

import appInfo from '../../app.json';

import Header from 'components/Header';

const Main: React.FC = () => {
  return (
    <View>
      <Header label={appInfo.name} />
    </View>
  );
};

export default Main;
