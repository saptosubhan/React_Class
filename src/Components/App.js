import React, { Component } from 'react'
import { Header, Footer } from './Layouts'
import Containers from './Containers';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'this is title',
      info: 'blm berubah',
      peoples: [
        {
          id: 1,
          name: 'nama1',
          status: 'status1'
        },
        {
          id: 2,
          name: 'nama2',
          status: '2222'
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <Containers />

        <Footer />
      </React.Fragment>  
    );
  }
}

export default App;
