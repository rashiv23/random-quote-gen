import React, { useState, useEffect } from 'react';
import './App.css';
<style>
</style>

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null); 
  const [category, setCategory] = useState(''); 
  const [author, setAuthor] = useState('');

  useEffect(() => {
  }, []);

  const fetchQuote = async () => {
      try {
          let url = 'https://api.quotable.io/random';
          if (category) {
            url += `?tags=${category}`;
          }
          if (author) {
            url += `${category ? '&' : '?'}author=${author}`;
          }
          const response = await fetch(url);
          const data = await response.json();
          if (data.content && data.author) {
            setQuote(`${data.content} - ${data.author}`);
          } else {
            setQuote('No Quote Available');
          }
        } catch (error) {
          console.error('Error fetching quote:', error);
        }
      };

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };

    const handleAuthorChange = (event) => {
      setAuthor(event.target.value);
    };

    const handleGenerateQuote = () => {
      fetchQuote();
    };

  return (
    <div>
        <div className='head'>
          QUOTE GENERATOR
        </div>
        <div className="quote-box">
          {quote !== null && <p className='quote'>{quote}</p>}
        </div>

        <div className='filters'>
        <select className= 'genre' value={category} onChange={handleCategoryChange}>
          <option value="">All Genres</option>
          <option value="inspirational">Inspirational</option>
          <option value="life">Life</option>
          <option value="motivational">Motivational</option>
          <option value="study">Study</option>
          <option value="happy">Happy</option>
          <option value="funny">Funny</option>
          <option value="love">Love</option>
          <option value="success">Success</option>
        </select>

        <select className = 'authors' value={author} onChange={handleAuthorChange}>
          <option value="">All Authors</option>
          <option value="Albert Einstein">Albert Einstein</option>
          <option value="Mahatma Gandhi">Mahatma Gandhi</option>
          <option value="William Shakespeare">William Shakespeare</option>
          <option value="Steve Jobs">Steve Jobs</option>
          <option value="Oprah Winfrey">Oprah Winfrey</option>
          <option value="Mark Twain">Mark Twain</option>
          <option value="Maya Angelou">Maya Angelou</option>
        </select>
        </div>
        <button className = 'button' onClick={handleGenerateQuote}>Generate New Quote</button>
      </div>
  );
};

export default QuoteGenerator;
