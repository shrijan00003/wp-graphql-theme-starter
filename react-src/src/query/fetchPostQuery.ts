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
        slug
        date
        title
        excerpt
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
  }
}
`;

export const FETCH_SINGLE_POST = gql`
query GET_POST($id: ID!) {
  post(id: $id) {
    id
    postId
    title
    date
    uri,
    content,
    featuredImage{
      node{
        uri
        slug
        sourceUrl
      }
    }
  }
}
`;
