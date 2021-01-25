import { graphql } from 'gatsby';
import React from 'react';
import { ProjectModel } from '../models';
import { ProjectsComponent } from '../views';


const ProjectsPage = ({ data }: any) => {
  return <ProjectsComponent projects={data.site.siteMetadata.projects as ProjectModel[]} />;
}

export default ProjectsPage;


export const query = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        projects {
          title
          author
          stacks
          description
          id
          duration
        }
      }
    }
  }
`