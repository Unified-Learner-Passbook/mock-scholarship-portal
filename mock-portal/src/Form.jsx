import React from 'react'

function Form() {
  return (
    <div className='simpleform'>
        <form />
            <label for="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" />
    </div>
  )
}

export default Form