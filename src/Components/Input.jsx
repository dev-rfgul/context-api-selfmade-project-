import React, { useState } from "react";

const Input = ({ inputValue, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    alert(inputValue);
  };

  return (
    <div className=" ">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=" Change card title"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
