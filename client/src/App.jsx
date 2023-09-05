import React, { useState } from 'react';
import Header from './Header';
import Questions from './Questions';
import Forms from './Form';
import CustomButton from './CustomButton';

function App() {
  const [questions, setquestions] = useState([
    {
      prompt: "Student's Personal Details",
      form: <Forms />,
      open: true
    },
    {
      prompt: "Education Details",
      form: <Forms />,
      open: false
    },
    {
      prompt: "Education Details (Powered By AVSAR)",
      form: <CustomButton />,
      open: false
    },
    {
      prompt: "Family Members",
      form: <Forms />,
      open: false
    },
    {
      prompt: "Documents",
      form: <Forms />,
      open: false
    },
    {
      prompt: "More about yourself",
      form: <Forms />,
      open: false
    }
  ]);

  const toggleQues = (index) => {
    setquestions(questions.map((ques, i) => {
      if (i === index) {
        ques.open = !ques.open;
      } else {
        ques.open = false;
      }
      return ques;
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="questions">
        {questions.map((ques, i) => (
          <Questions key={i} ques={ques} index={i} toggleQues={toggleQues} />
        ))}
      </div>
    </div>
  );
}

export default App;
