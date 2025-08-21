import styled from "styled-components";

const HeroSection = styled.section`
    padding-top: 0px;
    margin-bottom: 20px;
    margin-left: 100px;
    margin-right: 100px;
    min-height: 90vh;
    background-color: {({bg, theme}) => bg || theme.colors.background};
`;

export default HeroSection;