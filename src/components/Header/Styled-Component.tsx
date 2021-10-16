import { Color } from "@/utility";
import styled, { css } from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--headerHeight);
    background-color: var(--header);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0 5vw;
`;
export const HeaderFix = styled.header`
    height: var(--headerHeight);
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

        &:before {
            border-radius: 50%;
        }

        &:hover:before {
            background-color: var(--header);
        }
    `;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Color.malibuBlue};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${isRound}

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
        background-color: #4c408e;
    }

    &:focus + ${Slider} {
        box-shadow: 0 0 5px #4c408e;
    }

    &:checked + ${Slider}:before {
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
