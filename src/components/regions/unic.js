import React from 'react';
import {useParams, useRouteMatch} from 'react-router-dom'

// import { Container } from './styles';

 function Unic() {
    const { poke } = useParams()
    console.log(poke)

  return (
    <div className='unic'>
      <div className="cont-unic">
        <span>{poke}</span>
      </div>
    </div>      
  );
}
export default Unic