import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { request } from 'graphql-request';
// import dompurify from 'dompurify';
import { AppContext } from '../context';

// const sanitizer = dompurify.sanitize;

const BlogList = () => {
  const { setUnderscore } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

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

  return (
    <section className="content-body">
      <h2>Blog</h2>
      <section>
        {!posts ? <div>carregando</div>
          : posts.map((post) => (
            <article key={post.id}>
              <Link to={`/blog/${post.slug || ''}`}>
                <div className="card" key={post.id}>
                  <div className="card-content">
                    <h3>{post.title}</h3>
                    <h4>{post.author}</h4>
                    <p>{post.description}</p>
                    {/* eslint-disable-next-line react/no-danger */}
                    {/* <div dangerouslySetInnerHTML={{ __html: sanitizer(post.body.html) }} /> */}
                  </div>
                </div>
              </Link>
            </article>
          ))}
      </section>
    </section>
  );
};

export default BlogList;
