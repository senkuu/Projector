import React from 'react';
import { View, Text } from 'react-native';
import { Project as IProject } from 'src/commons/types';

interface props {
  project: IProject;
}

const Project: React.FC<props> = props => {
  return (
    <View>
      <Text>{props.project.name}</Text>
    </View>
  );
};

export default Project;
