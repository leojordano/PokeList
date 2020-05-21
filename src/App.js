import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'

import Regions from './components/regions/regions'

function App() {
  const [open, setOpen] = useState(false)

  function openMenu() {
    if(open == false) {
      return setOpen(true)
    }
      return setOpen(false)
  }

  return (
    <Router>
      <div>

        <div className="side-bar">
          <FaAngleDoubleRight className={open == true ? 'icon rotate' : 'icon'} onClick={openMenu} />
        </div>
        
        <nav className={open ? 'sideMenu open' : 'sideMenu none'}>
            <ul>
              <li>
                <Link className='link' to="/">Home</Link>
              </li>

              <li>
                <Link className='link' to="/regions">Regions</Link>
              </li>

              <li>
                <Link className='link' to="/regions">Regions</Link>
              </li>

              <li>
                <Link className='link' to="/regions">Regions</Link>
              </li>

              <li>
                <Link className='link' to="/regions">Regions</Link>
              </li>

              <li>
                <Link className='link' to="/regions">Regions</Link>
              </li>
            </ul>
        </nav>

      <Switch>
        <Route path='/regions'>
          <Regions />
        </Route>
      </Switch>
      </div>
    </Router> 
  );
}

export default App;
