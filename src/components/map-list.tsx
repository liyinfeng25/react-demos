import React from 'react'


class MapList  extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      list: ['23','第三个','是否']
    }
  }

  add = () => {
    this.setState({
      list: [...this.state.list, this.state.list.length]
    })
  }

  delete = () => {
    this.state.list.pop()
    this.setState({
      list: this.state.list
    })
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item: string, index: number) => (
              <li key={index} r-key={index}>{item}</li>
            ))
          }
        </ul>
        <button onClick={this.add}>+</button>
        <button onClick={this.delete}>-</button>
        {this.props.children}
      </div>
    )
  }
}



export default MapList;