import React from 'react';

const Button = () => {
  return (
    <button
      className="shadow-pink-500/10 hover:shadow-pink-500/40 bg-pink-500 rounded-lg py-3 px-6 text-xs font-bold text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      hello
    </button>
  );
};

export default Button;
