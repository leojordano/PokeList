import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Pokemon from './pokemon'
import {Link} from 'react-router-dom'
import './style.css'

// import { Container } from './styles';

function Regions() {
    const url = 'https://pokeapi.co/api/v2/region/'
    const [regions, setRegions] = useState([])
    const [nop, setNop] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRegions(data.results))

        return () => {
            window.location.reload()
        }
    },[url])

    function displayMenu() {
        if(nop == false) {
            return setNop(true)
          }
            return setNop(false)
    }

  return (
      <div className="body">
          <Router>
        <ul className='regions'>
            { nop ? regions.map(
                region => 
                <li key={region.name}>
                    <Link onClick={() => displayMenu}  to={`/regions/${region.name}`}>{region.name}</Link>
                </li>) : null}
        </ul>

        <Switch>

        <Route path='/regions/:name'>
            <Pokemon />
        </Route>

      </Switch>
      </Router>
      </div>
    
  );
}

export default Regions;