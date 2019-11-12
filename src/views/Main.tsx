import React from 'react';
import { View } from 'react-native';

import { name as appName } from '../../app.json';

import Header from 'components/Header';
import ProjectList from 'components/ProjectList';

interface IProject {
  id: number;
  name: string;
}

const projectArray: Array<IProject> = [
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
