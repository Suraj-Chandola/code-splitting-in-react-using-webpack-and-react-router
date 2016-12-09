import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './Components/App'

// lazy Loaded modules
import Settings from 'bundle-loader?lazy!./Components/Settings'
import About from 'bundle-loader?lazy!./Components/About'

const lazyLoad = (load) => (nextstate, cb) => {
  load(component => cb(null, component.default))
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/settings' getComponent={lazyLoad(Settings)}/>
      <Route path='/About' getComponent={lazyLoad(About)}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
