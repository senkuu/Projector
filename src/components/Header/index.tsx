import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from './AppBar.svg';

interface IHeaderProps {
  label: string;
}

const styles = StyleSheet.create({
  projectName: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

const Header: React.FC<IHeaderProps> = ({ label }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.projectName}>{label}</Text>
      <AppBar />
    </View>
  );
};

export default Header;
