import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import types from './types';
import Dropdown from 'react-dropdown';

const whList = Object
  .keys(types)
  .map(function (key) {
    return [key, types[key]];
  });

const whTypes = whList.map(item => item[0])

class App extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this
      .onSelect
      .bind(this)

    this.setPopularHole = this.setPopularHole.bind(this)
    this.jumpThroughHole = this.jumpThroughHole.bind(this)
    this.state = {
      selected: 0,
      maxMass: 0,
      maxSingleMass: 0,
      destanation: '',
      maxHours: 0,
      currentMass: 0,
      stepNumber: 1,
      history: [],
    }
  }
  onSelect(option) {
    this.setState({
        selected: option,
        maxMass: types[option.value].maxMass,
        maxSingleMass: types[option.value].maxSingleMass,
        destanation: types[option.value].destination,
        maxHours: types[option.value].maxHours,
        currentMass: types[option.value].maxMass,
        history: [],
        stepNumber: 1,
      })
    }
    setPopularHole(e) {
      this.setState({
        selected: e.target.value,
        maxMass: types[e.target.value].maxMass,
        maxSingleMass: types[e.target.value].maxSingleMass,
        destanation: types[e.target.value].destination,
        maxHours: types[e.target.value].maxHours,
        currentMass: types[e.target.value].maxMass,
        history: [],
        stepNumber: 1,
      })
    }
    jumpThroughHole(e) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1)
      console.log()
      this.setState({
        currentMass: this.state.currentMass - parseInt(e.target.value),
        history: history.concat([`#${this.state.stepNumber} ${e.target.getAttribute('lable')} with ${(e.target.value/1000).toLocaleString()} mass`]),
        stepNumber: history.length + 2
      })
    }
  render() {
    const defaultOption = this.state.selected
    const history = this.state.history.map((e,k) => <li key={k}><span>{e}</span></li> )

    return (
      <div className="App">
        <div style={{width:'30%'}}>
          <Dropdown
            options={whTypes}
            onChange={this.onSelect}
            value={defaultOption}
            placeholder="Select an option"/>
        </div>
        <div>
          <Button value='H900' onClick={this.setPopularHole}> H900 </Button>
          <Button value='X877' onClick={this.setPopularHole}> X877 </Button>
        </div>
        <div>
          <div>Hole destination:{this.state.destanation}</div>
          <div>Lifetime:{this.state.maxHours}</div>
          <div>Maximum hole mass:{(this.state.maxMass/1000).toLocaleString()} tonn</div>
          <div>Maximum mass that pass throught hole:{(this.state.maxSingleMass/1000).toLocaleString()} tonn</div>
        </div>
        <div>
          <h2>Current hole</h2>
          <div>currentMass: {(this.state.currentMass/1000).toLocaleString()} tonn</div>
          <Button value='298800000' lable='prop jump' onClick={this.jumpThroughHole}>Prop Jump</Button>
          <Button value='198800000' lable='no-prop jump' onClick={this.jumpThroughHole}>No-prop Jump</Button>
          <ul>{history}</ul>
        </div>
      </div>
    );
  }
}

const Button = ({className='standart-button', value, lable='', onClick, children=lable}) => {
  return (
    <button value={value} lable={lable} onClick={onClick}>{children}</button>
  )
}

export default App;
