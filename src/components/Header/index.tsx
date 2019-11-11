import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from './AppBar.svg';

const styles = StyleSheet.create({
  projectName: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
});

const Header: React.FC = () => {
  return (
    <View>
      <Text style={styles.projectName}>Projector</Text>
      <AppBar />
    </View>
  );
};

export default Header;
