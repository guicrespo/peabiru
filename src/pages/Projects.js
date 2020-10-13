import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import projects from '../mocks/projectsMock';
import '../styles/Projects.css';

const Projects = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);
  const [projectOpen, setProjectOpen] = useState({ open: false, project: '' });

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('projects');
  }, []);

  return (
    <section className="content-body">
      <h2>Projetos</h2>
      <section>
        {projects.map(({ name, description }) => (
          <article key={name}>
            <section className="project-title-section">
              <h3>{name}</h3>
              <button
                type="button"
                onClick={() => (projectOpen.project !== name
                  ? setProjectOpen({ open: true, project: name })
                  : setProjectOpen({ open: !projectOpen.open, project: name }))}
                className={projectOpen.project === name && projectOpen.open === true
                  ? 'minus'
                  : 'plus'}
              >
                {projectOpen.project === name && projectOpen.open === true ? '-' : '+'}
              </button>
            </section>
            {projectOpen.project === name && projectOpen.open === true
              ? <p>{description}</p>
              : undefined}
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
