import React from 'react'

interface Iprops {
    nama  : string,
    kelas : string,
    waktu : string,
    
  }
  
  class Info extends React.Component<Iprops> {
    render() {
      return (
  
        <div className="App">
          <h1>Nama: {this.props.nama}</h1>
          <h2 style={{fontWeight: 'normal'}}>Kelas: {this.props.kelas}</h2>
          <h2 style={{fontWeight: 'normal'}}>Pagi: {this.props.waktu==="pagi" ? "true" : "false"}</h2>
  
        </div>
  
  
      )     
    }
  }

  export default Info