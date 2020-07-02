import gql from "graphql-tag";

export const QUERY_FETCH_POSTS = gql`
  query GET_POSTS {
    posts {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`;
