import React from "react";
import { Link } from "react-router-dom";

interface Props {
  node?: any;
}
const PostCard: React.FC<Props> = ({ node }) => {
  const title = node?.title;
  const excerpt = node?.excerpt;

  return (
    <div className="card mb-3 bg-dark">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/posts/${node?.id}/${node?.slug}`}>
              <h5 className="card-title">{title}</h5>
            </Link>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <p className="card-text">
              <small className="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
