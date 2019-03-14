import React, { Component } from 'react'
import { Header, Footer } from './Layouts'
import Profile from './Profiles'

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

  changeTitle = (val) => {
    this.setState({
      title: val,
      info: 'berubah'
    })
  }

  render() {
    let { title, peoples } = this.state
    return (
      // <div className="App">
      <React.Fragment>
        <Header/>
        
        <Profile peoples={peoples} />

        <Footer title={title} />
      </React.Fragment>  
      // </div>
    );
  }
}

export default App;
