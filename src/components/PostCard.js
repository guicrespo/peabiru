import React from 'react';
import PropTypes from 'prop-types';
import fomartDate from '../utils';

const PostCard = ({ post }) => (
  <article className="post-card">
    <a href={`/blog/${post.slug || ''}`} className="post-link">
      <h3 className="post-link-title">{post.title}</h3>
    </a>
    <h4 className="post-card-author">
      • por
      {` ${post.author}`}
    </h4>
    <p className="post-card-description">{post.description}</p>
    <p className="post-card-date">{fomartDate(post.createdAt)}</p>
  </article>
);

PostCard.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default PostCard;
