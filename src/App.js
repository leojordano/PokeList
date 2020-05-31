import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'

import Regions from './components/regions/regions'
import Pokemon from './components/regions/pokemon'
import Unic from './components/regions/unic'

function App() {
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)

  let history = useHistory()

  function openMenu() {
    if(open == false) {
      return setOpen(true)
    }
      return setOpen(false)
  }

  function openDrop() {
    if(drop == false){
       return setDrop(true)
    }

    return setDrop(false)
  }


  return (
    <Router history={history} forceRefresh={true}>
      <div>

        <div className="side-bar" onClick={openMenu}>
          <FaAngleDoubleRight className={open == true ? 'icon rotate' : 'icon'}  />
        </div>
        
        <nav className={open ? 'sideMenu open' : 'sideMenu none'}>

            <div className="cont-all">
              <div className="link-cont">
                <Link className='link' to="/">Home</Link>
              </div>
                

              <div className='dropdown'>
                <div className="link-cont" onClick={openDrop}>
                    <span>Regions</span> <span><IoIosArrowDown /></span>  
                </div>
                
                <div className={drop ? "drop open-drop" : 'drop'}>
                  <ul className={drop && 'drop-ul'}>
                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/kanto">Kanto</Link>
                    </li>

                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/johto">johto</Link>
                    </li>

                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/hoenn">hoenn</Link>
                    </li>
                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/sinnoh">sinnoh</Link>
                    </li>
                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/unova">unova</Link>
                    </li>
                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/kalos">kalos</Link>
                    </li>
                    <li className={ drop ? "drop-item drop-item-open" : 'drop-item'}>
                      <Link className='link-drop' to="/regions/alola">alola</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="link-cont">
                <Link className='link' to="/">Home</Link>
              </div>

            </div>
              
        </nav>

      <Switch>
        <Route path='/regions/:name'>
            <Pokemon />
        </Route>

        <Route path='/poke/:poke'>
                <Unic />
            </Route>
      </Switch>
      </div>
    </Router> 
  );
}

export default App;
