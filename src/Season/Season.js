import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Season.css';
import NoImage from './no-image.jpg';

class Seasons extends Component {
    state = {
        seasonList: []
    }
componentDidMount(){
    this.makeSeasonApiCall(this.props.match.params.showid);
}
makeSeasonApiCall =(showId)=> {
    var getSeasonApi = `http://api.tvmaze.com/shows/${showId}/seasons`;
    fetch(getSeasonApi)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ seasonList: jsonData});
      });
      
  };
    render(){
       
        return(
            <div id="main">
               <Link to="/">
               Back To Search
               </Link>
           
            <div className="season-container" id="season-container">
              {this.state.seasonList.map((seasonObj, index) => (
                <div className="single-season" key={index}>
                  <Link to={{pathname: `/${this.props.match.params.showid}/${seasonObj.id}/episode`}}>
                  {seasonObj.image !== null ?<img src={seasonObj.image.medium} alt="meal-thumbnail" /> : <img src={NoImage} alt="meal-thumbnail" />}
                  </Link>
                  <h2>Season-{seasonObj.number}</h2>
                </div>
            ))}
            </div>
          </div>
        );
    }
}
export default Seasons;