import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Button } from '../../components';
import { IoCaretDownSharp } from 'react-icons/io5';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

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

    .menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
        list-style: none; 
    }
    .menu li{ position: relative; float: left; }
    .menu li a{
        color: ${Colors.cls_gray}; 
        text-decoration:none; 
        padding: 5px 10px; 
        display: block;
        font-weight: bold;
        transition: all 0.4s;
    }
    .menu li a:hover{ background: ${Colors.cls_green}; color:#fff; }
    .menu ul{
        display: none;
        position: absolute; 
        top: 30px; 
        left: 0px;
        right: 0px;
        width: 400px;
        height: 400px;
        border: 2px solid ${Colors.cls_white};
        z-index: 100;
        transition: all 0.4s;
        background-color: ${Colors.cls_white}; 
    }
    .menu li:hover ul, .menu li.over ul{display:block;}
    .menu li ul li{ display:block; }

    .store, .store-content, .store-about{ margin: 10px 5px; font-weight: normal; }
    .store{ color: ${Colors.cls_green}; }
    .store-content{
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            height: 40px;
            font-size: 16px;
            border: 1px solid ${Colors.cls_gray};
            width: 100%;
        }
    }
    .store-about{
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: 100%;
        padding: 10px;
        background-color: ${Colors.cls_green};
        color: ${Colors.cls_white};
        
        h4{ font-weight: normal; }
    }

    .nutrition, .catering, .social, .content { 
        display: flex;
        align-items: baseline;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 10px;
    }
    .nutrition-content{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50%;
        text-align: left;
    }
    h3{ color: ${Colors.cls_green}; margin-bottom: 10px; }
    .nutrition-content-li { border-bottom: 0.2px dashed ${Colors.cls_gray}; }
    a{ font-weight: normal; }

    .catering{
        flex-direction: column;

        li {
            width: 50%;
        }
    }

    .social{
        flex-direction: column;

        li{
            width: 50%;
        }
    }

    .content{
        flex-direction: column;
        
        li{
            width: 100%;
        }
    }

    @media (max-width: 700px){
       
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
            <ul class="menu">
                <li><a href="#">Encontre uma loja<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <h3 className="store">Localizando</h3>
                        <div className="store-content">
                            <input placeholder="Digite aqui..." />
                            <Button name="IR" />
                        </div>
                        <div className="store-about"><h4>37.440 RESTAURANTES SUBWAY® EM 104 PAÍSES</h4></div>
                    </ul>
                </li>
                <li><a href="#">Menu e nutrição<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="nutrition">
                            <div className="nutrition-content">
                                <h3>Menu</h3>
                                <li className="nutrition-content-li"><a href="#">Todos os sanduíches</a></li>
                                <li className="nutrition-content-li"><a href="#">Pop Subs</a></li>
                                <li className="nutrition-content-li"><a href="#">Pizza</a></li>
                                <li className="nutrition-content-li"><a href="#">Saladas</a></li>
                                <li className="nutrition-content-li"><a href="#">Acomp, Bebidas e Extras</a></li>
                                <li className="nutrition-content-li"><a href="#">Pães e Recheios</a></li>
                                <li className="nutrition-content-li"><a href="#">Como pedir</a></li>
                                <li className="nutrition-content-li"><a href="#">Promoções</a></li>
                            </div>
                            <div className="nutrition-content">
                                <h3>Nutrição</h3>
                                <li className="nutrition-content-li"><a href="#">Perguntas sobre o menu e nutrição</a></li>
                                <li className="nutrition-content-li"><a href="#">Informação nutricional</a></li>
                            </div>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>Faça já seu pedido</h4></div>
                    </ul>
                </li>
                <li><a href="#">Catering<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="catering">
                            <h3>Catering SUBWAY®</h3>
                            <li className="nutrition-content-li"><a href="#">Menu do serviço de catering</a></li>
                            <li className="nutrition-content-li"><a href="#">Planejamento do Serviço de Catering</a></li>
                            <li className="nutrition-content-li"><a href="#">Perguntas frequentes do serviço de Catering</a></li>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>FAÇA DE SEU PRÓXIMO EVENTO UM SUCESSO</h4></div>
                    </ul>
                </li>
                <li><a href="#">SUBS NBA</a></li>
                <li><a href="#">Social <IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="social">
                            <h3>Social</h3>
                            <li className="nutrition-content-li"><a href="#">
                                <FaFacebookSquare size={25} color="#3b5998" />
                                Facebook
                            </a></li>
                            <li className="nutrition-content-li"><a href="#">
                                <FaTwitter size={25} color="#00acee" />
                                Twitter
                            </a></li>
                            <li className="nutrition-content-li"><a href="#">
                                <FaYoutube size={25} color="#c4302b" />
                                YouTube
                            </a></li>
                            <li className="nutrition-content-li"><a href="#">
                                <FaInstagram size={25} color="#3f729b" />
                                Instagram
                            </a></li>
                            <li className="nutrition-content-li"><a href="#">
                                <IoLogoTiktok size={25} color="#000000" />
                                TikTok
                            </a></li>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>Keep discovering the latest news</h4></div>
                    </ul>
                </li>
                <li><a href="#">CONTATE-NOS</a></li>
                <li><a href="#">Sobre-Nós<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="content">
                            <h3>Sobre SUBWAY®</h3>
                            <li className="nutrition-content-li"><a href="#">História</a></li>
                            <li className="nutrition-content-li"><a href="#">Explore nosso mundo</a></li>
                            <li className="nutrition-content-li"><a href="#">Responsabilidade Social</a></li>
                            <li className="nutrition-content-li"><a href="#">Perguntas frequentes sobre a SUBWAY®</a></li>
                            <li className="nutrition-content-li"><a href="#">Entre em contato conosco</a></li>
                            <li className="nutrition-content-li"><a href="#">O Subway® Escuta — Perguntas frequentes</a></li>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>SUBWAY - EAT FRESH, LIVE GREEN</h4></div>
                    </ul>
                </li>
                <li><a href="#">Carreiras<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="content">
                            <h3>Carreiras SUBWAY</h3>
                            <li className="nutrition-content-li"><a href="#">Empregos na sede</a></li>
                            <li className="nutrition-content-li"><a href="#">Empregos em restaurantes locais</a></li>
                            <li className="nutrition-content-li"><a href="#">Veja nossas oportunidades de Franquia</a></li>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>GRANDES PESSOAS, GRANDES SANDUÍCHES</h4></div>
                    </ul>
                </li>
                <li><a href="#">Franquia<IoCaretDownSharp size={15} color={Colors.cls_gray} /></a>
                    <ul>
                        <div className="content">
                            <h3>Seja dono de uma franquia</h3>
                            <li className="nutrition-content-li"><a href="#">Por que escolher a SUBWAY®?</a></li>
                            <li className="nutrition-content-li"><a href="#">Próximas etapas</a></li>
                            <li className="nutrition-content-li"><a href="#">Candidatar-se a proprietário</a></li>
                            <li className="nutrition-content-li"><a href="#">Participar de um seminário</a></li>
                            <li className="nutrition-content-li"><a href="#">Registre seu interesse</a></li>
                            <li className="nutrition-content-li"><a href="#">Perguntas frequentes sobre franquias</a></li>
                            <li className="nutrition-content-li"><a href="#">Contatar o departamento de vendas de franquia</a></li>
                            <li className="nutrition-content-li"><a href="#">Enviar um ponto comercial</a></li>
                        </div>
                        <div className="store-about"><h4 style={{ textAlign: 'center' }}>GRANDES PESSOAS, GRANDES SANDUÍCHES</h4></div>
                    </ul>
                </li>
                <li><a href="#">PEÇA JÁ</a></li>
            </ul>
        </Nav>
    )
}