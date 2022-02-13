import React ,{useState} from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/Car/carSlice';
import {useSelector} from 'react-redux';
import { selectMenus } from '../features/Car/menuSlice';


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    const menus = useSelector(selectMenus);
 
  


    return(
        <>
        <Container>
            <a>
                <img src="../images/logo.svg" alt="logo" />
            </a>
            <Menu>
            {cars && cars.map((car,index) =>(
                <a key={index} href="#">{car}</a>
            ))}
            
            </Menu>
            <RightMenu>
                <a herf="#">Shop</a>
                <a herf="#">Account</a>
                <a herf="#"><i className="fa-solid fa-bars" onClick={() => setBurgerStatus(true)}></i></a>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <i class="fa-solid fa-xmark" onClick={() => setBurgerStatus(false)}></i>
                </CloseWrapper>
                {cars && cars.map((car,index) =>(
                <li key={index}><a href="#">{car}</a></li>
            ))}
                {menus && menus.map((menu,ind) =>(
                <li key={ind}><a href="#">{menu}</a></li>
            ))}
               
            </BurgerNav>
        </Container>
        </>
    )
}
export default Header;

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
    
    img{
        height:18px;
        width:140px;
        padding-left:20px;
    }
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:capitalize;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;

    a{
        font-weight:600;
        text-transform:capitalize;
        margin-right: 15px;
        flex-wrap:nowrap;
    }
    i{
        cursor:pointer;
    }
`
const BurgerNav = styled.div`
   position:fixed;
   height:2000px;
   top:0;
   bottom:0;
   right:0;
   background:white;
   width:300px;
   z-index:16; 
   list-style:none;
   padding:20px;
   flex-direction:column;
   ${'' /* justify-content:flex-start; */}
   text-align:start;
   transform: ${props => props.show? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a{
            font-weight:600;
        }
    }
    i{
            cursor:pointer;
        }

`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`