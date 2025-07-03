
import './App.css'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

const gradients = [
  "from-green-500 to-indigo-600",
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-yellow-400 to-red-500",
  "from-rose-400 to-purple-500",
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [bgGradient, setBgGradient] = useState(gradients[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setQuote(quotes[randomIndex]);
    setBgGradient(randomGradient);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgGradient} p-4 transition-all duration-700`}>
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full text-center space-y-8">
        {/* ✨ Gradient & Animated Heading */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          ✨ Inspiring Quote Generator ✨
        </motion.h1>

        {/* Quote with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={quote.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 italic">"{quote.text}"</p>
            <h4 className="text-lg text-gray-600">- {quote.author}</h4>
          </motion.div>
        </AnimatePresence>

        {/* Generate Button */}
        <button
          onClick={generateQuote}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Generate New Quote
        </button>
      </div>
    </div>
  );
}
;


export default App;


//////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [quote, setQuote] = useState({ content: '', author: '' });
//   const [loading, setLoading] = useState(true);

//   const mansi = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://favqs.com/api/qotd');
//       const data = await response.json();
//       console.log(data, 'dattttt');
//       setQuote({ content: data.quote.body, author: data.quote.author });
//     } catch (error) {
//       console.log("Error fetching quote", error);
//       setQuote({ content: "Failed to fetch quote", author: "" });
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     mansi();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Random Quotes Generator</h1>
//       <div>
//         {loading ? (
//           <p>Loading.....</p>
//         ) : (
//           <>
//             <p>'{quote.content}'</p>
//             <h4>{quote.author}</h4>
//           </>
//         )}
//         <button onClick={mansi}>Generate new quote</button>
//       </div>
//     </div>
//   );
// }

// export default App;
