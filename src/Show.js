import React from 'react'

const Show = ({ name, number, photo }) => {
  var images = photo !== null && photo !== 'undefined' ? photo : 'https://staging-mdc.robinson.co.th/media/aw_rbslider/slides/default-image_7.png'
  console.log(images)
  return (
    <div className="card">
      <img style={{ height: '200px', objectFit: 'cover'}} src={`http://127.0.0.1:8080/${images}`} class="card-img-top" alt={name}/>
      <div className="card-body">
      <p class="card-text">Name: {name || '-'}</p>
      <p class="card-text">Number: {number || '-'}</p>
      </div>
    </div>
  )
}

export default Show