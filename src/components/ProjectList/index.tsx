import React from 'react';
import { ScrollView } from 'react-native';

import Project from './components/Project';

interface IProject {
  id: number;
  name: string;
}

interface props {
  projects: Array<IProject>;
}

const ProjectList: React.FC<props> = props => {
  return (
    <ScrollView>
      {props.projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ScrollView>
  );
};

export default ProjectList;
