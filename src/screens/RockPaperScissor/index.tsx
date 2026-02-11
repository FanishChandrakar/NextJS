import type { NextPage } from "next";
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import Play from "./Play";
import { Button, Container, Game, Options } from "./Styled-Component";

const RockPaperScissor: NextPage = () => {
    const [advancedMode, setAdvancedMode] = useState(false);
    // const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [score, setScore] = useState(0);

    return (
        <Container>
            <Leaderboard {...{ score, advancedMode }} />
            <Game>
                {selected >= 0 ? (
                    <></>
                ) : (
                    <Play {...{ advancedMode, setSelected }} />
                )}
            </Game>
            <Options>
                <Button onClick={() => setAdvancedMode(!advancedMode)}>
                    {advancedMode ? "Normal" : "Advanced"} Mode
                </Button>
                <Button onClick={() => setScore(score + 1)}>Rules</Button>
            </Options>
        </Container>
    );
};

export default RockPaperScissor;
