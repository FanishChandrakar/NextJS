type RandomNumber = (n: number) => number;

const randomNumber: RandomNumber = (n) => {
    return Math.floor(Math.random() * n);
};
export default randomNumber;
