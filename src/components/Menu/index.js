import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { IoMenuOutline, IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';
import Logo from '../../assets/logo.png';
import Flag from '../../assets/flag.png';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;

    figure{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        ul{
            display: flex;
            flex-direction: row;
            list-style: none;
            align-items: center;
            justify-content: center;

            strong, a {
                font-weight: normal;
                text-decoration: none;
                color: ${Colors.cls_gray};
                font-size: 14px;
            }
            a{
                text-decoration: underline;
            }
            li{
                padding: 0px 10px;
            }
            hr{
                height: 15px;
                background-color: ${Colors.cls_gray_ligth};
                border: 1px solid ${Colors.cls_gray_ligth};
            }
        }
    }
    #nav-menu{
        display: flex;
        flex-direction: ${props => props.menu ? `column` : `row`};
        align-items: center;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;

        li{
            margin: 20px 10px;
            
            a{
                text-decoration: none;
                color: ${Colors.cls_gray};
                font-size: 14px;
                font-weight: bold;
                padding: 5px 10px;
                transition: all 0.5s;
            }
            a:hover{
                background-color: ${Colors.cls_green};
                color: ${Colors.cls_white};
            }
        }
    }
    
    @media (max-width: 700px){
        #nav-menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
            flex-wrap: wrap;

            li{
                margin: 20px 10px;
                
                a{
                    text-decoration: none;
                    color: ${Colors.cls_gray};
                    font-size: 14px;
                    font-weight: bold;
                    padding: 5px 10px;
                    transition: all 0.5s;
                }
                a:hover{
                    background-color: ${Colors.cls_green};
                    color: ${Colors.cls_white};
                }
            }
        }
    }
`;

export default function Menu() {
    return (
        <Nav>
            <figure>
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <ul>
                    <li>
                        <img src={Flag} alt="Bandeira do Brasil" />
                    </li>
                    <li>
                        <strong>Brasil</strong>
                    </li>
                    <hr />
                    <li>
                        <a href="#">Change</a>
                    </li>
                </ul>
            </figure>
            <ul id="nav-menu">
                <li><a href="/search">Encontre uma loja</a></li>
                <li><a href="#">Menu e nutrição</a></li>
                <li><a href="#">Catering</a></li>
                <li><a href="#">SUBS NBA</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">CONTATE-NOS</a></li>
                <li><a href="#">Sobre-Nós</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Franquia</a></li>
                <li><a href="#">PEÇA JÁ</a></li>
            </ul>
        </Nav>
    )
}