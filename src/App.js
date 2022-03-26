//import logo from './images/shrek.jpg';
import './App.css';
import { CommentBlock } from './components/CommentBlock'
import React, { useState, useEffect } from 'react'

// const comments = [
//   {
//     text: 'Hot Stuff!',
//     created: '11:00 26.03.2022',
//     authorName: 'Vasya Pupkin',
//     authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
//   },
//   {
//     text: 'Hot Stuff 2!',
//     created: '11:00 26.03.2022',
//     authorName: 'Almas',
//     authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
//   },
//   {
//     text: 'Hot Stuff 3!',
//     created: '11:00 26.03.2022',
//     authorName: 'Vasya Pupkin',
//     authorImage: 'https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4'
//   },
// ]

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
