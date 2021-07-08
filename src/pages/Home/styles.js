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

export const Header = styled.header``;
export const Footer = styled.footer``;