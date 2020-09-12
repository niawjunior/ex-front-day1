import React, { useEffect, useState } from 'react';
import HeaderBar from './Header'
import Footer from './Footer'

import './App.css'
import Form from './Form';
import Show from './Show';
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/getData').then(res => res.json()).then(result => {
      setData(result.data)
    })
  }, [])
  return (
    <>
      <HeaderBar header="Football APP" color="000000"/>
      <div style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Form/>
            </div>
            <div className="col-6">
              <div className="row">
                  { data.length !==0 && data.map((item, key) => {
                    return  (
                      <div key={key} className="col-6" style={{ marginBottom: '10px'}}>
                        <Show name={item.NAME} number={item.NUMBER} photo={item.PHOTO}/> 
                        </div>
                    )
                  })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
