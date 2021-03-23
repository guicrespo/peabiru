import React from 'react';
import PropTypes from 'prop-types';
import { formatDateWithoutTime } from '../utils';

const PostCard = ({ post }) => (
  <article className="post-card">
    <a href={`/blog/${post.slug}`} className="post-link">
      <h3 className="post-link-title">{post.title}</h3>
    </a>
    <p className="post-card-author">
      <em>{`por ${post.author}`}</em>
    </p>
    <p className="post-card-description">{post.abstract}</p>
    <p className="post-card-date">{`Publicado em ${formatDateWithoutTime(post.createdAt)}`}</p>
  </article>
);

PostCard.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default PostCard;
