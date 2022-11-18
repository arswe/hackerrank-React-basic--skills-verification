import 'h8k-components';
import React, { useEffect, useState } from 'react';
import './App.css';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(articles);
  }, [...articles]);

  const sortVote = () => {
    let sort_articles = articles.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setData([...sort_articles]);
  };

  const sortDate = () => {
    let sort_articles = articles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setData([...sort_articles]);
  };
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>Sort By</label>
        <button
          onClick={sortVote}
          data-testid='most-upvoted-link'
          className='small'
        >
          Most Upvoted
        </button>
        <button
          onClick={sortDate}
          data-testid='most-recent-link'
          className='small'
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default App;
