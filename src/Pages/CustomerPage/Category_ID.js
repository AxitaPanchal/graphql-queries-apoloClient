import React from 'react'
import {useParams} from 'react-router';

export default function Category_ID() {
    const {id  } = useParams()
    return (
        <div style={{display:'flex', justifyContent:'center',alignItems : "center",textAlign:'center', vh : 100 }}>
          <h2 > you have clicked this <b>{id}</b> number. !!!!</h2> 
        </div>
    )
}
