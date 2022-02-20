import React from 'react'
import styled from 'styled-components';
import { selectMovies } from '../features/Movie/movieSlice';
import { useSelector } from 'react-redux';


const Movies = () => {

    const movies = useSelector(selectMovies);



  return (
    <Container>
        <h1>Recomended for you</h1>
        <Content>
            {movies && movies.map((movie) =>{

            <Wrap key={movie.id}>
                 <img src={movie.cardImg} />
            </Wrap>
            })}
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4920/1044920-v-1ac34349aead" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v" />
            </Wrap>
        </Content>
        <h1>New Bollywood Movies</h1>
        <Content>
            {movies && movies.map((movie) =>{

            <Wrap key={movie.id}>
                 <img src={movie.cardImg} />
            </Wrap>
            })}
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1327/441327-v" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3669/593669-v" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v" />
            </Wrap>
        </Content>
        <h1>New Web Series</h1>
        <Content>
            {movies && movies.map((movie) =>{

            <Wrap key={movie.id}>
                 <img src={movie.cardImg} />
            </Wrap>
            })}
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5631/1115631-v-72e0315be516"/>
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1919/1111919-v-f73a6f4d8b98" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9883/1109883-v-fd70e26332d7" />
            </Wrap>
            <Wrap>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies;

const Container = styled.div`

`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    border: 3px solid rgba(249, 249, 249, 0.1)
    box-shadow:rgba(0 0 0 /69%) 0px 26px 30px -10px, rgba(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform: scale(1.05);
        box-shadow:rgba(0 0 0 /69%) 0px 26px 30px -10px, rgba(0 0 0 /73%) 0px 16px 10px -10px;
        border-color: rgba(249,249,249,0.8);
    }
`