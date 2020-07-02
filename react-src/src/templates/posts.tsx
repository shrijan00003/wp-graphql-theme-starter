import React, { useState } from "react";
import MainLayout from "../layout/main.layout";

import {
  useGet_PostsQuery as useGetPostQuery,
} from "../generated/graphql";

import { PostVariable } from "../app/app.types";
import PostCard from "../post/post.card";
import Spinner from "../common/spinner";

/**
 * This page is designed for the posts collection
 * We will be implementing pagination then after
 * TODO:
 * 1. Display posts on card
 * 2. Implement pagination
 * - there have to be two queries one for getting post with first and after
 *  - at front page first = 10 , last will be null
 *  - when next will be clicked then first will be same but the last will have curser
 * 
 * - another query for getting posts with last and before 
 * 
 */
const initialPostVariable: PostVariable = {
  first: 5,
  after: null,
  last: undefined,
  before: undefined,
};

const Posts = () => {
  const [postVariable, setPostVariable] = useState<PostVariable>(
    initialPostVariable,
  );

  const { data, error, loading } = useGetPostQuery({
    variables: {
      last: postVariable?.last,
      first: postVariable?.first,
      after: postVariable?.after,
      before: postVariable?.before,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const { posts } = data;
  const edges = posts?.edges;

  const postCards = () => {
    if (!edges || edges.length === 0) {
      return <div>NO DATA</div>;
    } else {
      return edges.map((edge, index: number) => {
        return <PostCard node={edge?.node} key={index} />;
      });
    }
  };

  const handlePrevious = () => {
    const startCursor = data.posts?.pageInfo?.startCursor;
    setPostVariable({
      ...postVariable,
      last: 5,
      first: undefined,
      after: undefined,
      before: startCursor,
    });
  };

  const handleNext = () => {
    const endCursor = data.posts?.pageInfo?.endCursor;
    setPostVariable({
      ...postVariable,
      first: 5,
      after: endCursor,
      last: undefined,
      before: undefined,
    });
  };

  const hasNext = data.posts?.pageInfo?.hasNextPage;
  const hasPrevious = data.posts?.pageInfo?.hasPreviousPage;

  const pagination = () => {
    return (
      <nav aria-label="Page navigation bg-dark">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handlePrevious}
              disabled={!hasPrevious}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNext}
              disabled={!hasNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <MainLayout>
      {postCards()}
      {pagination()}
    </MainLayout>
  );
};

export default Posts;
