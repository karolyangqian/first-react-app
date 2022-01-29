import React from 'react';
import Counter from './components/Counter';
import Info from "./components/Info";
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor (props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <Info nama="Karol" kelas="XI MIPA 1" waktu="pagi"/>
        <Counter/>
      </div>
      )     
    }
  }

export default App