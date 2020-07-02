import React from "react";
import { Link } from "react-router-dom";

interface Props {
  node?: any;
}
const PostCard: React.FC<Props> = ({ node }) => {
  const title = node?.title;
  const excerpt = node?.excerpt;
  const featuredImage = node?.featuredImage?.node?.sourceUrl as string;
  const date = node?.date;

  return (
    <div className="card mb-3 bg-dark p-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={featuredImage}
            alt={title}
            className="w-100 h-100 img-thumbnail"
          />
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
                Updated At : {date}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
