import React from 'react'

const PokeCard = ({ pokemon }) => {
  return (
    <div className="card text-center mx-auto" style={{ "maxWidth": "18rem" }} key={pokemon.id}>
      <div className="card-header"><b>{pokemon.name}</b></div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Nro en Pokedex: {pokemon.id}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Altura: {pokemon.height}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Peso: {pokemon.weight} kg</h6>
        <img src={pokemon.sprites['front_default']} />
        <img src={pokemon.sprites['back_default']} />
      </div>
    </div>
  )
};

export default PokeCard