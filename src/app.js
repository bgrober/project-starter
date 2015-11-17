import React from 'react';
import {render} from 'react-dom';
import Canvas from './canvas.js';

const App = React.createClass ({
  getInitialState() {
    return {
      components: []
    };
  },
  beginDrawing: function() {
    console.log('hello')
    var coordinates = { };
    debugger;
    //coordinates.x = 'mouseDown x',
    //coordinates.y = 'mouseDown y'

  },

  render() {
    return (
      <div>
        <Canvas create={this.beginDrawing}/>
      </div>
    )
  }
});

render((
  <App/>
), document.getElementById('container'))
