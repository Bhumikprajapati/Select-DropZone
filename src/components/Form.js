import React, { Component } from 'react';
import Rselect from './Rselect';
import Hobby from './Hobby'
import DropZone from './DropZone/DropZone'

class form extends Component {
  
    render() {
        return (
            <div>
               <h1>Let's Start</h1>
              <Rselect/>
              <br/>
              <Hobby/>
              <br/>
              <DropZone/>
            </div>
        );
    }
}

export default form;