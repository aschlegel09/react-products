// You can live edit this code below the import statements
import React from 'react';
// import Rotate from 'react-reveal/Rotate';
import {Row} from '../Grid/index';
import Swing from 'react-reveal/Swing';
import './button.css';

class Donate extends React.Component {
  render() {
    return (
      <div>
        <Swing>
        <Row>
          <a href="https://www.crowdrise.com/o/en/campaign/anchor-relief" target="_blank" rel="noopener noreferrer">
          <button className="donate-btn">Donate <i className="fas fa-heart"></i>
            </button></a>
                        </Row>
        </Swing>
      </div>
    );
  }
}

export default Donate;
