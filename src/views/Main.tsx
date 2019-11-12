import React from 'react';
import { View } from 'react-native';

import { name as appName } from '../../app.json';

import Header from 'components/Header';
import ProjectList from 'components/ProjectList';

import { Project } from 'src/commons/types.js';

const projectArray: Array<Project> = [
  { id: 1, name: 'Lorem Ipsum' },
  { id: 2, name: 'Lorem Ipsum 2' },
  { id: 3, name: 'Lorem Ipsum 3' },
];

const Main: React.FC = () => {
  return (
    <View>
      <Header label={appName} />
      <ProjectList projects={projectArray} />
    </View>
  );
};

export default Main;
