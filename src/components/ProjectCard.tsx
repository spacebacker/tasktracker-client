import { Card } from 'flowbite-react';
import { Project } from '../generated/graphql';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card href={`#/project/${project.id}`}>
      <div className="flex flex-col pb-10 truncate">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white truncate">
          {project.name}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {project.description}
        </p>
      </div>
    </Card>
  );
}

export default ProjectCard;
