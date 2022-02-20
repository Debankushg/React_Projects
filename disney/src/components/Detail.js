import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
        <Background>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2886/892886-h" />
        </Background>
        <ImgTitle>
            <h1>TANHAJI</h1>
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-white.png" />
                <span>Watch Movie</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <img src="/images/watchlist-icon.svg" />
                <span> WATCHLIST</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2h 12m . 2020 . Drama .Hindi U/A 16+
        </SubTitle>
        <Description>
        As Aurangzeb captures the Kondhana Fort, Tanhaji Malusare, Chhatrapati Shivaji Maharaj's trusted military leader and braveheart, ventures out to win it back.
        </Description>

    </Container>
  )
}

export default Detail;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;


`

const Background = styled.div`
    position:fixed;
    top:40px;
    left:0px;
    bottom:0;
    right:0;
    z-index: -1;
    opacity:0.8;
    display:flex;
    background:linear-gradient(to bottom, #141b29, #0c111b 300px);
    box-shadow:  ;
    filter: drop-shadow(3px -3px -3px -3px #040714);

    img{
        border-radius:0px;
        width:100%
        height:80%;
        object-fit:cover;
        border:5px  #040714;
        opacity:0.9;
        padding-left:300px;
       }
`
const ImgTitle = styled.div`
   
   h1{ 
        top:200px;
       font-size:50px;
       width:100%;
        height:30vh;
        margin-top:50px;
        margin-bottom:0px;

   }
`
const Controls = styled.div`
    display:flex;
    
`
const PlayButton =styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0px 10px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background: transparent;
    border:none;
    color:white;
    font-weight:600;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198, 198, 198);
        color:black;
    }


`

const TrailerButton = styled(PlayButton)`
    background:rgba(0, 0, 0, 0.3);
    border:1px solid rgb(249,249,249)
`
const AddButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0px 10px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background: transparent;
    border:none;
    color:white;
    font-weight:600;
    letter-spacing:1.8px;
    cursor:pointer;
    border:1px solid rgb(249,249,249);
    img {
        height:40px;
    }

`
const GroupWatchButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
     
`
const SubTitle = styled.div`
    color:silver;
    font-size:15px;
    min-height:20px;
    margin-top:26px;
    font-weight:700;
`
const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
    max-width:550px;
`