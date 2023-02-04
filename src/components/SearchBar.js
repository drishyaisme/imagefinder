import { useState } from "react";


const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="pt-5 flex justify-center ">
      <form className="mb-6" onSubmit={handleFormSubmit}>
        <input className="p-1 border-[1px] border-gray-300 rounded-lg" value={term} onChange={handleChange} placeholder="Search..." />
      </form>
    </div>
  )
}

export default SearchBar