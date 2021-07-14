import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 40px;
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 5px 10px;
    margin: auto 10px;
    font-weight: bold;
    color: ${Colors.cls_white};
    background-color: ${Colors.cls_green};
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`;

export default function Button({ name, onClick }) {
    return (
        <Container onClick={onClick}>
            {name}
        </Container>
    )
}