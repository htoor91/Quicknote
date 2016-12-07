import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button onClick={this.props.logout}>Log out</button>
    );
  }
}



export default Home;
