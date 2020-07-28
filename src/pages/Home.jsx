import React, { useEffect, useState, useRef } from 'react';
// components
import { Navbar, Slider } from '../components'
// styled components
import {
  BodyContent,
  MainContent,
  OtherContent,
  SectionContent,
  SectionTitle,
  Container,
  Content,
  ContentItem,
  ItemTitle,
  ItemDescription,
  OptionButton
} from '../styledComponents'
// utils
import movies from '../utils/movies'

const Home = () => {

  const [movieHighlight, setMovieHighlight] = useState({})
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()

  navRef.current = navBackground

  useEffect(() => {
    isHighlighted()
    const handleScroll = () => {
      const show = window.scrollY > 500
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHighlighted = () => {
    movies.forEach(movie => {
      if (movie.highlight) {
        setMovieHighlight(movie)
      }
    })
  }

  return(
    <BodyContent>
      <Navbar transparent={!navBackground}/>
      {movies && (
        <>
          <MainContent image={movieHighlight.image}>
            <Container height={100} paddingTop={85}>
              <Content>
                <ContentItem>
                  <ItemTitle>
                    {movieHighlight.title}
                  </ItemTitle>
                </ContentItem>
                <ContentItem>
                  <ItemDescription>
                    {movieHighlight.description}
                  </ItemDescription>
                </ContentItem>
                <ContentItem>
                  <OptionButton>Assistir</OptionButton>
                </ContentItem>
              </Content>
            </Container>
          </MainContent>
          <Container>
            <OtherContent>
              <SectionContent>
                <SectionTitle>Populares na Homeflix</SectionTitle>
                <Slider data={movies}/>
              </SectionContent>
              <SectionContent>
                <SectionTitle>Em alta</SectionTitle>
                <Slider data={movies}/>
              </SectionContent>
              <SectionContent>
                <SectionTitle>Filmes de suspense</SectionTitle>
                <Slider data={movies}/>
              </SectionContent>
            </OtherContent>
          </Container>
        </>
      )}
    </BodyContent>
  )
}

export default Home;
