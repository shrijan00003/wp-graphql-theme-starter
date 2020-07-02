import React from "react";
import MainLayout from "../layout/main.layout";
import { useParams, Link } from "react-router-dom";

import Spinner from "../common/spinner";
import { useGet_PostQuery as useGetPostQuery } from "../generated/graphql";

const SinglePost = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetPostQuery({
    variables: {
      id,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  const featuredImage = data?.post?.featuredImage?.node?.sourceUrl as string;
  const postTitle = data?.post?.title;
  const content = data?.post?.content as string;
  return (
    <MainLayout>
      <div className="card bg-dark">
        <img src={featuredImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title py-2">{postTitle}</h1>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="card-body">
          <Link to="/posts" className="card-link">All Posts</Link>
          <Link to="/" className="card-link">Home Page</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default SinglePost;
