import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Project as IProject } from 'src/commons/types';

interface props {
  project: IProject;
}

const styles = StyleSheet.create({
  projectBlock: {
    backgroundColor: '#fff',
    borderRadius: 16,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    marginHorizontal: 15,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 6,
  },

  projectName: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});

const Project: React.FC<props> = props => {
  return (
    <View style={styles.projectBlock}>
      <Text style={styles.projectName}>{props.project.name}</Text>
    </View>
  );
};

export default Project;
