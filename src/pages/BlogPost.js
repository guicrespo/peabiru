import dompurify from 'dompurify';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { formatDateWithoutTime } from '../utils';

const sanitizer = dompurify.sanitize;

const BlogPost = () => {
  const { posts, setUnderscore } = useContext(AppContext);
  const [postData, setPostData] = useState({
    title: '',
    author: '',
    createdAt: '',
    body: { html: '' },
  });

  useEffect(() => {
    setUnderscore('blog');
    if (posts.length) {
      const post = posts.filter(({ slug }) => slug === window.location.pathname.replace('/blog/', ''))[0];
      setPostData({ ...post });
    }
  }, [posts]);

  const {
    title,
    author,
    createdAt,
    body: { html },
  } = postData;

  return (
    <section className="content-body">
      <h2>Blog</h2>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{createdAt && formatDateWithoutTime(createdAt)}</p>
      <section dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
    </section>
  );
};

export default BlogPost;
