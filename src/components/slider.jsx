import React from 'react'
import { Link } from 'react-router-dom'
// slider
import Slider from 'react-slick'
// styled components
import {
  SliderContainer,
  SliderContent,
  SliderItem,
  SliderItemTitle,
  SliderItemDescription,
  OptionButton
} from '../styledComponents'
// slider settings
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]

}

const SliderComponent = (props) => {
  const { data } = props

  return(
    <SliderContainer>
      <Slider {...settings}>
        {data.map((item, index) => (
          <SliderContent key={index}>
            <SliderItem image={item.image}>
              <SliderItemTitle>{item.title}</SliderItemTitle>
              <SliderItemDescription>{item.smallDescription}</SliderItemDescription>
              <Link to={`${item.title}/assistir`}>
                <OptionButton size="sm">Assistir</OptionButton>
              </Link>
            </SliderItem>
          </SliderContent>
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default SliderComponent
