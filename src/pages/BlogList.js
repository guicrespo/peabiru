import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dompurify from 'dompurify';
import { AppContext } from '../context';

const sanitizer = dompurify.sanitize;

const BlogList = () => {
  const { setUnderscore } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts').then((result) => setPosts(result.data));
    setUnderscore('blog');
  }, []);

  return (
    <section className="content-body">
      <h2>Blog</h2>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <div className="card" key={post.id}>
                <div className="card-content">
                  <h3>{post.title.rendered}</h3>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div dangerouslySetInnerHTML={{ __html: sanitizer(post.excerpt.rendered) }} />
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
