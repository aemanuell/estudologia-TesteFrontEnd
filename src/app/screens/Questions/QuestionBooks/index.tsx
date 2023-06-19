import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { BooksContainer, CardContainer, CardsBook, CheckBoxContainer, CheckboxInput, QuestionBooksContainer } from "./styles";

interface Book {
  id: number;
  title: string;
  questionAmount: number;
  answered: boolean;
  answers: [];
}

export function QuestionBooks(){
  const [books, setBooks] = useState<Book[]>([])

  async function loadBooks(){
    const response = await fetch('http://localhost:3000/QuestionBooks')
    const data = await response.json();

    setBooks(data);
    console.log(data)
  }

  useEffect(() => {
    loadBooks();
  }, [])

  return (
    <QuestionBooksContainer>
        <CheckBoxContainer>
          <CheckboxInput type="checkbox" />
          <label>Mostrar apenas questões não respondidas</label>
        </CheckBoxContainer>

        <BooksContainer>
          {books.map(book => {
            return (
              <CardsBook>
              <CardContainer>
                <strong>{book.title}</strong>
                <p>{book.questionAmount} questões</p>
                <span>{book.answered  ? "Respondida" : "Não respondida"}</span>
              </CardContainer>
              <Button textTitle="Resposta" disabled={book.answered}/>
            </CardsBook>
            )
          })}
        </BooksContainer>
    </QuestionBooksContainer>
  );
};
