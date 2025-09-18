import { Circle, InnerCircle, CircleProps } from "./Styled-Component";

const PlayButton: React.FC<CircleProps> = (props) => {
    return (
        <Circle {...props}>
            <InnerCircle>{props.children}</InnerCircle>
        </Circle>
    );
};

export default PlayButton;
