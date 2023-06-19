import styled from "styled-components";

export const QuestionBookShowContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 33.8rem;
    height: 21.3125rem;
    margin:5rem 27.15625rem 0 27.15625rem;

    p {
        margin-left: 0.5rem;
        margin-bottom: 0.75rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        color: ${props => props.theme['black']};
    }

    strong {
        margin-left: 0.5rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        color: ${props => props.theme['black']};
    }

    textarea {
        width: 32.9375rem;
        height: 7.6875rem;
        margin: 1.625rem 0 0 0.0625rem;

        background: ${props => props.theme['gray-100']};
        border: 0;
        border-radius: 0.3125rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        resize: none;

        &::placeholder {
            color: ${props => props.theme['black']};
            font-weight: 400;
            opacity: 0.4;
            padding-top: 0.625rem;
            padding-left: 0.625rem;
        }
    }

    Button {
        margin-bottom: 1.625rem;
        margin-top: 0.625rem;
    }
`

export const NavigationButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 32.9375rem;
    border-top:1px solid ${props => props.theme['black']};
    Button {
        margin-top: 2.3125rem;
    }
`