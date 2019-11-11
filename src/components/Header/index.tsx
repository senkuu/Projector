import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppBar from './AppBar.svg';

interface IHeaderProps {
  label: string;
}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.projectName}>{props.label}</Text>
      <AppBar />
    </View>
  );
};

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

export default Header;
