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

        .search, .map{
            display: flex;
        }
        .search{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 5px 10px;

            .content-input, .content-icon {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            .content-input {
                width: 88%;
            }
            strong{
                width: 90%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: 1px solid ${Colors.cls_gray};
                padding: 0px 5px;
            }
            label{
                color: ${Colors.cls_gray};
                font-weight: normal;
            }
            input {
                padding: 10px;
                width: 100%;
                height: 40px;
                font-size: 18px;
                border: none;
            }
            .content-icon{
                width: auto;
            }
            a{
                display: flex;
                flex-direction: row;
                width: auto;
                cursor: pointer;
                text-decoration: none;   
            }
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                color: ${Colors.cls_green};
                margin-left: 5px;
            }

        }
        .map{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            
            .map-btn{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: row;
                width: 100%;
            }
            span{
                font-size: 16px;
                margin: auto 10px;
            }
            img {
                margin-top: 20px;
                width: 100%;
                background-image: url(${props => props.src});
                background-size: contain;
                background-position: 50% 50%;
            }
        }
    }

    @media (max-width: 700px){
        .offers, .content-input, .content-icon{ flex-direction: column; };
    }
`;