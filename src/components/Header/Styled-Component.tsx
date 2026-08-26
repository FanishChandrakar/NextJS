import { Color } from "@/utility";
import styled, { css } from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--headerColorHeight);
    background-color: var(--headerColor);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: ${Color.pickledwoodBlue} 0px 20px 30px -10px;
    padding: 0 5vw;
    z-index: 100;
`;
export const HeaderFix = styled.header`
    height: var(--headerColorHeight);
`;

/*  Toggle Switch  */
export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

/* Rounded sliders */
interface SliderProps {
    round?: boolean;
}
const isRound = ({ round }: SliderProps) =>
    round &&
    css`
        border-radius: 34px;

        &::before {
            border-radius: 50%;
        }

        &:hover::before {
            background-color: var(--primaryColor);
        }
    `;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--backgroundColor);
    box-shadow: 0 0 5px var(--backgroundColor);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--headerColor);
        -webkit-transition: 0.4s;
        transition: 0.4s;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    ${isRound}
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider}::before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;

export const SliderText = styled.span`
    flex: 1;
    text-align: center;
    font-size: 1.25rem;
`;
/*  End Toggle Switch  */
