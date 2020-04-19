import React from 'react';
import WWCHeatTable from './components/WWCHeatTable';

export default class App extends React.Component {

  constructor () {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .then(a => console.log(this.state.data))
      .catch(error => console.log(error))
  }

  render () {
    return (
      <WWCHeatTable data={this.state.data} />
    )
  }
}