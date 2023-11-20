// import "./DropZone.css";
// import { cols, rows, size } from "../../Constants/Constants";
// import { useEffect, useState } from "react";
// import Winner from "../Winner/Winner";
// import ActiveMarble from "../ActiveMarble/ActiveMarble";

// const DropZone = () => {
//   const [turn, setTurn] = useState(1);
//   const [dropped, setDropped] = useState([]);
//   const [winner, setWinner] = useState(0);

//   const reset = () => {
//     setTurn(1);
//     setDropped([]);
//     setWinner(0);
//   };

//   const findWinner = () => {
//     const p1 = dropped.filter((d) => d.player === 1);

//     p1.forEach(({ x, y }) => {
//       if (
//         p1.find((m) => x === m.x + 1 && y === m.y) &&
//         p1.find((m) => x === m.x + 2 && y === m.y) &&
//         p1.find((m) => x === m.x + 3 && y === m.y)
//       )
//         setWinner(1);
//       if (
//         p1.find((m) => x === m.x && y === m.y + 1) &&
//         p1.find((m) => x === m.x && y === m.y + 2) &&
//         p1.find((m) => x === m.x && y === m.y + 3)
//       )
//         setWinner(1);
//       if (
//         p1.find((m) => x === m.x + 1 && y === m.y + 1) &&
//         p1.find((m) => x === m.x + 2 && y === m.y + 2) &&
//         p1.find((m) => x === m.x + 3 && y === m.y + 3)
//       )
//         setWinner(1);
//       if (
//         p1.find((m) => x === m.x + 1 && y === m.y - 1) &&
//         p1.find((m) => x === m.x + 2 && y === m.y - 2) &&
//         p1.find((m) => x === m.x + 3 && y === m.y - 3)
//       )
//         setWinner(1);
//     });

//     const p2 = dropped.filter((d) => d.player === 2);

//     p2.forEach(({ x, y }) => {
//       if (
//         p2.find((m) => x === m.x + 1 && y === m.y) &&
//         p2.find((m) => x === m.x + 2 && y === m.y) &&
//         p2.find((m) => x === m.x + 3 && y === m.y)
//       )
//         setWinner(2);
//       if (
//         p2.find((m) => x === m.x && y === m.y + 1) &&
//         p2.find((m) => x === m.x && y === m.y + 2) &&
//         p2.find((m) => x === m.x && y === m.y + 3)
//       )
//         setWinner(2);
//       if (
//         p2.find((m) => x === m.x + 1 && y === m.y + 1) &&
//         p2.find((m) => x === m.x + 2 && y === m.y + 2) &&
//         p2.find((m) => x === m.x + 3 && y === m.y + 3)
//       )
//         setWinner(2);
//       if (
//         p2.find((m) => x === m.x + 1 && y === m.y - 1) &&
//         p2.find((m) => x === m.x + 2 && y === m.y - 2) &&
//         p2.find((m) => x === m.x + 3 && y === m.y - 3)
//       )
//         setWinner(2);
//     });
//   };

//   useEffect(() => {
//     if (dropped.length === rows * cols) setWinner(-1);

//     findWinner();
//   }, [dropped.length]);

//   return (
//     <div>
//       <h1 className="main-heading">Connect Four Game</h1>
//       <div className="drop-zone">
//         {dropped.map((m, i) => (
//           <div
//             key={i}
//             className={`p${m.player}`}
//             style={{
//               transform: `translate(${m.y * size}px,${m.x * size + 150}px)`,
//             }}
//           ></div>
//         ))}
//         {winner ? (
//           <Winner winner={winner} reset={reset} />
//         ) : (
//           <ActiveMarble
//             dropped={dropped}
//             turn={turn}
//             setDropped={setDropped}
//             setTurn={setTurn}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DropZone;


import "./DropZone.css";
import { cols, rows, size } from "../../Constants/Constants";
import { useEffect, useState, useCallback } from "react";
import Winner from "../Winner/Winner";
import ActiveMarble from "../ActiveMarble/ActiveMarble";

const DropZone = () => {
  const [turn, setTurn] = useState(1);
  const [dropped, setDropped] = useState([]);
  const [winner, setWinner] = useState(0);

  const reset = () => {
    setTurn(1);
    setDropped([]);
    setWinner(0);
  };

  const findWinner = useCallback(() => {
    const p1 = dropped.filter((d) => d.player === 1);

    p1.forEach(({ x, y }) => {
      if (
        p1.find((m) => x === m.x + 1 && y === m.y) &&
        p1.find((m) => x === m.x + 2 && y === m.y) &&
        p1.find((m) => x === m.x + 3 && y === m.y)
      )
        setWinner(1);
      if (
        p1.find((m) => x === m.x && y === m.y + 1) &&
        p1.find((m) => x === m.x && y === m.y + 2) &&
        p1.find((m) => x === m.x && y === m.y + 3)
      )
        setWinner(1);
      if (
        p1.find((m) => x === m.x + 1 && y === m.y + 1) &&
        p1.find((m) => x === m.x + 2 && y === m.y + 2) &&
        p1.find((m) => x === m.x + 3 && y === m.y + 3)
      )
        setWinner(1);
      if (
        p1.find((m) => x === m.x + 1 && y === m.y - 1) &&
        p1.find((m) => x === m.x + 2 && y === m.y - 2) &&
        p1.find((m) => x === m.x + 3 && y === m.y - 3)
      )
        setWinner(1);
    });

    const p2 = dropped.filter((d) => d.player === 2);

    p2.forEach(({ x, y }) => {
      if (
        p2.find((m) => x === m.x + 1 && y === m.y) &&
        p2.find((m) => x === m.x + 2 && y === m.y) &&
        p2.find((m) => x === m.x + 3 && y === m.y)
      )
        setWinner(2);
      if (
        p2.find((m) => x === m.x && y === m.y + 1) &&
        p2.find((m) => x === m.x && y === m.y + 2) &&
        p2.find((m) => x === m.x && y === m.y + 3)
      )
        setWinner(2);
      if (
        p2.find((m) => x === m.x + 1 && y === m.y + 1) &&
        p2.find((m) => x === m.x + 2 && y === m.y + 2) &&
        p2.find((m) => x === m.x + 3 && y === m.y + 3)
      )
        setWinner(2);
      if (
        p2.find((m) => x === m.x + 1 && y === m.y - 1) &&
        p2.find((m) => x === m.x + 2 && y === m.y - 2) &&
        p2.find((m) => x === m.x + 3 && y === m.y - 3)
      )
        setWinner(2);
    });
  }, [dropped]);

  useEffect(() => {
    if (dropped.length === rows * cols) setWinner(-1);

    findWinner();
  }, [dropped.length, findWinner]);

  return (
    <div>
      <h1 className="main-heading">Connect Four Game</h1>
      <div className="drop-zone">
        {dropped.map((m, i) => (
          <div
            key={i}
            className={`p${m.player}`}
            style={{
              transform: `translate(${m.y * size}px,${m.x * size + 150}px)`,
            }}
          ></div>
        ))}
        {winner ? (
          <Winner winner={winner} reset={reset} />
        ) : (
          <ActiveMarble
            dropped={dropped}
            turn={turn}
            setDropped={setDropped}
            setTurn={setTurn}
          />
        )}
      </div>
    </div>
  );
};

export default DropZone;
