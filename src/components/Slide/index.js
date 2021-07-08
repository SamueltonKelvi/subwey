import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import BannerOne from '../../assets/banner-one.png';
import BannerTwo from '../../assets/banner-two.jpg';
import BannerTree from '../../assets/banner-tree.jpg';
import BannerFour from '../../assets/banner-four.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    img {
        background-image: url(${props => props.src});
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
    }
`;

export default function Slide() {
    return (
        <Carousel
            centerMode
            autoPlay
            infiniteLoop
            showThumbs={false}
            swipeable>
            <Container>
                <img src={BannerOne} alt="Banner 1" />
            </Container>
            <Container>
                <img src={BannerTwo} alt="Banner 2" />
            </Container>
            <Container>
                <img src={BannerTree} alt="Banner 3" />
            </Container>
            <Container>
                <img src={BannerFour} alt="Banner 4" />
            </Container>
        </Carousel>
    )
}