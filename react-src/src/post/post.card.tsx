import React from "react";

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
            <h5 className="card-title">{title}</h5>
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
