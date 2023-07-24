import React from 'react'

function Form() {
  return (
    <div className='simpleform'>
        <form />
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" />
    </div>
  )
}

export default Form
