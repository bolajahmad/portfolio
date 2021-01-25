import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GitHub, Link as LinkIcon } from 'react-feather';
import { PageLayout } from '../../components';
import SEO from '../../components/seo';
import { ProjectModel } from '../../models';
import './projects-page.styles.scss';



const ProjectWrapper: React.FC<{
  project: ProjectModel;
}> = ({ project }) => {
  const [ descShowing, showDesc ] = useState<boolean>(false);

  return (
    <li className="projects_list_item" key={project.id}>
      <div className="project_wrapper">
        <div className="project_detail">
          <h1>
            {project.title}
            <div>
              <span>
                <LinkIcon />
              </span>
              <span>
                <GitHub />
              </span>
            </div>
          </h1>

          <div>
            <p>
              stacks used: {project.stacks.join(', ')}
            </p>

            {descShowing && <p>
              {project.description}
            </p>}
          </div>
        </div>

        <div className="caret">
          <button className="btn" onClick={() => showDesc((prev) => !prev)}>
            {descShowing ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>
      </div>
    </li>
  )
};

export const ProjectsComponent: React.FC<{
  projects: ProjectModel[];
}> = ({ projects }) => {
  return (
    <PageLayout>
      <SEO title="projects" />
      
      <div className="projects_wrapper">
        <ul className="projects_list">
          {projects.map((project) => (
            <ProjectWrapper project={project} />
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};