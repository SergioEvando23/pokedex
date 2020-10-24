 import React, { Component } from 'react'
 import Api from './Api'


 class App extends Component{
  state = {
    pokemons: [],
  }
  async componentDidMount(){
    const response = await Api.get('');
    console.log(response.data);

    this.setState({ pokemons: response.data});
  }

   render(){
     return(
       <div>
         <h1>Esta é a minha pokedex</h1>
       </div>
     )
   }
 }
export default App;
