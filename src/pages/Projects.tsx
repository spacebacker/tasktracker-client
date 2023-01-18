import React, { useContext, useState } from 'react';
import { Project } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';
import CreateProject from '../components/ProjectCreate';
import ProjectCard from '../components/ProjectCard';
import { Button, Modal, Card } from 'flowbite-react';

function Projects() {
  const { currentUser } = useContext(CurrentUserContext);
  const [show, setShow] = useState(false);

  const onClick = () => setShow(!show);
  const onClose = () => setShow(false);

  const projects = currentUser?.projects.nodes || [];

  return (
    <div>
      <React.Fragment>
        <Modal
          show={show}
          className="ml-4 pt-6"
          size="sm"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header className="ml-4 pt-6 text-gray-900 dark:text-white">
            <div>New Project</div>
          </Modal.Header>
          <Modal.Body>
            <CreateProject onClose={onClose} />
          </Modal.Body>
        </Modal>
      </React.Fragment>

      <div className="container mx-auto flex justify-between mb-4">
        <div className="text-2xl font-semibold">Projects</div>
        <Button outline={true} gradientDuoTone="purpleToBlue" onClick={onClick}>
          Create Project
        </Button>
      </div>

      {projects.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard project={project as Project} key={project?.id} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto">
          <Card>
            <div className="flex flex-col">
              <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white truncate">
                Hello {currentUser?.name}, lets create your first project!
              </h5>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400 truncate">
                Please click "Create Project" button on the right.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Projects;
