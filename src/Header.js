import React from 'react'

const Header = ({ header, color }) => {
  return (
    <div style={{width: '100%',backgroundColor: '#17a2b8'}}>
      <h1 style={{color, padding: '1rem', textAlign: 'center', color: '#ffffff'}}>{ header }</h1>
    </div>
  )
}

export default Header