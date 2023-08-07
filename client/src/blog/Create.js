import React, { useState } from 'react';
import axios from 'axios';
import '../css/Create.css';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user_id, setUser_id] = useState(4); // You can change this according to your needs
  const [publication_date, setPublication_date] = useState(
    new Date().toISOString()
  ); // Current date and time

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content,
      user_id,
      publication_date,
    };

    try {
      const response = await axios.post('http://127.0.0.1:3000/blogs', newBlog);
      console.log('Blog posted:', response.data);
      // Reset form fields after successful submission
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    formLabel: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    formInput: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '3px',
      border: '1px solid #ccc',
    },
    formTextarea: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '3px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    formButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',

      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      width: '100px',

      transition: 'background-color 0.3s ease-in-out',
    
    },
  };
  return (
     
      <div style={styles.formContainer}>
        <h2>Create a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.formLabel}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.formInput}
            required
          />
          <label style={styles.formLabel}>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.formTextarea}
            required
          />
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    );
  
}

export default Create;
