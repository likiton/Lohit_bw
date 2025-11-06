import React, { FC } from 'react';

const Logo: FC = () => {
  return (
    <a href="#home" className="text-2xl font-extrabold text-white tracking-widest cursor-pointer hover:text-indigo-300 transition-colors">
      <div>
        Avyukta<span className="text-indigo-400">Boating</span>
      </div>
      <span className="text-indigo-200 text-sm font-normal">Honnavar</span>
      
    </a>
  );
};
export default Logo;
