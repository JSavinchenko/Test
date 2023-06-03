import React from 'react'
import Navbaar from './Navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className='c'>
        <Navbaar />
        {children}
      </div>
    </React.Fragment>
  )
}

export default Layout