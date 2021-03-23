import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import request from 'graphql-request';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [underscore, setUnderscore] = useState('home');
  const [openWho, setOpenWho] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (/blog/.test(window.location.pathname)) {
      const fetchPosts = async () => {
        const { blogPosts } = await request(
          process.env.REACT_APP_GRAPHCMS_URI,
          `
            query {
              blogPosts {
                id
                title
                author
                abstract
                slug
                body {
                  html
                }
                createdAt
                updatedAt
              }
            }
          `,
        );
        setPosts(blogPosts);
      };
      fetchPosts();
    }
  }, []);

  const context = {
    underscore,
    setUnderscore,
    openWho,
    setOpenWho,
    openActivities,
    setOpenActivities,
    posts,
    setPosts,
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
