import React,{ Component } from 'react';
import Monster from './components/Monster';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      monsterIndex: undefined
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({monsterIndex: event.target.value});
  }

  componentDidMount() {
    let apiCalls = {
      'monsters':'monsters',
      'spells':'spells'
    };
    // make each api call and populate state
    for (const apiCall in apiCalls) {
      console.log(`${apiCall} : ${apiCalls[apiCall]}`);
      fetch(`http://www.dnd5eapi.co/api/${apiCall}`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result-items: '+JSON.stringify(result));
            this.setState({[`${apiCall}List`]: result.results});
          },
          (error) => {
            console.log('result-items:'+error)
          }
        )
    }
  }
  render(){
    return (
      <div className="App">
        <label>Monster: </label>
        <select value={this.state.monsterIndex} onChange={this.handleChange} name="selectedMonster">
          <option value="">Choose a monster...</option>
        {this.state && this.state.monstersList && this.state.monstersList.map((monster, index)=>{
          return <option value={monster.url} key={index}>{monster.name}</option>
        })}
        </select>
        <Monster monsterIndex={this.state.monsterIndex} />
      </div>
    );
  }
}
// <Monster monsterIndex={this.state.monsterIndex} />


export default App;
