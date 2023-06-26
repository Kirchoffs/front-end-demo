import React from 'react'

import face from '../assets/face.jpeg'

const containerStyle = {
  margin: '30px',
  textAlign: 'center'
}

const imageStyle = {
  width: '150px',
  height: '100px'
}

const jokeStyle = {
  margin: '20px'
}

const Joke = ({value}) => {
  return (
    <div style={containerStyle}>
      <div>
        <img style={imageStyle} src={face} alt='joke'></img>
      </div>
      <div style={jokeStyle}>
        {value || 'loading...'}
      </div>
    </div>
  )
}

export default class JokeDemo extends React.PureComponent {
  state = {
    joke: null
  }

  componentDidMount() {
    fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
      .then(res => res.json())
      .then(res => {
        this.setState({
          joke: res.joke
        })
      });
  }

  render() {
    return (
      <Joke value={this.state.joke}></Joke>
    )
  }
}