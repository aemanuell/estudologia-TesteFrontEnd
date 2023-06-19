import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { NavigationButtonsContainer, QuestionBookShowContainer } from "./styles";

interface Question {
  title: string;
  body: string;
}

export function QuestionBookShow(){
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleNextQuestion(){
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  function handlePreviousQuestion(){
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  async function loadQuestions(){
    const response = await fetch('http://localhost:3000/OneQuestion/1')
    const data = await response.json();

    setQuestions(data);
    console.log(data.answers[currentQuestionIndex].title);
    console.log(data.answers[currentQuestionIndex].body);
  }

  useEffect(() => {
    loadQuestions();
  }, [])

  return (
    <QuestionBookShowContainer>
      {/* <p>{}</p>
      <strong>{}</strong> */}
      {questions.map(question => {
        return(
          <>
             <p>{question.title}</p>
             <strong>{question.body}</strong>
          </>
        )
      })}
      <form>
        <textarea placeholder="Responda aqui"/>
      </form>
      <Button textTitle="Enviar Resposta"/>
      <NavigationButtonsContainer>
        <Button onClick={handlePreviousQuestion} textTitle="Pergunta anterior" disabled={true}/>
        <Button onClick={handleNextQuestion} textTitle="Próxima pergunta" disabled={false}/>
      </NavigationButtonsContainer>
      
    </QuestionBookShowContainer>

    // <div>
    //   <h1>Detalhes do caderno com a pergunta ativa</h1>
    //   <h2>Use esta url como endpoind da API: http://localhost:3000/api/question_books/[:ID].json</h2>
    //   <h2>Ex.: http://localhost:3000/api/question_books/1.json</h2>
    // </div>
  );
};
