import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = `http://localhost:4000`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
});

const GET_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      phone
      password
      avatar
    }
  }
`;

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
