import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      title: '',
    };
  }

  render(){
    const {title} = this.state;
    return (
      <div>
      <input type="text" />
      <button type="button">Adicionar Bloco de tarefas</button>
      </div>
      
    );
  }
}

export default App;