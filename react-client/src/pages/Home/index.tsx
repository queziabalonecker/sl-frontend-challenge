import React from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../../relay/RelayEnvironment';
import { USERS_RELAY_QUERY } from '../../queries/users_relay_query';
import UserCard from '../../components/UserCard';
import { User } from '../../types/User';

const { Suspense } = React;
const preloadedQuery = loadQuery(RelayEnvironment, USERS_RELAY_QUERY, {});

function App(props: any) {
  const data = usePreloadedQuery(USERS_RELAY_QUERY, props.preloadedQuery);

  return (
    <div className='App'>
      {data.users.map((user: User) => {
        return <UserCard user={user}></UserCard>;
      })}
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
export default AppRoot;
