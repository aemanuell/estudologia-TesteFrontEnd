import styled from "styled-components";

export const QuestionBookThanksContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 6.6875rem;

    strong {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.3125rem;
        line-height: 1.5625rem;

        
        margin-left: 26.8125rem;
        
        color: ${props => props.theme['black']};
    }

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        margin-left: 26.6875rem;
        margin-top: 1.625rem;
        margin-bottom: 0.5rem;
        color: ${props => props.theme['black']};
    }

    h6, p {
        width: 36.1875rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;
        margin-left: 26.6875rem;
        margin-top: 1.025rem;
        color: ${props => props.theme['black']};
    }

    p {
        padding-bottom: 2.375rem;
        margin-bottom: 1.375rem;
        border-bottom: 1px solid ${props => props.theme['black']};
    }
`