import styled from 'styled-components'

// dashboard styles
export const SigninContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 1070px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1069px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 25px;
  }
`

export const SectionForm = styled.section`
  width: 100%;
  max-width: 350px;

  @media (max-width: 1069px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const SigninPicture = styled.div`
  @media (min-width: 1070px) {
    display: block;
  }

  @media (max-width: 1069px) {
    display: none;
  }
`

export const SigninTitle = styled.h1`
  font-size: 3.3rem;
  font-weight: 500;
  font-family: 'Bebas Neue';
  line-height: 4rem;
  letter-spacing: 1px;
  color: #e6443c;
`
// end dashboard styles

// navbar styles
export const Nav = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 100;
  background-color: ${props => props.transparent ? 'transparent' : '#0d0d0d'};
  background-image: linear-gradient(to top, transparent, rgba(0,0,0, 0.15), rgba(0,0,0, 0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8));
  box-shadow: ${props => props.transparent ? 'none' : '0 0 10px 5px rgba(0,0,0,0.5)'};
`

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 0 auto;
  @media (min-width: 1367px) {
    max-width: 1400px;
  }
  @media (max-width: 1366px) {
    max-width: 1200px;
  }
`

export const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItem = styled.div`
  width: 100%;
  height: 100%;
  flex: ${props => props.flex};
`

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 30px;
  text-transform: uppercase;
  transition: all 0.33s;
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`
// end navbar styles

// content
export const BodyContent = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  background-color: #0d0d0d;
`

export const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: ${props => `${props.height}%`};
  padding: 15px;
  margin: 0 auto;
  padding-top: ${props => `${props.paddingTop}px`};
  @media (min-width: 1367px) {
    max-width: 1400px;
  }
  @media (max-width: 1366px) {
    max-width: 1200px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentItem = styled.div`
  margin-bottom: 30px;
`

export const ItemTitle = styled.div`
  font-family: 'Cairo', Arial, Helvetica, sans-serif;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 4rem;
  color: #fff;
  text-shadow: 4px 4px 8px #222;
`

export const ItemDescription = styled.div`
  max-width: 50%;
  font-family: 'Cairo', Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: #fff;
  text-shadow: 2px 2px 5px #222;
  @media (max-width: 1000px) {
    max-width: 80%;
  }
  @media (max-width: 800px) {
    max-width: 100%;
  }
`

export const OtherContent = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`

export const SectionContent = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Cairo';
  letter-spacing: 1px;
  color: #fff;
`
// end content

// others components

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: 'Bebas Neue';
  letter-spacing: 1px;
  color: #e6443c;
`

export const Button = styled.button`
  height: 30px;
  padding: 5px 15px 6px;
  border: none;
  border-radius: 2px;
  background-color: ${props => props.register ? '#fff' : '#e6443c'};
  color: ${props => props.register ? '#444' : '#fff'};
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.33s;
  outline: none;
  &:hover {
    background-color: ${props => props.register ? '#eee' : '#bf4039'};
  }
`

export const LogoutButton = styled.button`
  height: 30px;
  padding: 3px 15px 8px;
  border: none;
  border-radius: 2px;
  background-color: #fff;
  border: 2px solid #e6443c;
  color: #e6443c;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.33s;
  outline: none;
  &:hover {
    background-color: #e6443c;
    border: 2px solid transparent;
    color: #fff;
  }
`

export const OptionButton = styled.button`
  width: ${props => props.size !== 'sm' ? '120px' : '100px'};
  height: ${props => props.size !== 'sm' ? '40px' : '30px'};
  padding: 5px 15px 6px;
  border: none;
  border-radius: 2px;
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.33s;
  outline: none;
  &:hover {
    background-color: #eee;
    color: #222;
    transform: scale(1.1);
  }
`

export const SearchContainer = styled.div`
  width: 300px;
  height: 45px;
  position: relative;
  background-color: rgba(13, 13, 13, 0.6);
  border: 2px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

export const InputSearch = styled.input`
  width: calc(100% - 31px);
  height: 25px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: 'Cairo', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  padding: 5px 0;
  letter-spacing: 1px;
`
// slider
export const SliderContainer = styled.div`
  width: 100%;
  @media (min-width: 1367px) {
    height: 230px;
  }
  @media (max-width: 1366px) {
    height: 200px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  padding: 0 15px;
`

export const SliderContent = styled.div`
  flex: 1;
  @media (min-width: 1367px) {
    height: 225px;
  }
  @media (max-width: 1366px) {
    height: 195px;
  }
  padding: 0 7.5px;
  outline: none;
`

export const SliderItem = styled.div`
  @media (min-width: 1367px) {
    height: 225px;
  }
  @media (max-width: 1366px) {
    height: 195px;
  }
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  cursor: pointer;
  transition: all 0.33s;
`

export const SliderItemTitle = styled.div`
  font-family: 'Cairo', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  line-height: 1.5rem;
  color: #fff;
  text-shadow: 4px 4px 8px #222;
  margin-bottom: 10px;
`

export const SliderItemDescription = styled.div`
  font-family: 'Cairo', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 0.9rem;
  color: #fff;
  text-shadow: 2px 2px 5px #222;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 20px;
`
// end slider
