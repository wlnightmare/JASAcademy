//import logo from './images/shrek.jpg';
import './App.css';
import { CommentBlock } from './components/CommentBlock'
import React, { useState, useEffect } from 'react'

function App() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data)
        return data
      });
  }, [])

  return (
    <div className="App" >
      Comments Block
      {
        comments.map((comment, index) =>
          <CommentBlock key={index} comment={comment} />
        )
      }
    </div >
  );
}

export default App;
