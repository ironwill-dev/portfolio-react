import styled from "styled-components";

const Section = styled.section`
    padding: 40px 100px;
    min-height: 90vh;
    padding-top: 7%;
    background-color: {({bg, theme}) => bg || theme.colors.background};
`;

export default Section;