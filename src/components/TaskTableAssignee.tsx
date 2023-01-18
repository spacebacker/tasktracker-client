import { Select, Spinner } from 'flowbite-react';
import { useContext, useState } from 'react';

import {
  Task,
  useAssigneeListQuery,
  useCurrentUserQuery,
  User,
  useTaskUpdateMutation,
} from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';

function TaskTableAssignee({ task }: { task: Task }) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(task.assignee?.id);
  const { data } = useAssigneeListQuery();

  const { refetch } = useCurrentUserQuery();
  const [taskUpdate] = useTaskUpdateMutation();
  const { setCurrentUser } = useContext(CurrentUserContext);

  const setAssigneeId = async (id: string, assigneeId: string) => {
    setLoading(true);
    setSelected(assigneeId);

    await taskUpdate({ variables: { id, taskData: { assigneeId } } });
    const { data } = await refetch();
    setCurrentUser(data?.currentUser as User);

    setLoading(false);
  };

  return (
    <div className="flex items-center">
      <Select
        disabled={loading}
        value={selected}
        onChange={(e) => setAssigneeId(task.id, e.target.value)}
      >
        {data?.assigneeList?.nodes?.map((assignee) => (
          <option value={assignee?.id} key={assignee?.id}>
            {assignee?.name} ({assignee?.email})
          </option>
        ))}
      </Select>
      {loading && <Spinner size="md" className="w-min ml-3" />}
    </div>
  );
}

export default TaskTableAssignee;
