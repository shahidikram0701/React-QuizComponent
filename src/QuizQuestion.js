import React from "react";
import { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* {this.props.quiz_question.answer_options.map(option => (
              <li> {option} </li>
            ))} */}
            <QuizQuestionButton
              button_text={this.props.quiz_question.answer_options[0]}
            />
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
