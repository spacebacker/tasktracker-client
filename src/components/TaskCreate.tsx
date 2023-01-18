import {
  Card,
  Textarea,
  TextInput,
  Button,
  Label,
  Select,
  Spinner,
} from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import {
  Assignee,
  useAssigneeListLazyQuery,
  useCurrentUserQuery,
  User,
  useTaskCreateMutation,
} from '../generated/graphql';
import Loading from '../pages/Loading';
import { CurrentUserContext } from '../providers/CurrentUserProvider';

type CreateTaskType = {
  onClose: Function;
  projectId: string;
};

function TaskCreate({ onClose, projectId }: CreateTaskType) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [assigneeList, setAssigneeList] = useState<Assignee[]>([]);
  const [disabled, setDisabled] = useState(false);

  const [assigneeListQuery] = useAssigneeListLazyQuery();
  const [taskCreate] = useTaskCreateMutation();
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { refetch } = useCurrentUserQuery();

  useEffect(() => {
    const getAssigneeList = async () => {
      const { data } = await assigneeListQuery();
      setAssigneeList(data?.assigneeList?.nodes as Assignee[]);
      setAssigneeId(data?.assigneeList?.nodes?.[0]?.id!);
    };

    getAssigneeList();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    try {
      await taskCreate({
        variables: { taskData: { name, description, projectId, assigneeId } },
      });
      const { data } = await refetch();
      setCurrentUser(data?.currentUser as User);
    } catch (error) {
      console.log(error);
      return;
    }

    setName('');
    setDescription('');
    setAssigneeId(assigneeList[0].id);
    setDisabled(false);
    onClose();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="mt-2 block">
        <Label htmlFor="name1" value="Name" />
      </div>
      <div>
        <TextInput
          id="name1"
          type="text"
          className="text-sm"
          required={true}
          value={name}
          disabled={disabled}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2 block">
        <Label htmlFor="description1" value="Description" />
      </div>
      <div>
        <Textarea
          id="description1"
          className="text-sm px-2 h-28"
          required={false}
          value={description}
          disabled={disabled}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mt-2 block">
        <Label htmlFor="assignee1" value="Assignee" />
      </div>
      <Select
        id="assignee1"
        disabled={disabled}
        onChange={(e) => setAssigneeId(e.target.value)}
      >
        {assigneeList.map((assignee) => (
          <option value={assignee?.id} key={assignee?.id}>
            {assignee?.name} ({assignee?.email})
          </option>
        ))}
      </Select>
      <Button
        type="submit"
        disabled={disabled}
        gradientDuoTone="purpleToBlue"
        className="mt-2"
      >
        {disabled ? (
          <>
            <div className="mr-3">
              <Spinner size="sm" light={true} />
            </div>
            Loading ...
          </>
        ) : (
          'Create Task'
        )}
      </Button>
    </form>
  );
}

export default TaskCreate;
