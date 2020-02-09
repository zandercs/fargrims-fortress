import React,{ Component } from 'react';

function AbilityMod(props){
  let mod = Math.floor((props.baseScore-10)/2);
  return mod >= 0 ? `+${mod}` : mod;
}

class Monster extends Component {
  constructor(props){
    super(props);

    this.state = {
      testMonster: {
        "_id": "5e1a94a70b1bb138c5c14104",
        "index": "adult-gold-dragon",
        "name": "Adult Gold Dragon",
        "size": "Huge",
        "type": "dragon",
        "subtype": null,
        "alignment": "lawful good",
        "armor_class": 19,
        "hit_points": 256,
        "hit_dice": "19d12",
        "speed": {
          "walk": "40 ft.",
          "fly": "80 ft.",
          "swim": "40 ft."
        },
        "strength": 27,
        "dexterity": 14,
        "constitution": 25,
        "intelligence": 16,
        "wisdom": 15,
        "charisma": 24,
        "proficiencies": [
          {
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex",
            "value": 8
          },
          {
            "name": "Saving Throw: CON",
            "url": "/api/proficiencies/saving-throw-con",
            "value": 13
          },
          {
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis",
            "value": 8
          },
          {
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha",
            "value": 13
          },
          {
            "name": "Skill: Insight",
            "url": "/api/proficiencies/skill-insight",
            "value": 8
          },
          {
            "name": "Skill: Perception",
            "url": "/api/proficiencies/skill-perception",
            "value": 14
          },
          {
            "name": "Skill: Persuasion",
            "url": "/api/proficiencies/skill-persuasion",
            "value": 13
          },
          {
            "name": "Skill: Stealth",
            "url": "/api/proficiencies/skill-stealth",
            "value": 8
          }
        ],
        "damage_vulnerabilities": [],
        "damage_resistances": [],
        "damage_immunities": [
          "fire"
        ],
        "condition_immunities": [],
        "senses": {
          "blindsight": "60 ft.",
          "darkvision": "120 ft.",
          "passive_perception": 24
        },
        "languages": "Common, Draconic",
        "challenge_rating": 17,
        "special_abilities": [
          {
            "name": "Amphibious",
            "desc": "The dragon can breathe air and water."
          },
          {
            "name": "Legendary Resistance",
            "desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
            "usage": {
              "type": "per day",
              "times": 3
            }
          }
        ],
        "actions": [
          {
            "name": "Multiattack",
            "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
          },
          {
            "name": "Bite",
            "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
            "attack_bonus": 14,
            "damage": [
              {
                "damage_type": {
                  "name": "Piercing",
                  "url": "/api/damage-types/piercing"
                },
                "damage_dice": "2d10",
                "damage_bonus": 8
              }
            ]
          },
          {
            "name": "Claw",
            "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
            "attack_bonus": 14,
            "damage": [
              {
                "damage_type": {
                  "name": "Slashing",
                  "url": "/api/damage-types/slashing"
                },
                "damage_dice": "2d6",
                "damage_bonus": 8
              }
            ]
          },
          {
            "name": "Tail",
            "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
            "attack_bonus": 14,
            "damage": [
              {
                "damage_type": {
                  "name": "Bludgeoning",
                  "url": "/api/damage-types/bludgeoning"
                },
                "damage_dice": "2d8",
                "damage_bonus": 8
              }
            ]
          },
          {
            "name": "Frightful Presence",
            "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
            "dc": {
              "dc_type": {
                "name": "WIS",
                "url": "/api/ability-scores/wis"
              },
              "dc_value": 21,
              "success_type": "none"
            }
          },
          {
            "name": "Breath Weapons",
            "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            "usage": {
              "type": "recharge on roll",
              "dice": "1d6",
              "min_value": 5
            },
            "attacks": [
              {
                "name": "Fire Breath",
                "dc": {
                  "dc_type": {
                    "name": "DEX",
                    "url": "/api/ability-scores/dex"
                  },
                  "dc_value": 21,
                  "success_type": "half"
                },
                "damage": [
                  {
                    "damage_type": {
                      "name": "Fire",
                      "url": "/api/damage-types/fire"
                    },
                    "damage_dice": "12d10",
                    "damage_bonus": 0
                  }
                ]
              },
              {
                "name": "Weakening Breath",
                "dc": {
                  "dc_type": {
                    "name": "STR",
                    "url": "/api/ability-scores/str"
                  },
                  "dc_value": 21,
                  "success_type": "none"
                }
              }
            ]
          }
        ],
        "legendary_actions": [
          {
            "name": "Detect",
            "desc": "The dragon makes a Wisdom (Perception) check."
          },
          {
            "name": "Tail Attack",
            "desc": "The dragon makes a tail attack."
          },
          {
            "name": "Wing Attack (Costs 2 Actions)",
            "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
            "dc": {
              "dc_type": {
                "name": "DEX",
                "url": "/api/ability-scores/dex"
              },
              "dc_value": 22,
              "success_type": "none"
            },
            "damage": [
              {
                "damage_type": {
                  "name": "Bludgeoning",
                  "url": "/api/damage-types/bludgeoning"
                },
                "damage_dice": "2d6",
                "damage_bonus": 8
              }
            ]
          }
        ],
        "url": "/api/monsters/adult-gold-dragon"
      }
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
    // let monster = this.state.testMonster ? this.state.testMonster : null;
    let baseStats = ["strength",
                    "dexterity",
                    "constitution",
                    "intelligence",
                    "wisdom",
                    "charisma"];
    // if(monster){
    //   console.log(Object.keys(monster));
    // }

    return (
      monster &&
      <div className="monsterDisplay">
        <div className="statSection">
          <h1>{monster.name}</h1>
          <div className="stats">
            <p><span className="italic">{monster.type}{monster.subtype ? ", " : null}{monster.subtype}</span></p>
            <p><span className="italic">{monster.alignment}</span></p>
            <p><span>CR: {monster.challenge_rating}</span></p>
          </div>
        </div>

        <div className="statSection">
          <div className="stats">
            <p>HP: {monster.hit_points}</p>
            <p>AC: {monster.armor_class}</p>
          </div>
        </div>

        <div className="statSection">
          <h4>Speed:</h4>
          <div className="stats">
          {monster.speed && Object.keys(monster.speed).map((item, i) => {
            // return `${item}: ${monster.speed[item]} | `
            return <p key={i}>{item}<br/>{monster.speed[item]}</p>
          })}
          </div>
        </div>

        <div className="statSection">
          <div className="stats">
          {baseStats.map((item, i) => {
            return <p key={i}>{item}<br/>{monster[item]} ( <AbilityMod baseScore={monster[item]} /> )</p>
          })}
          </div>
        </div>

        {monster.proficiencies && monster.proficiencies.length > 0 &&
        <div className="statSection">
          <h4>Proficiencies:</h4>
          <div className="stats">
          {monster.proficiencies.length > 0 && Object.keys(monster.proficiencies).map((item, i) => {
            // return `${item}: ${monster.speed[item]} | `
            return <p key={item}>{monster.proficiencies[i].name}<br/>
                    {monster.proficiencies[i].value}</p>
          })}
          </div>
        </div>
        }
        {monster.damage_vulnerabilities && monster.damage_vulnerabilities.length > 0 &&
        <div className="statSection">
          <h4>Damage Vulnerabilities:</h4>
          <div className="stats">
          {Object.keys(monster.damage_vulnerabilities).map((item, i) => {
            return <p key={i}>{monster.damage_vulnerabilities[i]}</p>
          })}
          </div>
        </div>
        }
        {monster.damage_resistances && monster.damage_resistances.length > 0 &&
        <div className="statSection">
          <h4>Damage Resistances:</h4>
          <div className="stats">
          {Object.keys(monster.damage_resistances).map((item, i) => {
            return <p key={i}>{monster.damage_resistances[i]}</p>
          })}
          </div>
        </div>
        }
        {monster.damage_immunities && monster.damage_immunities.length > 0 &&
        <div className="statSection">
          <h4>Damage Immunities:</h4>
          <div className="stats">
          {Object.keys(monster.damage_immunities).map((item, i) => {
            return <p key={i}>{monster.damage_immunities[i]}</p>
          })}
          </div>
        </div>
        }
        {monster.condition_immunities && monster.condition_immunities.length > 0 &&
        <div className="statSection">
          <h4>Condition Immunities:</h4>
          <div className="stats">
          {Object.keys(monster.condition_immunities).map((item, i) => {
            return <p key={i}>{monster.condition_immunities[i].name}</p>
          })}
          </div>
        </div>
        }
        {monster.senses &&
        <div className="statSection">
          <h4>Senses:</h4>
          <div className="stats">
          {Object.keys(monster.senses).map((i) => {
            return <p key={i}>{i}<br/>{monster.senses[i]}</p>
          })}
          </div>
        </div>
        }
        <div className="statSection">
          <h4>Languages:</h4>
          <div className="stats">
          <p>{monster.languages}</p>
          </div>
        </div>
        {monster.special_abilities && monster.special_abilities.length > 0 &&
        <div className="verboseStatSection">
          <h2>Special abilities:</h2>
          {Object.keys(monster.special_abilities).map((item, i) => {
            return <div key={i}><h3>{monster.special_abilities[i].name}</h3><p>{monster.special_abilities[i].desc}</p></div>
          })}
        </div>
        }
        {monster.actions && monster.actions.length > 0 &&
        <div className="verboseStatSection">
          <h2>Actions:</h2>
          {Object.keys(monster.actions).map((item, i) => {
            return <div key={i}><h3>{monster.actions[i].name}</h3><p>{monster.actions[i].desc}</p></div>
          })}
        </div>
        }
      {/*
        ["strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma"]
        monster && Object.keys(this.state.monster).map(item => {
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
        })*/}
      </div>
    );
  }
}

export default Monster;
