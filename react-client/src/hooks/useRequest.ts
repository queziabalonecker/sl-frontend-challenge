import { useQuery } from 'react-query';
import { GraphQLClient } from 'graphql-request';
import { GET_USERS_QUERY } from '../queries/users_react_query';

const API_URL = `http://localhost:4000`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
});

//hook to fetch data using react-query
function useRequest() {
  function useGetUsers() {
    return useQuery('get-users', async () => {
      const { users } = await graphQLClient.request(GET_USERS_QUERY);
      return users;
    });
  }

  return {
    useGetUsers,
  };
}

export default useRequest;
