// src/components/NewsTicker.js

import React, { useEffect, useState } from 'react';
import './index.css'

const Alerts = ({ newsItems }) => {
    const [tickerPosition, setTickerPosition] = useState(0);

    useEffect(() => {
      const tickerInterval = setInterval(() => {
        setTickerPosition((prevPosition) => {
          const newPosition = prevPosition + 1;
          return newPosition >= newsItems.length ? 0 : newPosition;
        });
      }, 3000); // Adjust the speed as needed (in milliseconds)
  
      return () => clearInterval(tickerInterval);
    }, [newsItems]);
  
    return (
      <div className="acme-ticker-wrap">
        <div className="acme-news-ticker-box">
          <ul>
            {newsItems.map((item, index) => (
              <li
                key={index}
                className={index === tickerPosition ? 'active' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  
};

export default Alerts;
