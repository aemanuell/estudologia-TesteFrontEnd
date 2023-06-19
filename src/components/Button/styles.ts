import styled from "styled-components";

export interface ButtonProps {
    disabled?: boolean;
}

export const ButtonCard = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    width: 11.125rem;
    height: 2.1875rem;
    padding: 0.625rem;
    border-radius: 0.3125rem;
    border: transparent;
    background-color: ${props => (props.disabled ? props.theme['green-100'] : props.theme['green-500'])};
    color: ${props => props.theme['white']};
    cursor: pointer;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;

    transition: background-color 0.1s;
`