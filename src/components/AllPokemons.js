import React, { useState, useEffect } from 'react'
import ReactTyped from 'react-typed'
import PokemonThumbnail from './PokemonThumbnail'

const Comp1 = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadPoke, setLoadPoke] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0limit=20`,
  )
  const [loading, setLoading] = useState(false)
  const getAllPokemons = async () => {
    setLoading(true)
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)
    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        )
        const data = await res.json()
        setAllPokemons((curList) => [...curList, data])
      })
    }
    createPokemonObject(data.results)
    setLoading(false)
  }
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-pink-300 to-green-400 pb-4">
      <div className="text-[4rem] text-center font-semibold transition-translate text-[#ffa600c9]">
        {' '}
        <ReactTyped
          strings={[
            'Welcome To PokeDex...',
            'All Pokemon Stats...',
            'More Than 1000 Pokemons...',
          ]}
          typeSpeed={70}
          backSpeed={30}
          loop
        />{' '}
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4">
        {allPokemons.map((pokemon, index) => {
          return (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          )
        })}
      </div>
      <button
        className={`'flex bg-[#ffa600c9] w-[13rem] h-[5.5rem] rounded-xl mx-auto my-4 items-center text-3xl justify-center shadow-md shadow-black'`}
        onClick={() => getAllPokemons()}
      >
        {loading === true ? 'Loading' : 'More Pokemons'}
      </button>
    </div>
  )
}

export default Comp1
