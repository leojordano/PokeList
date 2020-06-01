import React, {useEffect, useState} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom'
import {IoMdMale, IoMdFemale} from 'react-icons/io'

import Back from './back'

// import { Container } from './styles';

 function Unic() {
    const { poke } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
    const specieUrl = `https://pokeapi.co/api/v2/pokemon-species/${poke}`
    const [item, setItem] = useState(null)
    const [specie, setSpecie] = useState(null)

    const [render, setRender] = useState(false)

    useEffect( async () => {
      await fetch(url)
              .then(res => res.json())
              .then(data => {
                setItem(data)
              })
    }, [])

    useEffect( async () => {
      await fetch(specieUrl)
              .then(res => res.json())
              .then(data => {
                setSpecie(data)
                setTimeout(() => {
                  setRender(true)
                }, 800)
                })
    }, [])

    function getHeight(num) {
      if(num.toString().length >= 2) {
        const um = num.toString().substring(0,1)
        const dois = num.toString().substring(1,2)
        const teste = `${um}.${dois} m`
        return teste
      } else {
        return `0.${num} m`
      }
      
    }

    function getWeight(num) {
      if(num.toString().length == 2) {
      const num1 = num.toString().substring(0,1)
      const num2 = num.toString().substring(1,2)
      return `${num1}.${num2} kg`
    } else if (num.toString().length == 3) {
      const num1 = num.toString().substring(0,1)
      const num2 = num.toString().substring(1,2)
      const num3 = num.toString().substring(2,3)
      return `${num1}${num2}.${num3} kg`
    } else if (num.toString().length == 4) {
        const num1 = num.toString().substring(0,1)
        const num2 = num.toString().substring(1,2)
        const num3 = num.toString().substring(2,3)
        const num4 = num.toString().substring(3,4)
        return `${num1}${num2}${num3}.${num4} kg`
    }
    return 'Não identificado'
  }

  if(render) {
    document.title = `PokeList | ${item.name}`  
  }

  return (
    <>
    <Back />
    <div className='unic'>
      <div className="header-unic">
        {render && <h3>{item.name}</h3>}
        {render && <h3>#{item.id}</h3>}
      </div>

      <div className="unic-body">
        <div className="sprites">
        <div className="cont-sprites">

          <div className="default">
            {render && <div className='cont-sprites'><img src={item.sprites.front_default} /></div>}
            {render && <div className='cont-sprites'><img src={item.sprites.back_default} /></div>}
          </div>
          
          <div className="shiny">
            {render && <div className='cont-sprites'><img src={item.sprites.front_shiny} /></div>}
            {render && <div className='cont-sprites'><img src={item.sprites.back_shiny} /></div>}
          </div>
        </div>
      </div>
      
        <div className="unic-types">
          <div className='cont-unic-type'>{render && item.types.map(type => <div className='unic-type'>{type.type.name}</div>)}</div>

          <div className="cont-infos">
            <div>Height: {render && <span>{getHeight(item.height)}</span>}</div>
            <div>Weight: {render && <span>{getWeight(item.weight)}</span>}</div>
            <div>Base Exp: {render && <span>{item.base_experience}</span>}</div>
            <div>Cap Rate: {render && <span>{specie.capture_rate}%</span>}</div>
            <div>Base Happi: {render && <span>{specie.base_happiness}</span>}</div>
            <div>Gender: <IoMdMale /> or <IoMdFemale /></div>
          </div>
        </div>

        <div className="stats">
            {render && item.stats.map(item => (
              <div style={{display: 'flex', marginBottom: '5px'}}>
              <span style={{width: '120px', textTransform: 'capitalize'}}>{item.stat.name}</span>
              <div style={{width: '200px', backgroundColor: 'gray', display: 'flex', borderRadius: '5px'}}>
                <div style={{width: `${item.base_stat}%`, backgroundColor: '#343a40'}}><span style={{marginLeft: '2px'}}>{item.base_stat}</span></div>
              </div>
              </div> 
            ))}
        </div>

        <div className='cont-abilities'>
          {render && item.abilities.map(item => <div className='ability'>{item.ability.name}</div>)}
        </div>

      </div>
    </div>   
    </>   
  );
}
export default Unic