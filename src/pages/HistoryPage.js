import request from 'graphql-request';
import React, { useContext, useEffect, useState } from 'react';
import dompurify from 'dompurify';
import { AppContext } from '../context';

const sanitizer = dompurify.sanitize;

const HistoryPage = () => {
  const { setOpenWho, setUnderscore } = useContext(AppContext);
  const [historyText, setHistoryText] = useState('');

  useEffect(() => {
    setOpenWho(true);
    setUnderscore('history');
    const fetchHistory = async () => {
      const { histories } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            histories {
              text {
                html
              }
            }
          }
        `,
      );
      setHistoryText(histories[0].text.html);
    };
    fetchHistory();
  }, []);

  return (
    <article className="content-body">
      <h2>História</h2>
      <section dangerouslySetInnerHTML={{ __html: sanitizer(historyText) }} className="history-section" />
    </article>
  );
};

export default HistoryPage;
