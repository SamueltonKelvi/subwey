import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 24rem;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    text-align: center;

    a{
        width: auto;
        height: auto;
        text-decoration: none;
        cursor: pointer;
    }
    figure, img {
        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
    }
    h5{
        font-size: 18px;
        font-weight: bold;
        color: ${Colors.cls_green};
        margin: 15px auto;
    }
    p{
        font-size: 16px;
        font-weight: normal;
        color: ${Colors.cls_gray};
        line-height: 25px;
        height: 25%;
    }
`;

export default function CardOffers({ image, title, description, onClick }) {
    return (
        <Container>
            <a onClick={onClick}>
                <figure>
                    <img src={image} alt="Images Cards" />
                </figure>
                <h5>{title}</h5>
            </a>
            <p>{description}</p>
        </Container>
    )
}