import { useNavigate } from "react-router-dom";

export function PlayersPage() {
    const navigate = useNavigate();

  return (
    <div>
      <div>Fill the players details :</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/game", {
            state: {
              player1: e.target.children[0].value,
              player2: e.target.children[1].value,
            },
          });
        }}
      >
        <input type="text" placeholder="Player 1" />
        <input type="text" placeholder="Player 2" />
        <button>Start Game</button>
      </form>
    </div>
  );
}
