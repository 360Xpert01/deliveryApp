// // CountContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CountContext = createContext();

// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(1);
//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// };

// export const useCount = () => useContext(CountContext);
