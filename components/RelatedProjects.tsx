'use client'

import React from 'react'
import { Card } from './Card'
import { Grid } from './Grid'
import styles from './RelatedProjects.module.css'

export interface Project {
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  link: string
}

export interface RelatedProjectsProps {
  projects: Project[]
  title?: string
}

export const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  projects,
  title = 'Related Projects',
}) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <Grid columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            link={project.link}
            variant="default"
          />
        ))}
      </Grid>
    </div>
  )
}
