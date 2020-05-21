import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import Item from './item'

// import { Container } from './styles';

function Pokemon() {
    let {name} = useParams()
    let url = `https://pokeapi.co/api/v2/region/${name}/`

    const [pokedex, setPokedex] = useState(null)
    const [url2, setUrl2] = useState(null)
    const [url3, setUrl3] = useState([])

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

    // useEffect(() => {
    //     if(url3 !== null) {
    //         console.log(url3[0])
    //     }
    // },[url3])
  return (
      <div className='pokes'>
          {name == 'alola' && <h2>{undefined}</h2>}
          {name == 'alola' && <div>{text}</div>}
        { url3 ? url3.map(item => <Item key={item.entry_number} props={item} />) : null}
      </div>
  );
}

export default Pokemon;