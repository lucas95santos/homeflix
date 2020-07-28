import React from 'react';
import { Link } from 'react-router-dom'
// styled components
import { BodyContent, SigninContainer, SigninTitle, SectionForm, SigninPicture } from '../styledComponents'
// react-icons
import { FiLogIn } from 'react-icons/fi'
// svg
import moviesSvg from '../assets/undraw/movie_night.svg'

const Dashboard = () => (
  <BodyContent>
    <SigninContainer>
      <SectionForm>
        <SigninTitle>Homeflix</SigninTitle>

        <form style={{ marginTop: 60 }} onSubmit={e => e.preventDefault()}>
          <h1 style={{
            fontSize: 32,
            marginBottom: 32,
            color: "#fff",
            fontWeight: 500
          }}>
            Entre para assistir
          </h1>

          <input
            type="email"
            placeholder="Seu e-mail"
          />

          <input
            type="password"
            placeholder="Sua senha"
          />

          {/* <button type="submit" className="button">Entrar</button> */}
          <Link to="/inicio" className="button">
            Entrar
          </Link>
        </form>
        <Link to="/cadastro" className="link">
          <FiLogIn size={16} color="#e6443c" />
          Não tenho cadastro
        </Link>
      </SectionForm>
      <SigninPicture>
        <img src={moviesSvg} alt="" style={{
          maxWidth: 600
        }}/>
      </SigninPicture>
    </SigninContainer>
  </BodyContent>
)

export default Dashboard;
