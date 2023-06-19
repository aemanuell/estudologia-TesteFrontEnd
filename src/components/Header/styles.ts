import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 6.67375rem;
        height: 1.2025rem;
        margin: 2.3125rem auto 1rem auto;
    }
`

export const DividingLine = styled.h1`
    width: 77.1875rem;
    margin-left: 5.8125rem;
    margin-right: 7rem;
    border-bottom: 1px solid ${props => props.theme['gray-100']};
`;