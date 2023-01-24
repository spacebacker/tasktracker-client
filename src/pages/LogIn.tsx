import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthLogInMutation, User } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';
import { Card, Button, TextInput, Label } from 'flowbite-react';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [authLogIn, { error }] = useAuthLogInMutation();
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await authLogIn({ variables: { email, password } });
      setCurrentUser(data?.authLogIn as User);

      <Navigate to="/" />;
    } catch (error) {
      return;
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="grid h-screen place-items-center -mt-16">
      <Card>
        <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
          <h5 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Log in to TaskTracker
          </h5>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="test@test.com"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!!error && (
            <p className="text-red-500 text-xs italic">{error.message}</p>
          )}
          <Button type="submit">Log in</Button>
        </form>
      </Card>
    </div>
  );
}

export default LogIn;
