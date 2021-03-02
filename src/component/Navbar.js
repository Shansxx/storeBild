import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import foto from '../image/logo.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 '>
                <Link to='/'>
                    <img src={foto} alt='logo'
                     className='navbar-logo'></img>
                </Link>
                <ul className='navbar-nav aliegn-items-centr'>
                    {/* <li className='nav-item ml-5 mr-3'>
                        <Link to='/' className='nav-link'>
                            Магазин
                        </Link>
                    </li> */}
                    <li className='nav-item ml-5 mr-3'>
                        <p>Наш магазин находится по адресу: <br/>Мещерский преулок 6 корпус 2 <br /> Метро Окская 600м.</p>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'><i className='fa fa-cart-plus'/></span>
                        Корзина
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
// width:100%;
// position:fixed;
background:var(--mainBlue);
z-index:2;
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
p{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
}
`;