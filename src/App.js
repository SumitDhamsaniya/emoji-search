import React,{useEffect, useState} from 'react'
import EmojiData from './Emoji.json';

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1> Emoji Search</h1>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.name);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}

    </div>
  )
}

export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [datas, setData] = useState([])
//   const 

//   useEffect(() => {
//     fetch("https://reqres.in/api/users?page=2")

//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result.data);
//         }
//       )
  
//   }, [])
//   return (
//     <div>
//       {datas.map((dat) => {
//         <li>{dat.email}</li>
//       })}
//     </div>
//   )
// }

// export default App