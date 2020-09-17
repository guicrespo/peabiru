import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [underscore, setUnderscore] = useState('home');
  const [openWho, setOpenWho] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  const context = {
    underscore,
    setUnderscore,
    openWho,
    setOpenWho,
    openActivities,
    setOpenActivities,
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
