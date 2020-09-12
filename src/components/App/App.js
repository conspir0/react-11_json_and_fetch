import React, { Component } from 'react';
import './App.css';
import TagList from '../TagList/TagList';


class App extends Component {
  state = {
    tags: []
  }

  componentDidMount() {
    fetch('data/data.json')
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then(data => {
        this.setState({
          tags: data.tags
        })
      })
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="container" >
        <TagList tagList={tags} />
      </div>
    )
  }
}

export default App;
