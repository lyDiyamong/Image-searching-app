import React from "react";
import { useState } from "react";
import '../index.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault() // prevent form from refresh the page when press enter key
    {/* onSubmit is a function that communicate with parent component(App)
    so we can give an argument through child and it will run back to parent compo */}
    onSubmit(term)
  }
// onChange event fires update state(term)
  const handleChange = (event) => {
    setTerm(event.target.value);
  }


  return (
    <div className=" px-3 py-2 ml-3 border border-slate-300 ">
      <form className="flex flex-col " onSubmit={handleFormSubmit}>
        {/* pass state to the input as the value prop */ }
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} className="border border-gray-400 rounded-lg" type="text" />
      </form>
      {/* when event in the app file happening it calls to here */}
    </div>
  );
}

export default SearchBar;
