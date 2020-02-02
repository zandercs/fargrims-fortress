import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    let apiCalls = {
      'monsters':'monsters',
      'spells':'spells'
    };
    for (const apiCall in apiCalls) {
      console.log(`${apiCall} : ${apiCalls[apiCall]}`);
      fetch(`http://www.dnd5eapi.co/api/${apiCall}`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result-items: '+JSON.stringify(result));
            this.setState({[`${apiCall}List`]: result.results,[`${apiCall}Ready`]:true});
          },
          (error) => {
            console.log('result-items:'+error)
          }
        )
    }

    // let monsterList = 'http://www.dnd5eapi.co/api/monsters';
    // fetch(monsterList)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log('result-items: '+JSON.stringify(result));
    //       this.setState({monsterList: result.results});
    //     },
    //     (error) => {
    //       console.log('result-items:'+error)
    //     }
    //   )
    //
    //   let spellsList = 'http://www.dnd5eapi.co/api/spells';
    //   fetch(spellsList)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         console.log('result-items: '+JSON.stringify(result));
    //         this.setState({spellsList: result});
    //       },
    //       (error) => {
    //         console.log('result-items:'+error)
    //       }
    //     )
  }
  render(){
    return (
      <div className="App">
        <label>Monster: </label>
        <select name="selectedMonster">
          <option value="false">Choose a monster...</option>
        {this.state && this.state.monstersList && this.state.monstersList.map((monster, index)=>{
          return <option value={monster.url} key={index}>{monster.name}</option>
        })}
        </select>
      </div>
    );
  }
}

export default App;
