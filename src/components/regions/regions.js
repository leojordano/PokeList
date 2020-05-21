import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Pokemon from './pokemon'
import './style.css'

// import { Container } from './styles';

function Regions() {
    const url = 'https://pokeapi.co/api/v2/region/'
    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRegions(data.results))
    },[])

  return (
      <div className="body">
          <Router>
        <ul className='regions'>
            {regions.map(
                region => 
                <li key={region.name}>
                    <a href={`/regions/${region.name}`}>{region.name}</a>
                </li>)}
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