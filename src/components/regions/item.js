import React, {useState, useEffect} from 'react';

// import { Container } from './styles';

function Item({...props}) {
    const [url] = useState(props.props.pokemon_species.url)
    const [url2, setUrl2] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [specie, setSpecie] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSpecie(data)
                data.varieties.map(test => {
                if(test.is_default == true) {
                    setUrl2(test.pokemon.url)
                }
            })})
    }, [url])

    useEffect(() => {
        if(url2 !== null){
            fetch(url2)
                .then(res => res.json())
                .then(data => setPokemon(data))
        }
    }, [url2])

  return (
      <>
    <div className='item'>
        <div className="header">
            {pokemon ? <div style={{backgroundColor: specie.color.name}} className='color'></div> : null}
            {pokemon ? <span className='name'>{pokemon.name}</span> : null}
        </div>

        <div className="body">
            {pokemon ? <div className='img' style={{backgroundImage: `url(${pokemon.sprites.front_default})`}}></div> : null}
        </div>

        <div className="footer">
            <div className='types'>
                {pokemon ? pokemon.types.map(type => <span key={type.type.name}>{type.type.name}</span>) : null}
            </div>
            <div>#{pokemon && pokemon.id}</div>
        </div>
    </div>
    </>
  );
}

export default Item;