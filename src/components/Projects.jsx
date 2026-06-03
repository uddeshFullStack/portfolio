import React from 'react'
import { MINOR_PROJECTS, PROJECTS } from '../constants'
import { CiLink } from "react-icons/ci";
import { motion } from 'framer-motion'

const ProjectList = ({ projects }) => (
  <div>
    {projects.map((project, index) => {
      const content = (
        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4 mr-0 lg:mr-10 sm:mr-7'
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className='mb-6 rounded'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ) : (
              <div className='mb-6 flex h-44 w-full items-center justify-center rounded border border-neutral-800 bg-neutral-900 px-4'>
                <span className='text-center text-sm font-medium text-neutral-400'>
                  {project.company || project.title}
                </span>
              </div>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'
          >
            <h6 className='mb-2 font-semibold'>
              {project.title}
              {project.link && <CiLink />}
            </h6>
            {(project.company || project.period) && (
              <p className='mb-2 text-sm text-purple-200'>
                {[project.company, project.period].filter(Boolean).join(' · ')}
              </p>
            )}
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className='mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      );

      return project.link ? (
        <a
          key={index}
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {content}
        </a>
      ) : (
        <div key={index}>{content}</div>
      );
    })}
  </div>
);

const SectionTitle = ({ children }) => (
  <motion.h2
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }}
    className='my-20 text-center text-4xl'
  >
    {children}
  </motion.h2>
);

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <SectionTitle>Projects</SectionTitle>
      <ProjectList projects={PROJECTS} />
      <SectionTitle>Minor Projects</SectionTitle>
      <ProjectList projects={MINOR_PROJECTS} />
    </div>
  )
}

export default Projects
