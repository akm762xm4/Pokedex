import React from 'react'

const MoreInfo = ({
  pokeHeight,
  pokeWeight,
  pokestat1,
  pokestat2,
  pokestat3,
  pokestat4,
  pokestat5,
  pokestat6,
  pokebs1,
  pokebs2,
  pokebs3,
  pokebs4,
  pokebs5,
  pokebs6,
}) => {
  return (
    <div>
      <div>Height: {pokeHeight * 10} cm</div>
      <div>Weight: {pokeWeight * 0.1} kg</div>
      <div>
        {pokestat1}:{pokebs1}
      </div>
      <div>
        {pokestat2}:{pokebs2}
      </div>
      <div>
        {pokestat3}:{pokebs3}
      </div>
      <div>
        {pokestat4}:{pokebs4}
      </div>
      <div>
        {pokestat5}:{pokebs5}
      </div>
      <div>
        {pokestat6}:{pokebs6}
      </div>
    </div>
  )
}

export default MoreInfo
