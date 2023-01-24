import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundBlock from '../components/NotFoundBlock/NotFoundBlock'

const NotFound = () => {
    return (
        <div>
            <NotFoundBlock />
            <Link to="/pizzarello">Back</Link>
        </div>
    )
}

export default NotFound