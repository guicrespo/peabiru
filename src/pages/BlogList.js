import React, { useContext, useEffect, useState } from 'react';
import { request } from 'graphql-request';
// import dompurify from 'dompurify';
import { AppContext } from '../context';
import PostCard from '../components/PostCard';
import SearchPostInput from '../components/SearchPostInput';
import '../styles/BlogList.css';

// const sanitizer = dompurify.sanitize;

const BlogList = () => {
  const { setUnderscore } = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(null);

  useEffect(() => {
    setUnderscore('blog');
    const fetchPosts = async () => {
      const { blogPost } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            blogPost {
              id
              slug
              title
              createdAt
              updatedAt
              author
              description
              body {
                html
              }
            }
          }
        `,
      );
      setPosts(blogPost);
    };

    fetchPosts();
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
