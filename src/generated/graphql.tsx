import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Assignee = {
  __typename?: 'Assignee';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** The connection type for Assignee. */
export type AssigneeConnection = {
  __typename?: 'AssigneeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AssigneeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Assignee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AssigneeEdge = {
  __typename?: 'AssigneeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Assignee>;
};

/** Autogenerated return type of AuthLogOut. */
export type AuthLogOutPayload = {
  __typename?: 'AuthLogOutPayload';
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new user */
  authLogIn: User;
  /** Sign out current user */
  authLogOut?: Maybe<AuthLogOutPayload>;
  /** Creates a new user */
  authSignUp: User;
  /** Creates a new project */
  projectCreate?: Maybe<Project>;
  /** Deletes a project */
  projectDelete?: Maybe<ProjectDeletePayload>;
  /** Creates a new task */
  taskCreate?: Maybe<Task>;
  /** Deletes a task */
  taskDelete?: Maybe<TaskDeletePayload>;
  /** Updates a task */
  taskUpdate?: Maybe<Task>;
};

export type MutationAuthLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationAuthSignUpArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type MutationProjectCreateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MutationProjectDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTaskCreateArgs = {
  taskData: TaskInput;
};

export type MutationTaskDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTaskUpdateArgs = {
  id: Scalars['ID'];
  taskData: TaskInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  tasks?: Maybe<TaskConnection>;
  user: User;
};

export type ProjectTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Project. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated return type of ProjectDelete. */
export type ProjectDeletePayload = {
  __typename?: 'ProjectDeletePayload';
  id: Scalars['ID'];
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Project>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of Assignees */
  assigneeList?: Maybe<AssigneeConnection>;
  /** Returns logged in user */
  currentUser?: Maybe<User>;
};

export type QueryAssigneeListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Task = {
  __typename?: 'Task';
  assignee: User;
  creator: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  status: Scalars['String'];
};

/** The connection type for Task. */
export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Task>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated return type of TaskDelete. */
export type TaskDeletePayload = {
  __typename?: 'TaskDeletePayload';
  id: Scalars['ID'];
};

/** An edge in a connection. */
export type TaskEdge = {
  __typename?: 'TaskEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Task>;
};

export type TaskInput = {
  assigneeId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  assignedTasks: TaskConnection;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projects: ProjectConnection;
};

export type UserAssignedTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AssigneeListQueryVariables = Exact<{ [key: string]: never }>;

export type AssigneeListQuery = {
  __typename?: 'Query';
  assigneeList?: {
    __typename?: 'AssigneeConnection';
    nodes?: Array<{
      __typename?: 'Assignee';
      id: string;
      name?: string | null;
      email: string;
    } | null> | null;
  } | null;
};

export type AuthLogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type AuthLogInMutation = {
  __typename?: 'Mutation';
  authLogIn: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    projects: {
      __typename?: 'ProjectConnection';
      nodes?: Array<{
        __typename?: 'Project';
        id: string;
        name?: string | null;
        description?: string | null;
        tasks?: {
          __typename?: 'TaskConnection';
          nodes?: Array<{
            __typename?: 'Task';
            id: string;
            name: string;
            status: string;
            description?: string | null;
            assignee: {
              __typename?: 'User';
              id: string;
              name: string;
              email: string;
            };
          } | null> | null;
          pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
        } | null;
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
    assignedTasks: {
      __typename?: 'TaskConnection';
      nodes?: Array<{
        __typename?: 'Task';
        id: string;
        name: string;
        status: string;
        description?: string | null;
        assignee: {
          __typename?: 'User';
          id: string;
          name: string;
          email: string;
        };
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
  };
};

export type AuthLogOutMutationVariables = Exact<{ [key: string]: never }>;

export type AuthLogOutMutation = {
  __typename?: 'Mutation';
  authLogOut?: { __typename?: 'AuthLogOutPayload'; status: string } | null;
};

export type AuthSignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type AuthSignUpMutation = {
  __typename?: 'Mutation';
  authSignUp: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    projects: {
      __typename?: 'ProjectConnection';
      nodes?: Array<{
        __typename?: 'Project';
        id: string;
        name?: string | null;
        description?: string | null;
        tasks?: {
          __typename?: 'TaskConnection';
          nodes?: Array<{
            __typename?: 'Task';
            id: string;
            name: string;
            status: string;
            description?: string | null;
            assignee: {
              __typename?: 'User';
              id: string;
              name: string;
              email: string;
            };
          } | null> | null;
          pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
        } | null;
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
    assignedTasks: {
      __typename?: 'TaskConnection';
      nodes?: Array<{
        __typename?: 'Task';
        id: string;
        name: string;
        status: string;
        description?: string | null;
        assignee: {
          __typename?: 'User';
          id: string;
          name: string;
          email: string;
        };
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
  };
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: 'Query';
  currentUser?: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    projects: {
      __typename?: 'ProjectConnection';
      nodes?: Array<{
        __typename?: 'Project';
        id: string;
        name?: string | null;
        description?: string | null;
        tasks?: {
          __typename?: 'TaskConnection';
          nodes?: Array<{
            __typename?: 'Task';
            id: string;
            name: string;
            status: string;
            description?: string | null;
            assignee: {
              __typename?: 'User';
              id: string;
              name: string;
              email: string;
            };
          } | null> | null;
          pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
        } | null;
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
    assignedTasks: {
      __typename?: 'TaskConnection';
      nodes?: Array<{
        __typename?: 'Task';
        id: string;
        name: string;
        status: string;
        description?: string | null;
        assignee: {
          __typename?: 'User';
          id: string;
          name: string;
          email: string;
        };
      } | null> | null;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
    };
  } | null;
};

export type CurrentUserFragmentFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
  projects: {
    __typename?: 'ProjectConnection';
    nodes?: Array<{
      __typename?: 'Project';
      id: string;
      name?: string | null;
      description?: string | null;
      tasks?: {
        __typename?: 'TaskConnection';
        nodes?: Array<{
          __typename?: 'Task';
          id: string;
          name: string;
          status: string;
          description?: string | null;
          assignee: {
            __typename?: 'User';
            id: string;
            name: string;
            email: string;
          };
        } | null> | null;
        pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
      } | null;
    } | null> | null;
    pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
  };
  assignedTasks: {
    __typename?: 'TaskConnection';
    nodes?: Array<{
      __typename?: 'Task';
      id: string;
      name: string;
      status: string;
      description?: string | null;
      assignee: {
        __typename?: 'User';
        id: string;
        name: string;
        email: string;
      };
    } | null> | null;
    pageInfo: { __typename?: 'PageInfo'; endCursor?: string | null };
  };
};

export type ProjectCreateMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type ProjectCreateMutation = {
  __typename?: 'Mutation';
  projectCreate?: {
    __typename?: 'Project';
    id: string;
    name?: string | null;
    description?: string | null;
    tasks?: {
      __typename?: 'TaskConnection';
      nodes?: Array<{
        __typename?: 'Task';
        id: string;
        name: string;
        status: string;
        description?: string | null;
        assignee: {
          __typename?: 'User';
          id: string;
          name: string;
          email: string;
        };
      } | null> | null;
    } | null;
  } | null;
};

export type ProjectDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ProjectDeleteMutation = {
  __typename?: 'Mutation';
  projectDelete?: { __typename?: 'ProjectDeletePayload'; id: string } | null;
};

export type TaskCreateMutationVariables = Exact<{
  taskData: TaskInput;
}>;

export type TaskCreateMutation = {
  __typename?: 'Mutation';
  taskCreate?: {
    __typename?: 'Task';
    id: string;
    name: string;
    status: string;
    description?: string | null;
    assignee: { __typename?: 'User'; id: string; name: string; email: string };
  } | null;
};

export type TaskDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type TaskDeleteMutation = {
  __typename?: 'Mutation';
  taskDelete?: { __typename?: 'TaskDeletePayload'; id: string } | null;
};

export type TaskFragmentFragment = {
  __typename?: 'Task';
  id: string;
  name: string;
  status: string;
  description?: string | null;
  assignee: { __typename?: 'User'; id: string; name: string; email: string };
};

export type TaskUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  taskData: TaskInput;
}>;

export type TaskUpdateMutation = {
  __typename?: 'Mutation';
  taskUpdate?: {
    __typename?: 'Task';
    id: string;
    name: string;
    status: string;
    description?: string | null;
    assignee: { __typename?: 'User'; id: string; name: string; email: string };
  } | null;
};

export const TaskFragmentFragmentDoc = gql`
  fragment TaskFragment on Task {
    id
    name
    status
    description
    assignee {
      id
      name
      email
    }
  }
`;
export const CurrentUserFragmentFragmentDoc = gql`
  fragment CurrentUserFragment on User {
    id
    name
    email
    projects {
      nodes {
        id
        name
        description
        tasks {
          nodes {
            ...TaskFragment
          }
          pageInfo {
            endCursor
          }
        }
      }
      pageInfo {
        endCursor
      }
    }
    assignedTasks {
      nodes {
        ...TaskFragment
      }
      pageInfo {
        endCursor
      }
    }
  }
  ${TaskFragmentFragmentDoc}
`;
export const AssigneeListDocument = gql`
  query AssigneeList {
    assigneeList {
      nodes {
        id
        name
        email
      }
    }
  }
`;

/**
 * __useAssigneeListQuery__
 *
 * To run a query within a React component, call `useAssigneeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssigneeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssigneeListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAssigneeListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AssigneeListQuery,
    AssigneeListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AssigneeListQuery, AssigneeListQueryVariables>(
    AssigneeListDocument,
    options
  );
}
export function useAssigneeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AssigneeListQuery,
    AssigneeListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AssigneeListQuery, AssigneeListQueryVariables>(
    AssigneeListDocument,
    options
  );
}
export type AssigneeListQueryHookResult = ReturnType<
  typeof useAssigneeListQuery
>;
export type AssigneeListLazyQueryHookResult = ReturnType<
  typeof useAssigneeListLazyQuery
>;
export type AssigneeListQueryResult = Apollo.QueryResult<
  AssigneeListQuery,
  AssigneeListQueryVariables
>;
export function refetchAssigneeListQuery(
  variables?: AssigneeListQueryVariables
) {
  return { query: AssigneeListDocument, variables: variables };
}
export const AuthLogInDocument = gql`
  mutation AuthLogIn($email: String!, $password: String!) {
    authLogIn(email: $email, password: $password) {
      ...CurrentUserFragment
    }
  }
  ${CurrentUserFragmentFragmentDoc}
`;
export type AuthLogInMutationFn = Apollo.MutationFunction<
  AuthLogInMutation,
  AuthLogInMutationVariables
>;

/**
 * __useAuthLogInMutation__
 *
 * To run a mutation, you first call `useAuthLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLogInMutation, { data, loading, error }] = useAuthLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthLogInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthLogInMutation,
    AuthLogInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthLogInMutation, AuthLogInMutationVariables>(
    AuthLogInDocument,
    options
  );
}
export type AuthLogInMutationHookResult = ReturnType<
  typeof useAuthLogInMutation
>;
export type AuthLogInMutationResult = Apollo.MutationResult<AuthLogInMutation>;
export type AuthLogInMutationOptions = Apollo.BaseMutationOptions<
  AuthLogInMutation,
  AuthLogInMutationVariables
>;
export const AuthLogOutDocument = gql`
  mutation AuthLogOut {
    authLogOut {
      status
    }
  }
`;
export type AuthLogOutMutationFn = Apollo.MutationFunction<
  AuthLogOutMutation,
  AuthLogOutMutationVariables
>;

/**
 * __useAuthLogOutMutation__
 *
 * To run a mutation, you first call `useAuthLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLogOutMutation, { data, loading, error }] = useAuthLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useAuthLogOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthLogOutMutation,
    AuthLogOutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthLogOutMutation, AuthLogOutMutationVariables>(
    AuthLogOutDocument,
    options
  );
}
export type AuthLogOutMutationHookResult = ReturnType<
  typeof useAuthLogOutMutation
>;
export type AuthLogOutMutationResult =
  Apollo.MutationResult<AuthLogOutMutation>;
export type AuthLogOutMutationOptions = Apollo.BaseMutationOptions<
  AuthLogOutMutation,
  AuthLogOutMutationVariables
>;
export const AuthSignUpDocument = gql`
  mutation AuthSignUp($email: String!, $password: String!) {
    authSignUp(email: $email, password: $password) {
      ...CurrentUserFragment
    }
  }
  ${CurrentUserFragmentFragmentDoc}
`;
export type AuthSignUpMutationFn = Apollo.MutationFunction<
  AuthSignUpMutation,
  AuthSignUpMutationVariables
>;

/**
 * __useAuthSignUpMutation__
 *
 * To run a mutation, you first call `useAuthSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSignUpMutation, { data, loading, error }] = useAuthSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthSignUpMutation,
    AuthSignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthSignUpMutation, AuthSignUpMutationVariables>(
    AuthSignUpDocument,
    options
  );
}
export type AuthSignUpMutationHookResult = ReturnType<
  typeof useAuthSignUpMutation
>;
export type AuthSignUpMutationResult =
  Apollo.MutationResult<AuthSignUpMutation>;
export type AuthSignUpMutationOptions = Apollo.BaseMutationOptions<
  AuthSignUpMutation,
  AuthSignUpMutationVariables
>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      ...CurrentUserFragment
    }
  }
  ${CurrentUserFragmentFragmentDoc}
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
  return { query: CurrentUserDocument, variables: variables };
}
export const ProjectCreateDocument = gql`
  mutation ProjectCreate($name: String!, $description: String) {
    projectCreate(name: $name, description: $description) {
      id
      name
      description
      tasks {
        nodes {
          ...TaskFragment
        }
      }
    }
  }
  ${TaskFragmentFragmentDoc}
`;
export type ProjectCreateMutationFn = Apollo.MutationFunction<
  ProjectCreateMutation,
  ProjectCreateMutationVariables
>;

/**
 * __useProjectCreateMutation__
 *
 * To run a mutation, you first call `useProjectCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProjectCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [projectCreateMutation, { data, loading, error }] = useProjectCreateMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useProjectCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProjectCreateMutation,
    ProjectCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProjectCreateMutation,
    ProjectCreateMutationVariables
  >(ProjectCreateDocument, options);
}
export type ProjectCreateMutationHookResult = ReturnType<
  typeof useProjectCreateMutation
>;
export type ProjectCreateMutationResult =
  Apollo.MutationResult<ProjectCreateMutation>;
export type ProjectCreateMutationOptions = Apollo.BaseMutationOptions<
  ProjectCreateMutation,
  ProjectCreateMutationVariables
>;
export const ProjectDeleteDocument = gql`
  mutation ProjectDelete($id: ID!) {
    projectDelete(id: $id) {
      id
    }
  }
`;
export type ProjectDeleteMutationFn = Apollo.MutationFunction<
  ProjectDeleteMutation,
  ProjectDeleteMutationVariables
>;

/**
 * __useProjectDeleteMutation__
 *
 * To run a mutation, you first call `useProjectDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProjectDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [projectDeleteMutation, { data, loading, error }] = useProjectDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProjectDeleteMutation,
    ProjectDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProjectDeleteMutation,
    ProjectDeleteMutationVariables
  >(ProjectDeleteDocument, options);
}
export type ProjectDeleteMutationHookResult = ReturnType<
  typeof useProjectDeleteMutation
>;
export type ProjectDeleteMutationResult =
  Apollo.MutationResult<ProjectDeleteMutation>;
export type ProjectDeleteMutationOptions = Apollo.BaseMutationOptions<
  ProjectDeleteMutation,
  ProjectDeleteMutationVariables
>;
export const TaskCreateDocument = gql`
  mutation TaskCreate($taskData: TaskInput!) {
    taskCreate(taskData: $taskData) {
      ...TaskFragment
    }
  }
  ${TaskFragmentFragmentDoc}
`;
export type TaskCreateMutationFn = Apollo.MutationFunction<
  TaskCreateMutation,
  TaskCreateMutationVariables
>;

/**
 * __useTaskCreateMutation__
 *
 * To run a mutation, you first call `useTaskCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskCreateMutation, { data, loading, error }] = useTaskCreateMutation({
 *   variables: {
 *      taskData: // value for 'taskData'
 *   },
 * });
 */
export function useTaskCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TaskCreateMutation,
    TaskCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TaskCreateMutation, TaskCreateMutationVariables>(
    TaskCreateDocument,
    options
  );
}
export type TaskCreateMutationHookResult = ReturnType<
  typeof useTaskCreateMutation
>;
export type TaskCreateMutationResult =
  Apollo.MutationResult<TaskCreateMutation>;
export type TaskCreateMutationOptions = Apollo.BaseMutationOptions<
  TaskCreateMutation,
  TaskCreateMutationVariables
>;
export const TaskDeleteDocument = gql`
  mutation TaskDelete($id: ID!) {
    taskDelete(id: $id) {
      id
    }
  }
`;
export type TaskDeleteMutationFn = Apollo.MutationFunction<
  TaskDeleteMutation,
  TaskDeleteMutationVariables
>;

/**
 * __useTaskDeleteMutation__
 *
 * To run a mutation, you first call `useTaskDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskDeleteMutation, { data, loading, error }] = useTaskDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TaskDeleteMutation,
    TaskDeleteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TaskDeleteMutation, TaskDeleteMutationVariables>(
    TaskDeleteDocument,
    options
  );
}
export type TaskDeleteMutationHookResult = ReturnType<
  typeof useTaskDeleteMutation
>;
export type TaskDeleteMutationResult =
  Apollo.MutationResult<TaskDeleteMutation>;
export type TaskDeleteMutationOptions = Apollo.BaseMutationOptions<
  TaskDeleteMutation,
  TaskDeleteMutationVariables
>;
export const TaskUpdateDocument = gql`
  mutation TaskUpdate($id: ID!, $taskData: TaskInput!) {
    taskUpdate(id: $id, taskData: $taskData) {
      ...TaskFragment
    }
  }
  ${TaskFragmentFragmentDoc}
`;
export type TaskUpdateMutationFn = Apollo.MutationFunction<
  TaskUpdateMutation,
  TaskUpdateMutationVariables
>;

/**
 * __useTaskUpdateMutation__
 *
 * To run a mutation, you first call `useTaskUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskUpdateMutation, { data, loading, error }] = useTaskUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      taskData: // value for 'taskData'
 *   },
 * });
 */
export function useTaskUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TaskUpdateMutation,
    TaskUpdateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TaskUpdateMutation, TaskUpdateMutationVariables>(
    TaskUpdateDocument,
    options
  );
}
export type TaskUpdateMutationHookResult = ReturnType<
  typeof useTaskUpdateMutation
>;
export type TaskUpdateMutationResult =
  Apollo.MutationResult<TaskUpdateMutation>;
export type TaskUpdateMutationOptions = Apollo.BaseMutationOptions<
  TaskUpdateMutation,
  TaskUpdateMutationVariables
>;
