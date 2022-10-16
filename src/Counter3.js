import React, { useState, useEffect } from "react";

const Counter3 = () => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState("hello");
  
  //partie useeffect

  useEffect(() => {
    console.log(` this ${product} a thing !one time   `);
  });

  //ici quand on veut afficher selon l'update d'un des state
  useEffect(() => {
   console.log(` this ${product} a thing ! everyupdate  `);
  },[product]);

  //ici quand on veut des le 1er render de la page
  useEffect(() => {
  console.log(` this ${product} a thing ! im the first thing  `);
  },[]);
  //partie function
  

 


  const add = () => {
    setCounter(counter + 1);
  };

  const moin = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = ()=> {
    setCounter = 0
  }

  // function product

  return (
    <div>
      <h1>counter hooks </h1>
      <h1>this counter is : {counter} </h1>
      <button onClick={() => add()}>add</button>
      <button onClick={() => moin()}>moins</button>
      <button onClick={() => moin()}>reset</button>

      <input type="text" onChange={(e) => setProduct(e.target.value)} />
    </div>
  );
};

export default Counter3;
