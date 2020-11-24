import React from 'react';

function Color({ word, color1, color2 }){
    return(
      <div>
        <h1 style={{ color: color1, background: color2}}>The word is: {word}!</h1>
        </div>  
    );
}

export default Color;

// import React from 'react';

// would need the props in the app.js
// function Color({ props }){
//     return(
//       <div>
//         <p style={background: props.color1, color: props.color2}>The word is: {props.word}</p>
//         </div>  
//     );
// }

// export default Color;


