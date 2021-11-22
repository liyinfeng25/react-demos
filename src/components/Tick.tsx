import React from 'react';

type stateType = {
  date: any,
  timer: any,
}

type propsType = {

}

// interface Clock {
//   state: stateType,
//   props: propsType
// }

class Clock extends React.Component<propsType, stateType> {
  timerID: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      timer: null,
      date: new Date(),
    }
    this.add = this.add.bind(this)
  }

  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  add (e: object) {
    console.log(this, e)
  }

  delete = (...args: any[]) => {
    console.log(args)
  }

  render () {
    const { date } = this.state;
    return (
      <div>
        当前时间是：<span>{date.toLocaleTimeString()}</span>
        按钮：<button onClick={this.add} >+</button>
        按钮：<button onClick={this.delete.bind(this,1,2,3)} >-</button>

      </div>
    )
  }
}

export default Clock;