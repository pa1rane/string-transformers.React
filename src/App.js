import React, { useState } from 'react';
import Transform from './Transform';
  
const App = () => {
  
 const [input, setInput] = useState("Pavan Rane");
    
 const handleInput = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
 }

 const toCamelCase = (txt) => {
  const text = txt.split(" ");
  const firstWord = text[0].toLowerCase();
  const remainingWords = text.slice(1);
  const capFirstChr = remainingWords.map((word) => word ? word[0].toUpperCase() + word.slice(1).toLowerCase(): "");
   return firstWord + capFirstChr.join("");
 }

 const toPascalCase = (txt) => {
  return txt.split(" ").map((t) => t ? t[0].toUpperCase() + t.slice(1).toLowerCase() : "").join("");
 }
 
const toSnakeCase = (txt) =>{
  return txt.split(" ").join("_");
}

const toKebabCase = (txt) =>{
  return txt.split(" ").join("-");
}

const trim = (txt) =>{
  return txt.trim().split(" ").join("");
}

  return (
    <>
      <h1>String Transformers</h1>
      <input type="text" value={input} onChange={handleInput}/>
      <br />
      <Transform heading="Lower Case" text={input.toLowerCase()}/>
      <Transform heading="Upper Case" text={input.toUpperCase()}/>
      <Transform heading="Camel Case" text={toCamelCase(input)}/>
      <Transform heading="Pascal Case" text={toPascalCase(input)}/>
      <Transform heading="Snake Case" text={toSnakeCase(input)}/>
      <Transform heading="Kebab Case" text={toKebabCase(input)}/>
      <Transform heading="Trim" text={trim(input)}/>
    </>
  )
}
   
export default App;
