import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { IoCloseOutline } from 'react-icons/io5';

const Container = styled.footer`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: ${Colors.cls_rgba_black} 0px 1px 3px 0px, ${Colors.cls_rgba_black} 0px 0px 0px 1px;
    padding: 5% 5%;
    
    .footer-top{
        display: flex;
        width: 100%;
        align-items: baseline;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;

        ul{
            list-style: none;
            height: 100%;
        }
        strong{
            padding: 10px 0px;
            color: ${Colors.cls_gray};
        }
        li{
            padding: 5px 0px;
        }
        li, a{
            color: ${Colors.cls_gray};
            font-size: 12px;
        }
    }
    .footer-bottom{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 20px;

        strong, a{
            font-size: 12px;
            color: ${Colors.cls_gray};
        }
        a{
            padding: 10px;
            font-size: 14px;
            color: ${Colors.cls_green};
            font-weight: bold;
        }
        a:hover{
            opacity: 0.8;
        }
    }
    .cookies{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background-color: ${Colors.cls_white};
        z-index: 100;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
        p{
            color: ${Colors.cls_black};
            text-align: left;
            width: auto;
            font-size: 12px;
            width: 60%;
        }
        label{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: auto;
            height: auto;
        }
        a{
            padding: 10px;
            color: ${Colors.cls_green};
            font-size: 12px;
        }
        #accept{
            background-color: ${Colors.cls_green};
            color: ${Colors.cls_white};
        }
        #accept:hover{
            opacity: 0.8;
        }
        button{
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
        button:hover{
            opacity: 0.8;
        }
    }

    @media (max-width: 700px){
        .footer-top, .footer-bottom{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

export default function Footer({ cookies, setCookies }) {
    return (
        <Container>
            <section className="footer-top">
                <ul>
                    <strong>Gestão</strong>
                    <li><a href="#">Subway Partners</a></li>
                    <li><a href="#">Carreiras</a></li>
                </ul>
                <ul>
                    <strong>Social</strong>
                    <li><a href="#">Curta-nos no Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Foursquare</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">TikTok</a></li>
                </ul>
                <ul>
                    <strong>Gestão de perfil</strong>
                    <li><a href="#">Entre em contato conosco</a></li>
                </ul>
                <ul>
                    <strong>Jurídico</strong>
                    <li><a href="#">Declaração de privacidade</a></li>
                    <li><a href="#">Termos de uso</a></li>
                </ul>
                <ul>
                    <strong>Acessibilidade</strong>
                    <li><a href="#">Adobe PDF Reader</a></li>
                    <li><a href="#">Adobe Flash Plugin</a></li>
                </ul>
            </section>
            <section className="footer-bottom">
                <strong>SUBWAY® é uma marca registrada da Subway IP LLC.</strong>
                <strong>© 2021 Subway IP LLC.</strong>
                <strong>Todos os direitos reservados.</strong>
                <a href="#">Configurações de cookies</a>
            </section>
            {cookies && <div className="cookies">
                <p>
                    Ao clicar em "Aceitar todos os cookies", concorda com o armazenamento de cookies no
                    seu dispositivo para melhorar a navegação no site,
                    analisar a utilização do site e ajudar nas nossas iniciativas de marketing.
                </p>
                <label>
                    <a href="#">Definições de cookies</a>
                    <a href="#" id="accept" onClick={() => setCookies(false)}>Aceitar todos os cookies</a>
                    <button onClick={() => setCookies(false)}>
                        <IoCloseOutline size={30} color={Colors.cls_gray} />
                    </button>
                </label>
            </div>}
        </Container>
    )
}