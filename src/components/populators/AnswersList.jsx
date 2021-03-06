import React from 'react';
import { useQuestions } from './QuestionProvider';
import Answers from './Answers';

const AnswersList = () => {

  
  const questions = useQuestions();
  // const answersElements = answers.map((question) => (
  //   <li key={question}>
  //     <Answers {...Answers} />
  //   </li>
  // ));

  return <Answers {...questions} />;
};

export default AnswersList;
