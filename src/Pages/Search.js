import React,{useState} from 'react';
import {gql , useLazyQuery} from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocaions($name : String!){
characters(filter :{
    name : $name
}){
results{
location{
    name
}
}
}
}
`

export default function Search() {
    const [name, setName] = useState("");
   const [getLocations ,{loading, data , error , called}] = useLazyQuery(GET_CHARACTER_LOCATIONS,{
       variables :  {name}
   })
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => getLocations()}> Search </button>
            {loading && <div>Loading ... </div>}
            {data ? (
                <ul>
                    {
                        data.characters.results.map((character) =>{
                            return <li>{character.location.name} </li>
                        })
                    }
                    </ul>
            ):<> <br/>{"Data not matched"}</>}
        </div>
    )
}
