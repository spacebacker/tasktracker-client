import { Table, Badge } from 'flowbite-react';
import { Task } from '../generated/graphql';
import TaskAssigneeSelect from './TaskTableAssignee';
import TaskTableTaskDelete from './TaskTableTaskDelete';

type TaskTableType = { tasks: Array<Task>; hideActions?: boolean };

function TaskTable({ tasks, hideActions }: TaskTableType) {
  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell hidden={hideActions}>Assignee</Table.HeadCell>
        <Table.HeadCell hidden={hideActions}>Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {tasks.map((task) => (
          <Table.Row
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
            key={task.id}
          >
            <Table.Cell>{task.name}</Table.Cell>
            <Table.Cell className="text-ellipsis">
              <div className="max-w-prose">{task.description}</div>
            </Table.Cell>
            <Table.Cell>
              <Badge color="info" size="md" className="capitalize w-min">
                {task.status}
              </Badge>
            </Table.Cell>
            <Table.Cell hidden={hideActions}>
              <TaskAssigneeSelect task={task} />
            </Table.Cell>

            <Table.Cell align="center" hidden={hideActions}>
              <TaskTableTaskDelete id={task.id} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default TaskTable;
