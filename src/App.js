import React, { Component } from 'react';
import data from './data.json';
import ImgComp from './components/ImgComp';
import './App.css';

var imgStyles = {
  width: "250px",
  height: "250px"
}

// Array.prototype.ryansMap = function (cb) {
//   var array = []
//   for (let i = 0; i < this.length; i++) {
//     array.push(cb(this[i]))
//   }
//   return array
// }

class App extends Component {
  state = {
    imgs: data,
    currentScore: 0,
    highScore: 0
  }

  handleClick = (event) => {
    console.log("this has been clicked");
    console.log(event.target)
    var id = parseInt(event.target.id)
    console.log(id);
    //suffle this array
    var suffledArray = this.shuffleArray(this.state.imgs)
    //update the object that was clicked on
    this.findAndUpdate(suffledArray, id)
      //set its clicked to true
  }
  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
  findAndUpdate = (array, id) => {
    var newArray = []
    var doubbleClicked = false;

    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i].id) === parseInt(id)) {
        if (array[i].clicked === false) {
          doubbleClicked = false
          array[i].clicked = true
          newArray.push(array[i])
        } else {
          console.log("ouch you lost succa");
          doubbleClicked = true
        }
      }else {
        newArray.push(array[i])
      }
    }
    if (doubbleClicked === false) {
      this.setState({
        imgs: newArray
      });
    }else{
      this.setState({
        imgs: [{
            "id": 1,
            "image": "/assets/images/beth.png",
            "clicked": false
          },
          {
            "id": 2,
            "image": "/assets/images/birdperson.png",
            "clicked": false
          },
          {
            "id": 3,
            "image": "/assets/images/evilmorty.png",
            "clicked": false
          },
          {
            "id": 4,
            "image": "/assets/images/gianthead.png",
            "clicked": false
          },
          {
            "id": 5,
            "image": "/assets/images/goldenford.png",
            "clicked": false
          },
          {
            "id": 6,
            "image": "/assets/images/jerry.png",
            "clicked": false
          },
          {
            "id": 7,
            "image": "/assets/images/jessica.png",
            "clicked": false
          },
          {
            "id": 8,
            "image": "/assets/images/meeseeks.png",
            "clicked": false
          },
          {
            "id": 9,
            "image": "/assets/images/morty.png",
            "clicked": false
          },
          {
            "id": 10,
            "image": "/assets/images/mr.png",
            "clicked": false
          },
          {
            "id": 11,
            "image": "/assets/images/rick.png",
            "clicked": false
          },
          {
            "id": 12,
            "image": "/assets/images/summer.png",
            "clicked": false
          }
        ]

      });
    }
    





  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.state.imgs.map((obj) =>{
              return (
                <ImgComp key={obj.id} imgId={obj.id} handleClick={this.handleClick} image={obj.image} imgStyles={imgStyles}/>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
