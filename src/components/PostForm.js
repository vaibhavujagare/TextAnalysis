import React from 'react'



export default function PostForm() {
  const getAPI = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <>
    <div className="container">
    <button className="btn btn-success" onClick={getAPI}>
      Fetch API
    </button>

    </div>
    </>
  )
}

// text = request.POST["text"]