import {
    Mode,
    Score,
    ScoreBoard,
    ScoreTitle,
    ScoreValue,
} from "./Styled-Component";

interface LeaderboardProps {
    score: number;
    advancedMode: boolean;
}
const Leaderboard: React.FC<LeaderboardProps> = ({ score, advancedMode }) => {
    const imagePath = advancedMode
        ? "/images/logo-bonus.svg"
        : "/images/logo.svg";
    return (
        <Score>
            <Mode src={imagePath} />
            <ScoreBoard>
                <ScoreTitle>Score</ScoreTitle>
                <ScoreValue>{score}</ScoreValue>
            </ScoreBoard>
        </Score>
    );
};

export default Leaderboard;
