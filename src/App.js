import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  // function getSrd(url){
  //     return new Promise((resolve, reject) => {
  //         $.ajax({
  //             url: 'http://www.dnd5eapi.co'+url,
  //             dataType: 'json',
  //             context: document.body,
  //             success: function(data) {
  //                 //called when successful
  //                 console.log(data);
  //                 // return data;
  //                 return resolve(data);
  //             },
  //             error: function(e) {
  //                 //called when there is an error
  //                 console.log(e.message);
  //                 // return e;
  //                 return reject(e.message);
  //             }
  //         });
  //     })
  //
  // }
  constructor(props){
    super(props);

    this.state = {
      monsterList: [],
      spellsList: [],
      poop: [
        {index:"words 0"},
        {index:"words 1"},
        {index:"words 2"},
        {index:"words 3"}
      ]
    };
  }

  componentDidMount() {
    let monsterList = 'http://www.dnd5eapi.co/api/monsters';
    fetch(monsterList)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result-items: '+JSON.stringify(result));
          this.setState({monsterList: result.results});
        },
        (error) => {
          console.log('result-items:'+error)
        }
      )

      let spellsList = 'http://www.dnd5eapi.co/api/spells';
      fetch(spellsList)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result-items: '+JSON.stringify(result));
            this.setState({spellsList: result});
          },
          (error) => {
            console.log('result-items:'+error)
          }
        )
  }
  render(){
    return (
      <div className="App">
        <select>
        {this.state.monsterList.map((monster, index)=>{
          return <option value={monster.index} key={index}>{monster.index}</option>
        })}
        </select>
      </div>
    );
  }
}

export default App;
