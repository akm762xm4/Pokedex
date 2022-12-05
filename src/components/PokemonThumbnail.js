import React from 'react'
import { useState } from 'react'
import MoreInfo from './MoreInfo'

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const [show, setShow] = useState(false)
  const style = `thumbnail ${type}`
  return (
    <div className={style}>
      <div>#{id}</div>
      <div className="text-2xl">{name.toUpperCase()}</div>
      <img src={image} alt="Error" className="w-48 h-48" />
      <div>Type: {type.toUpperCase()}</div>
      <button
        className="border border-black rounded-md"
        onClick={() => setShow(!show)}
      >
        {show === false ? 'Know More...' : 'Know Less...'}
      </button>

      {show === true ? (
        <MoreInfo
          pokeHeight={height}
          pokeWeight={weight}
          pokestat1={stat1}
          pokestat2={stat2}
          pokestat3={stat3}
          pokestat4={stat4}
          pokestat5={stat5}
          pokestat6={stat6}
          pokebs1={bs1}
          pokebs2={bs2}
          pokebs3={bs3}
          pokebs4={bs4}
          pokebs5={bs5}
          pokebs6={bs6}
        />
      ) : (
        ''
      )}

      <div></div>
    </div>
  )
}

export default PokemonThumbnail
