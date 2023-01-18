import { Card, Button, Modal } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskCreate from '../components/TaskCreate';
import TaskTable from '../components/TaskTable';
import { Task } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';
import NotFound from './NotFound';

function Project() {
  const { currentUser } = useContext(CurrentUserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const project = currentUser?.projects.nodes?.find((p) => p?.id == id);
  if (!project) return <NotFound />;

  const tasks = project?.tasks?.nodes || ([] as Array<Task>);

  const onClick = () => setShow(!show);
  const onClose = () => setShow(false);

  return (
    <>
      <React.Fragment>
        <Modal
          show={show}
          className="ml-4 pt-6"
          size="sm"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header className="ml-4 pt-6 text-gray-900 dark:text-white">
            <div className="">New Task</div>
          </Modal.Header>
          <Modal.Body>
            <TaskCreate onClose={onClose} projectId={project?.id as string} />
          </Modal.Body>
        </Modal>
      </React.Fragment>

      <div className="container mx-auto">
        <svg
          onClick={() => navigate('/')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mr-6 mb-4 cursor-pointer text-purple-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <div>
          <div className="text-2xl font-semibold flex">{project?.name}</div>
          <div className=" text-gray-500 dark:text-gray-400 mb-6">
            {project?.description}
          </div>
        </div>
        <div className="container mx-auto flex justify-between mb-4">
          <div className="text-2xl font-semibold">Tasks</div>
          <Button
            outline={true}
            gradientDuoTone="purpleToPink"
            onClick={onClick}
          >
            Create Task
          </Button>
        </div>
        {tasks.length > 0 ? (
          <TaskTable tasks={tasks as Array<Task>} />
        ) : (
          <div className="container mx-auto">
            <Card>
              <div className="flex flex-col">
                <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white truncate">
                  Project has no tasks
                </h5>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}

export default Project;
