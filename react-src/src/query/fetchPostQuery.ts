import gql from "graphql-tag";

export const FETCH_POSTS = gql`
query GET_POSTS($first: Int, $after: String,$last: Int, $before: String) {
  posts(first: $first, after: $after, last:$last, before:$before) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        date
        excerpt
      }
    }
  }
}
`;
