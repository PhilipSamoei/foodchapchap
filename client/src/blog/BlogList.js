import React, { useState, useEffect } from 'react';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch("http://127.0.0.1:3000/blogs")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        setError(err.message); 
      });
  };

  return (
    <div>
      <div className="blog-container">
        {error ? (  
          <p className="error-message">An error occurred: {error}</p>
        ) : (
          blogs.map(blog => (
            <div className='blog-card' key={blog.id}>
              <h2>{blog.title}</h2>
              <div className=''>
                <p className='content'> {blog.content}</p>
              </div>
              <h6> {blog.user_id.username}</h6>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogList;
