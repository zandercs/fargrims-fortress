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
        {/*<h4>{monster && monster.name}</h4>
        <p>HP: {monster && monster.hit_points}</p>
        <p>AC: {monster && monster.armor_class}</p>
        <p>Speed:<br/>{monster && Object.keys(monster.speed).map(item => {
          return `${item}: ${monster.speed[item]} | `
        })}</p>*/}

        {monster && Object.keys(this.state.monster).map(item => {
          if(!['_id','index','url'].includes(item))
            switch (item) {
              case 'speed':
                return <p key={item}>{item}:<br/>{Object.keys(monster[item]).map(item => {
                  return `${item}: ${monster.speed[item]} || `
                })}</p>
                break;
              case "proficiencies":
                let profs = monster[item];
                return <div>{item}:<br/>{Object.keys(profs).map(x => {
                  return <p key={profs[x].name+profs[x].value}>{`${profs[x].name}: ${profs[x].value}`}</p>
                })}</div>
                break;
              case "actions" || "legendary_actions":
                let acts = monster[item];
                return <div>{item}:<br/>{Object.keys(acts).map(x => {
                  return <p key={acts[x].name}>{`${acts[x].name}: ${acts[x].desc}`}</p>
                })}</div>
                break;
              default:
                return <p key={item}>{`${item}: ${JSON.stringify(monster[item])}`}</p>
            }
          //return <p key={item}>{`${item}: ${JSON.stringify(monster[item])}`}</p>
        })}
      </div>
    );
  }
}

export default Monster;
