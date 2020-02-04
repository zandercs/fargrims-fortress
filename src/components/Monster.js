import React,{ Component } from 'react';

class Monster extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
     if (this.props.monsterIndex && prevProps.monsterIndex !== this.props.monsterIndex) {
       fetch(`http://www.dnd5eapi.co${this.props.monsterIndex}`)
         .then(res => res.json())
         .then(
           (result) => {
             console.log(result);
             this.setState({'monster': result});
             this.setState({data: result});
           },
           (error) => {
             console.log('ERRRORs:'+error)
           }
         )
     }
   }

  render(){
    let monster = this.state.monster ? this.state.monster : null;
    if(this.state.monster){
      console.log(Object.keys(this.state.monster));
    }
    return (
      <div className="monsterDisplay">
        <h4>{monster && monster.name}</h4>
        <p>HP: {monster && monster.hit_points}</p>
        <p>AC: {monster && monster.armor_class}</p>
        <p>Speed:<br/>{monster && Object.keys(monster.speed).map(item => {
          return `${item}: ${monster.speed[item]} | `
        })}</p>
      </div>
    );
  }
}

export default Monster;
