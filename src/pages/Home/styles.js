import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-self: center;
    width: 100%;

    .alert{
        width: 100%;
        padding: 20px;
        background-color: ${Colors.cls_green_ligth};
        text-align: center;
        
        a{
            text-decoration: none;
            color: ${Colors.cls_green};
            font-weight: bold;
        }
        a:hover{
            text-decoration: underline;
        }
    }
`;
export const Aside = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 10px;

    .offers, .franchises{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        margin: 5% auto;
    }
    .offers{
        align-items: center;
        justify-content: space-evenly;
    }
    .franchises{
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img{
            width: 60%;
            background-image: url(${props => props.src});
            background-repeat: no-repeat;
            background-size: cover;
        }
        #logo {
            text-align: center;
        }
        div{
            width: 50%;
            text-align: left;
        }
        h3, h5{
            font-weight: bold;
            color: ${Colors.cls_yellow}; 
        }
        h5{
            font-weight: normal;
            font-size: 30px;
            color: ${Colors.cls_yellow}; 
        }
        p, li, a{
            color: ${Colors.cls_gray}; 
            font-size: 18px;
            text-align: left;
        }
        ul{
            text-align: center;
            padding: 10px 0px;
        }
        li{
            margin: 5px auto;
        }
        a{
           font-weight: bold;
           font-size: 20px; 
        }
        button{
            margin: 10px 0px;
            padding: 10px;
            background: ${Colors.cls_yellow};
            color: ${Colors.cls_green};
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 20px;
            border: none;
            box-shadow: ${Colors.cls_rgba_black} 1.95px 1.95px 2.6px;
        }
        button:hover{
            opacity: 0.8;
        }
    }

    @media (max-width: 700px){
        .offers, .franchises{
            flex-direction: column;
            
            div{
                width: 100%;
                text-align: center;
                
                ul, li, a {
                    text-align: center;
                }
            }
        }
    }
`;
export const Footer = styled.footer`
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

    @media (max-width: 700px){
        .footer-top, .footer-bottom{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

`;