import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeItem(props) {
  return (
    <li>{props.name}</li>
  );
}

function PokeList(props) {
  const pokedex = props.list;
  const listItems = pokedex.map(pokemon =>
  <PokeItem key={pokemon.number} name={pokemon.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(<PokeList list={pokedex}/>, document.querySelector('#root'));
