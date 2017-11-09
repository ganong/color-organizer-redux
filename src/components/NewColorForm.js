import React from 'react'


const NewColorForm = ({ onSubmit }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <form onSubmit={onSubmit}>
      <h4>Add New Color</h4>
      <input name="title" placeholder="Title" />
      <br />
      <input name="color" placeholder="Color" />
      <br />
      <button type="submit">Add New Color</button> 
    </form>
  </div>
)

export default NewColorForm
