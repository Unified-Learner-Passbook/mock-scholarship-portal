import React from 'react'

function Questions({ques, index, toggleQues}) {
  return (
    <div 
            className={"ques " + (ques.open ? 'open' : '')}
            key = {index}         
    >
            <div className="ques-prompt" onClick={() => toggleQues(index)}>
                  {ques.prompt}
            </div>
            <div className="ques-form">
                  {ques.form}
            </div>
    </div>
  )
}

export default Questions
