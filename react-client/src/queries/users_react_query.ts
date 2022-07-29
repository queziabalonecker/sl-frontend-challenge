import { gql } from 'graphql-request';

export const GET_USERS_QUERY = gql`
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
