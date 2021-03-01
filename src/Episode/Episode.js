import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Episode.css';
import NoImage from './no-image.jpg';

class Episode extends Component {
    state = {
        episodeList: []
    }
componentDidMount(){
    console.log(this.props);
    this.makeEpisodeApiCall(this.props.match.params.seasonid);
}
makeEpisodeApiCall =(seasonId)=> {
    var getEpisodeApi = `http://api.tvmaze.com/seasons/${seasonId}/episodes `;
    fetch(getEpisodeApi)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ episodeList: jsonData});
      });
      
  };
    render(){
        return(
            <div id="main">
              <div>
                  <Link to="/" className="back-to-search">Back To Search</Link>
                  <h4>Seasons Episode</h4>
                  <Link className="back-to-season" to={{pathname: `/season/${this.props.match.params.showid}`}}>Back To Season</Link>
              </div>
              <div className="episode-container" id="episode-container">
              {this.state.episodeList.map((showObj, index) => (
                <div className="single-episode" key={index}>
                  
                  {showObj.image !== null ?<img src={showObj.image.medium} alt="meal-thumbnail" /> : <img src={NoImage} alt="meal-thumbnail" />}
          
                  <h2>{showObj.name}</h2>
                </div>
              ))}
              </div>
            </div>
        );
    }
}
export default Episode;