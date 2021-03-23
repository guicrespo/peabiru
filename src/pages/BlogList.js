import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import PostCard from '../components/PostCard';
import SearchPostInput from '../components/SearchPostInput';
import '../styles/BlogList.css';

const BlogList = () => {
  const { setUnderscore, posts } = useContext(AppContext);
  const [filteredPosts, setFilteredPosts] = useState(null);

  useEffect(() => {
    setUnderscore('blog');
  }, []);

  const postsToRender = filteredPosts || posts;

  return (
    <section className="content-body">
      <h2>Blog</h2>
      <SearchPostInput posts={posts} setFilteredPosts={setFilteredPosts} />
      <section>
        {!postsToRender ? <div>carregando</div>
          : postsToRender.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
      </section>
    </section>
  );
};

/* eslint-disable-next-line react/no-danger */
/* <div dangerouslySetInnerHTML={{ __html: sanitizer(post.body.html) }} /> */

export default BlogList;
