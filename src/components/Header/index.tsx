import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  projectName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
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
