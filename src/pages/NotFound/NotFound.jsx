import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
    <h2>Page isn't fouund</h2>
    <Link to="/">To home</Link>
    </>
  )
}
export default NotFound