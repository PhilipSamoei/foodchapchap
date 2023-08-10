import React, { useState, useEffect } from 'react';
import '../css/Bloglist.css';
import Create from './Create';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch('http://127.0.0.1:3000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleDelete = (blogId) => {
  
    fetch(`http://127.0.0.1:3000/blogs/${blogId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(updatedBlogs);
      })
      .catch((error) => {
        console.error('Error deleting blog:', error);
      });
  };

  return (
    <div>
      <div>
        <Create />
      </div>
      <div className="blog-container">
        {error ? (
          <p className="error-message">An error occurred: {error}</p>
        ) : (
          blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <h4>{blog.title}</h4>
              <div>
                <div>
                  <p className="content"> {blog.content}</p>
                </div>
                <div>
                  <img
                    className="image"
                    src={blog.user.image}
                    alt={blog.user.username}
                  />
                  <h6 className="username"> {blog.user.username}</h6>
                  <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogList;
