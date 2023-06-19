import styled from "styled-components";

export const QuestionBooksContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 16.6875rem;
    margin-top: 2.25rem;

    label {
        font-size: 0.75rem;
        color: ${props => props.theme['black']};
        font-family: 'Inter';
    }
`

export const CheckboxInput = styled.input`
  appearance: inherit;
  width: 0.9375rem;
  height: 0.9375rem;
  border: transparent;
  border-radius: 3px;
  background-color: ${props => props.theme['gray-100']};

  &:checked {
    background-color: ${props => props.theme['blue-900']};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9'%3E%3Cpath d='M10.293 0.293a1 1 0 0 1 1.414 1.414L4 8.414 0.293 4.707a1 1 0 1 1 1.414-1.414L4 5.586l5.293-5.293a1 1 0 0 1 1.414 0z' fill='%23fff'/%3E%3C/svg%3E");
  }
`;

export const BooksContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;

    width: 41.1875rem;
    height: 9.375rem;
    margin-top: 2.375rem;
`

export const CardsBook = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 12.4375rem;
    margin-right: 1.4375rem;
    border: 1px solid ${props => props.theme['gray-100']};
    height: 9.375rem;
`
export const CardContainer = styled.div`
    width: 11.1875rem;
    height: 5.3125rem;

    strong {
        width: 11.1875rem;
        height: 0.9375rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 0.9375rem;

        color: ${props => props.theme['black']};
    }

    p {
        width: 4.3125rem;
        height: 0.9375rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;

        margin-top: 0.625rem;
        margin-bottom: 1.25rem;
        
        color: ${props => props.theme['black']};
    }

    span {
        width: 4.25rem;
        height: 0.9375rem;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;

        margin-left: 0.625rem;

        color: ${props => props.theme['black']};
    }
`