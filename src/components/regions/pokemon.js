import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import {LinearProgress, CircularProgress  } from '@material-ui/core'

import Item from './item'

// import { Container } from './styles';

function Pokemon() {
    let {name} = useParams()
    let url = `https://pokeapi.co/api/v2/region/${name}/`

    const [pokedex, setPokedex] = useState(null)
    const [url2, setUrl2] = useState(null)
    const [url3, setUrl3] = useState([])

    const [progress, setProgress] = useState(true)
    const [num, setNum] = useState(20)

    const undefined = 'Pagina não encontrada ou fora de ar =<'
    const text = 'A Api desta parte pode estar com problemas, por favor, encaminhe um e-mail para leojordano22@gmail.com'


    useEffect( () => {
        if(name !== 'alola') {
            fetch(url)
            .then(res => res.json())
            .then(data => setUrl2(data.pokedexes[0].url))
        }
        return null
    }, [url])

    useEffect(() => {
        if(url2 !== null) {
            fetch(url2)
                .then(res => res.json())
                .then(data => setUrl3(data.pokemon_entries))
        }
    }, [url2])

    // console.log(url3)
    // 
    // 
        setInterval(() => {
            setProgress(false) 
        }, 1000)
       
    

  return (
      <div className='pokes'>
          <div className="cont-pokes">
            {url3.length > 0 && progress 
                ? <div className='progress'>
                        <span>Is Loading...</span>
                    </div>
                : null}
          {name == 'alola' && <h2>{undefined}</h2>}
          {name == 'alola' && <div>{text}</div>}
        { url3 && progress == false ? url3.map( item => <Item key={item.entry_number} props={item} />) : null}
        </div>
      </div>
  );
}

export default Pokemon;