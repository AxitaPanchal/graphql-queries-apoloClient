import React from "react";
import {Link } from 'react-router-dom'
import {useCharacter} from '../Hooks/UseCharacter'
export const CharacterList = () => {
  const {loading , data , error} = useCharacter();
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>something went wrong...</div>;

  return (
    <>
      <h2>Character List ... </h2>
      <Link to="/search"> <button>Click to Search Data</button></Link>
      <div style={{marginTop:'12px', display: "flex", flexWrap: "wrap" ,justifyContent: "space-evenly"}}>
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`}>
              <img src={character.image} />
              <h2>{character.name} </h2>
            </Link>
          );
        })}
      </div>
    </>
  );
};


