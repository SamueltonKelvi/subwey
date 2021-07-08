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
        margin: 10% auto;
    }
    .offers{
        align-items: center;
        justify-content: space-evenly;
        background-color: ${Colors.cls_white};
    }
    .franchises{

    }
`;
export const Footer = styled.footer``;