import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { QuestionBookShow } from "../screens/Questions/QuestionBookShow";
import { QuestionBookThanks } from "../screens/Questions/QuestionBookThanks";
import { QuestionBooks } from "../screens/Questions/QuestionBooks";

// import Notfound from "../screens/Notfound";


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<QuestionBooks/>}/>
        <Route path="/cadernos-de-questoes" element={<QuestionBookShow/>}/>
        <Route path="/cadernos-de-questoes/:id" element={<QuestionBookShow/>}/>
        <Route path="/cadernos-de-questoes/:id/obrigado" element={<QuestionBookThanks/>}/>
        {/* <Notfound default /> */}
      </Route>
    </Routes>
  )
}
