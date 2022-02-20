import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" />
                <span>Home</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" />
                <span>Search</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WatchList</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" />
                <span>Originals</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" />
                <span>Movies</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" />
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src="https://scontent.frdp5-1.fna.fbcdn.net/v/t39.30808-6/251591299_1258285094597948_9070800750543457154_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=_59I3al6YA8AX9BG1P5&_nc_ht=scontent.frdp5-1.fna&oh=00_AT-o8-LHwJHvqE4uEGYAkIYLaY6Uu2qfTr1gigJ37VMPlQ&oe=6210F69D" />

    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;


`
const Logo = styled.img`
    width:80px;

`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;


    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;


        img{
            height:20px;
        }

        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`
const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;

`
