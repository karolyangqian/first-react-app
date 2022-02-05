import React from 'react'
import FotoKumis from './FotoKumis'

interface Istate {
    count: number
  }
  
class Counter extends React.Component<{}, Istate> {
  constructor(props: any){
    super(props)
    this.state = {
      count: 0
    }
  }
  add = (x: number) => {
    console.log("button clicked")
    this.setState({
      count: this.state.count + x
    })
  }

  render(): React.ReactNode {
    const {count} = this.state
    return (
      <div className='App'>
        <h1>{count}</h1>
        <div className='button-wrapper'>
          <button onClick={() => this.add(-1)}>-</button>
          <button onClick={() => this.add(1)}>+</button>
        </div>
        {count%3===0 && count!=0? <FotoKumis/> : null}
      </div>
    );
  }
}

export default Counter