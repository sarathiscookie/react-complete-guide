import React from 'react';
import './App.css';

function App() {

  function Avatar(props) {
    return (<div className="Avatar">
      <p>Image Name: {props.image}</p>
      <p>Image Url: {props.url}</p>
    </div>);
  }

  function User(props) {
    return (<div className="UserInfo-name">
      <h2>{props.name}</h2>
    </div>);
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="UserInfo">
        <Avatar image="user.jpg" url="storage/image/user" />
        <User name="Peter Bradely" />
      </div>
      <Comment text="This is my first comment." date="22.07.2020" />
    </div>
  );
}

export default App;
