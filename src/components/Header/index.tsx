import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import 'assets/images/menu-bar.svg';

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
    </View>
  );
};

export default Header;
