import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
//import Footer from "./components/Footer";
import fishData from "./fishList.json";

import './App.css';

class App extends Component {

  state = {
    fishData,
    clickedItems:[],
    score:0
  };

  //handle clicking on a card event
    cardClick = event => {
      const clickedFish= event.target.alt;
      //check if the clickedFish has an index in the clickedItems array
      const alreadyClicked = this.state.clickedItems.indexOf(clickedFish) > -1;

// already Clicked: randomize fishList, set score to 0 and alert the player

      if (alreadyClicked) {
        console.log('already clicked: '+alreadyClicked);
        this.setState({
          fishData:this.state.fishData.sort(function(a,b){
            return 0.5 - Math.random();
          }),
          clickedItems:[],
          score:0

        });
        alert("You lose. Play again?");
      }
// not already clicked
      else {
            this.setState({
              fishData:this.state.fishData.sort(function(a,b){
                return 0.5 - Math.random();
              }),
              clickedItems : this.state.clickedItems.concat(clickedFish),
              score:this.state.score + 1
            },
          ()=> {
                if (this.state.score === 12) {
                  alert ("You Win");
                  this.setState({
                    fishData:this.state.fishData.sort(function(a,b){
                      return 0.5 - Math.random();
                    }),
                    clickedItems:[],
                    score:0
                  });
                }
          })
      }

    }

  render() {
    console.dir(this.state.fishData);
    return (
      <div>
            <Navbar
              score={this.state.score}
            />
            <Jumbotron />
            <div className="wrapper">
              {this.state.fishData.map(fishData => (
                <Card 
                cardClick={this.cardClick} 
                id={fishData.id} 
                key={fishData.id} 
                image={fishData.image} 
                />
              ))}
            </div>
            {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
