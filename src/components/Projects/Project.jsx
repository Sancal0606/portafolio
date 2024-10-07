import React from "react";
import projects from "../../data/projects.json";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} project={project}></ProjectCard>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
