import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      primeiroNum : 0,
      segundoNum : 0,
      resultado: 0
    };

    this.resultadoFinal = this.resultadoFinal.bind(this);
}

resultadoFinal(){
  this.setState({
    primeiroNum: document.getElementById('primeiroNum').value,
    segundoNum: document.getElementById('segundoNum').value,
    resultado: this.state.primeiroNum * this.state.segundoNum
  });
}

render(){
  return(
    <div class="container">
      <form class="box"> 
        <h1>Multiplicador de Números</h1>
        <input type="number" id="primeiroNum" name="primeiroNum" placeholder="Digite o primeiro n°"/>
        <input type="number" id="segundoNum"  name="segundoNum" placeholder="Digite o segundo n°"/>
        <button type="button" id="resultado" onClick={this.resultadoFinal}>Calcular</button>
        <h2>Resultado: {this.state.resultado}</h2>
        <p>Obs: clicar duas vezes para calcular .</p>
        </form>
    </div>
    
  );
 }
}

export default App;



        
      
 


