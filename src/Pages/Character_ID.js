import React from 'react';
import {useCharacterByID} from '../Hooks/UseCharacter'
import {useParams} from 'react-router'
export default function Character_ID() {
    const {id} = useParams()
    const {loading , data , error } = useCharacterByID(id);
    console.log({loading , data , error });
  if (error) return <div>something went wrong...</div>;
  if (loading) return <div>Loading ...</div>;


    return (
        <div >
            <div style={{display:'flex' , justifyContent:'center'}}>
            <img src={data.character.image} height={750} width={750} />
            <h3>{data.character.name} </h3> 
            <div>{
                data?.character?.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>{episode.episode}</b>
                        </div>
                })}
          </div>
                </div>
        </div>
    )
}
