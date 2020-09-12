import React, { useState } from 'react'
import swal from 'sweetalert';

const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [previewUrl, setImagePreviewUrl] = useState('https://staging-mdc.robinson.co.th/media/aw_rbslider/slides/default-image_7.png')
  const [file, setFile] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    console.log(file)
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then(result => {
       fetch('http://localhost:3001/insertData', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'name': name,
        'number': number,
        'photo': result.file.filename
      })
    }).then(res => res.json())
      .then(result => {
        swal({
          title: "Successfully",
          text: "",
          icon: "success",
          button: "close",
        });
        console.log(result)
      }).catch(e => {
      })
    })
  } 

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader(); 
    reader.onloadend = () => { 
        setFile(file)
        setImagePreviewUrl(reader.result)
    }
    reader.readAsDataURL(file)
  }
  return (
    <div className="card">
    <div className="card-body">
      <form onSubmit={onSubmit} enctype="multipart/form-data">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" onChange={handleNameChange} value={name}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Number</label>
          <input type="text" className="form-control" onChange={handleNumberChange} value={number}/>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Photo</label>
         
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <img width="40" height="40" style={{objectFit: 'cover'}} src={previewUrl} alt="test"/>
        </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" onChange={handlePhotoChange}/>
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
          </div>
        </div>
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
        </div>
    </div>
  )
}


export default Form