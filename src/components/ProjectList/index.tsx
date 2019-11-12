import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Project from './components/Project';

// types
import { Project as IProject } from 'src/commons/types';

interface props {
  projects: Array<IProject>;
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    marginTop: 20,
  },
});

const ProjectList: React.FC<props> = props => {
  return (
    <ScrollView style={styles.scrollView}>
      {props.projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ScrollView>
  );
};

export default ProjectList;
