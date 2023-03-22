import React, {useState} from "react";
import ReduxExamples from "./redux-examples";

const Assignment7 = () => {
 return(
   <>
     <h1>Assignment 7</h1>
     <ReduxExamples/>
   </>
 );
};
export default Assignment7;

// function Xyz() {
//   const [qwe, wer] = useState([123, 234, 345, 456, 567])
//   const ert = (rty) => {
//     const tyu = rty.filter(yui => yui != 365)
//     wer(tyu)
//   }
//   return(
//     <div>
//       <ul>
//         {qwe.map(uio => <li>{uio}</li>)}
//       </ul>
//       <button onClick={() => ert(qwe)}>BUTTON</button>
//     </div>
//   )
// }

// function Ewq({asd = [2, 4, 6, 8], sdf = [5]}) {
//   const [qwe, wer] = useState(asd)
//   const ewq = () => wer([sdf, ...qwe])
//   return(
//     <div>
//        <h1>{qwe}</h1>
//        <button onClick={ewq}>BUTTON</button>
//     </div>
//   )
// }
// export default Ewq

// export default Xyz;