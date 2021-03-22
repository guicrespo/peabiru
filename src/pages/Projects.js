import request from 'graphql-request';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import '../styles/Projects.css';

const Projects = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);
  const [projectOpen, setProjectOpen] = useState({ open: false, project: '' });
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('projects');
    const fetchProjects = async () => {
      const { projetos: projects } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            projetos {
              project
              description
            }
          }
        `,
      );
      setProjectsData(projects);
    };
    fetchProjects();
  }, []);

  return (
    <section className="content-body">
      <h2>Projetos</h2>
      <section>
        {projectsData.map(({ project, description }) => (
          <article key={project}>
            <section className="project-title-section">
              <h3>{project}</h3>
              <button
                type="button"
                onClick={() => (projectOpen.project !== project
                  ? setProjectOpen({ open: true, project })
                  : setProjectOpen({ open: !projectOpen.open, project }))}
                className={projectOpen.project === project && projectOpen.open === true
                  ? 'minus'
                  : 'plus'}
              >
                {projectOpen.project === project && projectOpen.open === true ? '-' : '+'}
              </button>
            </section>
            {projectOpen.project === project && projectOpen.open === true
              ? <p>{description}</p>
              : undefined}
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
