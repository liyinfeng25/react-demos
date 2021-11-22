import React from 'react';

const scaleNames: any = {
  c: '摄氏度',
  f: '华氏度'
};
function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature: string, convert: Function) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    let output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
 }


class TemperatureInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  handleChange = (e:any) => {
    this.props.onChange(e.target.value)
  }

  render() {
    const convert = this.props.convert;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>输入： {scaleNames[scale]}:</legend>
        <input value={convert} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//状态提升
class Calculator extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      convert: '',
      scale: 'c'
    }
  }
  toFahrenheit (str: string)  {
    this.setState({
      scale: 'c',
      convert: str
    })
  }
  toCelsius (str: string)  {
    this.setState({
      scale: 'f',
      convert: str
    })
  }

  render() {
    const scale = this.state.scale;
    const convert = this.state.convert;
    const fahrenheit = scale == 'c' ? tryConvert(convert, toFahrenheit) :  convert;
    const celsius = scale == 'f' ? tryConvert(convert, toCelsius) :  convert;

    return (
      <div>
        <TemperatureInput scale="c" convert={celsius} onChange={(s:string) => this.toFahrenheit(s)}/>
        <TemperatureInput scale="f" convert={fahrenheit} onChange={(s:string) => this.toCelsius(s)} />
      </div>
    );
  }
}

export default Calculator;