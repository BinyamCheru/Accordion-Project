import Question from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Question key={question.key} {...question} />;
      })}
    </section>
  );
};
export default Questions;
