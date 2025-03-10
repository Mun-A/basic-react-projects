import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;

      if (nextPage > data.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => (
              <button
                key={index}
                className={`${
                  index === page ? 'page-btn active-btn' : 'page-btn'
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
