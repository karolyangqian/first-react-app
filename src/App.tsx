import React from 'react';
import logo from './logo.svg';
import './App.css';
import kumis from './img/kumis.jpg';


class App extends React.Component {
  render() {
    return (
      <div>
        <Info/>
        <Counter/>
      </div>
      );     
    }
  }
  
class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "Karol",
      kelas:"XI MIPA 1",
      waktu:"pagi"
  };
  }
  render() {
    return (

      <div className="App">
        <h1>Nama: {this.state.nama}</h1>
        <h2 style={{fontWeight: 'normal'}}>Kelas: {this.state.kelas}</h2>
        <h2 style={{fontWeight: 'normal'}}>Pagi: {this.state.waktu=="pagi" ? "true" : "false"}</h2>

      </div>


    );     
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  add(x) {
    this.setState(state => ({
      count: state.count + x
    }));
  }
  render(): React.ReactNode {
      return (
        <div className='App'>
          <h1>{this.state.count}</h1>
          <div className='button-wrapper'>
            <button onClick={()=>this.add(-1)}>-</button>
            <button onClick={()=>this.add(1)}>+</button>
          </div>
          <Image count={this.state.count}/>

        </div>
      );
  }
}

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): React.ReactNode {
    let image;
    if(this.props.count%3===0){
      image = <img src={kumis} width={200} alt="foto kumis" />;
    } else {
      image = null;
    }

    return (
      <div style={{margin:"10px"}}>
        {image}
      </div>
    );
  }
}
export default App;