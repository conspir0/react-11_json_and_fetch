import React, { Component } from 'react';
import './App.css';
import NewsContainer from './NewsContainer';


// Pseudo data base
const data = [
  { id: 1, title: 'Message 1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 2, title: 'Message 2', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message ${index}`,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  })
}, 4000);

class App extends Component {
  state = {
    news: []
  }

  getData = () => {
    const { news } = this.state;

    if (news.length !== data.length) {
      this.setState({ news: [...data] })
      console.log(`News List is updated ${news.length + 1}`)
    } else {
      console.log('News List is not updated')
    }
  }

  componentDidMount() {
    this.setState({ news: [...data] })

    this.idI = setInterval(this.getData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    return (
      <div className="container" >
        <NewsContainer news={this.state.news} />
      </div>
    )
  }
}

export default App;
