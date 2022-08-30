import React from 'react';

import jsonData from "./politiche_2022.json";

const params: any = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop as string),
});

function App() {
  let item = null;
  if(params.id_dep) {
    item = jsonData.find((el) => el.id_dep == params.id_dep);
  } else {
    item = jsonData[Math.floor(Math.random()*jsonData.length)];
  }

  if(!item) {
    return <p>ooopps....</p>
  }

  return (
    <>
      <img src={`./logos/${item.f_contr}`} alt=""/>

      <p>{item.partito}</p>
      {item.nome_c && (
          <p><span>con a capo:</span>&nbsp;{item.nome_c} {item.cogn_c}</p>
      )}
      <p className="permalink">
        <a href={`?id_dep=${item.id_dep}`}>permalink</a>
      </p>
    </>
  );
}

export default App;
