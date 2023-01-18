import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthSignOutMutation } from '../generated/graphql';
import { CurrentUserContext } from '../providers/CurrentUserProvider';
import { apolloClient } from '../services/ApolloClient';

function Layout() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [signOutMutation] = useAuthSignOutMutation();

  const navigate = useNavigate();
  const toProjects = () => navigate('/');
  const toTasks = () => navigate('/tasks');

  const handleSignOut = async () => {
    await signOutMutation();
    setCurrentUser(null);
    apolloClient.resetStore();
    <Navigate to="/signin" />;
  };

  return (
    <Navbar fluid={true} rounded={true} className="mb-6">
      <Navbar.Brand href="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="TaskTracker"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TaskTracker
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!!currentUser && (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                img={`https://api.dicebear.com/5.x/initials/svg?seed=${currentUser.name}&backgroundColor=00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf&backgroundType=solid,gradientLinear&backgroundRotation[]`}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.name}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={toProjects}>Projects</Dropdown.Item>
            <Dropdown.Item onClick={toTasks}>Assigned Tasks</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
      </div>
    </Navbar>
  );
}

export default Layout;
