import {
  Card,
  Textarea,
  TextInput,
  Button,
  Label,
  Spinner,
} from 'flowbite-react';
import { useContext, useState } from 'react';
import { useProjectCreateMutation, User } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';

function ProjectCreate({ onClose }: { onClose: Function }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(false);

  const [projectCreate] = useProjectCreateMutation();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const { data } = await projectCreate({
        variables: { name, description },
      });

      const nodes = [data?.projectCreate].concat(currentUser?.projects?.nodes);
      const projects = { ...currentUser?.projects, nodes };
      const currentUserUpdated = { ...currentUser, projects };

      setCurrentUser(currentUserUpdated as User);
    } catch (error) {
      console.log(error);
      return;
    }

    setName('');
    setDescription('');
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
          'Create Project'
        )}
      </Button>
    </form>
  );
}

export default ProjectCreate;
