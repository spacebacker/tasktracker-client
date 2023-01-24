import { Navigate, useRoutes } from 'react-router-dom';

import Projects from '../pages/Projects';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';
import Loading from '../pages/Loading';
import Project from '../pages/Project';
import AssignedTasks from '../pages/AssignedTasks';

import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from './CurrentUserProvider';
import { useCurrentUserLazyQuery, User } from '../generated/graphql';

function RouterProvider() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(true);
  const [currentUserQuery] = useCurrentUserLazyQuery();

  useEffect(() => {
    if (!currentUser) {
      const getCurrentUser = async () => {
        const { data } = await currentUserQuery();

        setCurrentUser(data?.currentUser as User);
        setLoading(false);
      };
      getCurrentUser();
    }
  }, []);

  const routes = useRoutes([
    {
      path: '/',
      element: !!currentUser ? <Projects /> : <Navigate to="/logIn" />,
    },
    {
      path: '/tasks',
      element: !!currentUser ? <AssignedTasks /> : <Navigate to="/logIn" />,
    },
    {
      path: '/project/:id',
      element: !!currentUser ? <Project /> : <Navigate to="/logIn" />,
    },
    {
      path: '/logIn',
      element: !currentUser ? <LogIn /> : <Navigate to="/" />,
    },
    { path: '*', element: <NotFound /> },
  ]);

  return loading ? <Loading /> : routes;
}

export default RouterProvider;
