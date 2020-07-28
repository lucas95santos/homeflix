import React from 'react'
// utils
// import path from '../utils/path'
// styled components
import { Button } from '../styledComponents'
import { Link } from 'react-router-dom'

const Watch = () => {
  return(
    <div style={{
      backgroundColor: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 15
    }}>
      <Link to="/inicio" style={{ marginBottom: 15 }}>
        <Button>Voltar</Button>
      </Link>
      <div style={{ width: "100%", height: "88.3vh", backgroundColor: "#000" }}>
        <video width="100%" height="100%" controls style={{ outline: "none" }}>
          <source src={require(`./video.mp4`)} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Watch
