import graphql from 'babel-plugin-relay/macro';

export const USERS_RELAY_QUERY = graphql`
  query usersRelayQuery {
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
