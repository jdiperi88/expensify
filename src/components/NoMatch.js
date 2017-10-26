import React from 'react';
import {Link} from 'react-router-dom'

const NoMatch = () =>{
    return (
        <div> 
            404! <Link to='/'>Go Home</Link>
        </div>
    )
}

export default NoMatch;