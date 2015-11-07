import React from 'react';
import {render} from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, IndexRoute, Link, IndexLink, History } from 'react-router';



const history = useBasename(createHistory)({
  basename: '/I-am-a-Basename'
});

const App = React.createClass ({
  getInitialState() {
    return {
      awesome: "Really-High-Level-of-Awesome",
      inherit: "I am a prop!"
    };
  },
  componentDidMount() {
    console.log(this.state.awesome);
  },
  render() {
    return (
      <div>
        <h1>Really Awesome Demo!</h1>
        <ul>
          <li>
            <Link className="btn btn-primary" to="/">This will take us to the Really Awesome Home Page!</Link>
          </li>
          <br/>
          <li>
            <IndexLink className="btn btn-primary" to="/">Hey! I am an IndexLink. I will only render on my path page, and not on any other paths, even if they are nested in my path </IndexLink>
          </li>
          <br/>
          <li>
            <Link className="btn btn-primary" to="/awesome">Awesome Levels</Link>
          </li>
          <br/>
          <li>
            <Link className="btn btn-primary" to={`/awesome/${this.state.awesome}`}>Really High Level of Awesome</Link>
          </li>
          <br/>
          <li>
            <Link className="btn btn-primary" to='/parent'>Parent</Link>
          </li>
        </ul>

        {this.props.children && React.cloneElement(this.props.children, {
          awesome: this.state.awesome,
          inheritance: this.state.inherit
        })}
      </div>
    )
  }
});

const Index = React.createClass ({
  render() {
    return (
      <div>
        <h3>Hey I am an IndexLink! I will only render on my specific link and not any nested within my path!</h3>
      </div>
    )
  }
});

const Awesome = React.createClass ({
  render() {
    return (
      <div>
        We are props from my parent - {this.props.awesome} & {this.props.inheritance}
        <h3>I am a good old nested link. See how the 'navbar' is still present but its buddy the IndexLink is not? Yeah I know - its awesome, but not as awesome as...</h3>
      </div>
    )
  }
})

const HighAwesome = React.createClass ({
  render() {
    return (
      <div>
        <h3> Variables can be passed to the URL. And even pulled down from the url.
        <br/>
        <br/>
        I am from the url - {this.props.params.awesome}
        <br/>
        <br/>
        This is extremely useful! Imagine rendering a profile page for users that are linked from a user feed.
        <br/>
        <br/>
        Hey didn't that work in some project here at Codesmith?!</h3>
      </div>
    )
  }
});

const Parent = React.createClass ({
  render() {
    return (
      <div>
        You can Link from anywhere, but the routes must be all at the upper level!
        <br/>
        <Link to="parent/nestedchild"> Nested Child</Link>
        <br/>
        <Link to="/child"> Child</Link>
      {this.props.children}
      </div>
    )
  }
});

const Child = React.createClass ({
  render() {
    return (
      <div>
        I am a child. See how I am not nested?
        <br/>
         <span className="text-info">Can you gues what happens if the page refreshes</span>?
      </div>
    )
  }
});

const NestedChild = React.createClass ({
  render() {
    return (
      <div>
        I am a nested child.
      </div>
    )
  }
});

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/awesome" component={Awesome}/>
      <Route path="/awesome/:awesome" component={HighAwesome}/>
      <Route path="/parent" component={Parent}>
        <Route path="/parent/nestedchild" component={NestedChild}/>
      </Route>
      <Route path="/child" component={Child}/>
    </Route>
  </Router>
), document.getElementById('container'))
