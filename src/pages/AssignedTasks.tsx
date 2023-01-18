import { Card } from 'flowbite-react';
import { useContext } from 'react';
import TaskTable from '../components/TaskTable';
import { Task } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';

function AssignedTasks() {
  const { currentUser } = useContext(CurrentUserContext);
  const tasks = currentUser?.assignedTasks.nodes || [];

  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto flex justify-between mb-4">
          <div className="text-2xl font-semibold">Assigned Tasks</div>
        </div>
        {tasks.length > 0 ? (
          <TaskTable tasks={tasks as Array<Task>} hideActions={true} />
        ) : (
          <div className="container mx-auto">
            <Card>
              <div className="flex flex-col">
                <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white truncate">
                  You have no tasks assigned to you
                </h5>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}

export default AssignedTasks;
