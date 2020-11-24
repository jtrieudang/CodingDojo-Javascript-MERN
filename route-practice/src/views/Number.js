// import React from 'react';
// // not reading as a integer
// function Number({ id }) {

//   return (
//     <div>
//       <h1>The number is {id}!</h1>
//     </div>
//   );
// }

// export default Number;

import React from 'react';

function Number(props) {
    const turnItIntoInt = 
    parseInt(props.id);

    return(
      //: = true / false
        isNaN(+turnItIntoInt)? <h1> The word is: { props.id } </h1>: <h1> The number is: { props.id } </h1 >
    )

}
export default Number;


