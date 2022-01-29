import React from "react";
import kumis from '../img/kumis.jpg';


class FotoKumis extends React.Component {
  render(): React.ReactNode {
    return (
      <div style={{margin:"10px"}}>
        <img src={kumis} width={200} alt="foto kumis" />
      </div>
    )
  }
}

export default FotoKumis