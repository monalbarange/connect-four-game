import "./Winner.css";

const Winner = ({winner,reset}) => 
    <p>
        <span className="player-count">{
            winner === -1
            ?   'No player won!'
            :   `Player ${winner} won!`}
        </span>
        <br/>
        <br/>
        <button onClick={reset} className="play-btn">Play again?</button>
    </p>

export default Winner