export const prettyPrint = (input) => {
    if(input.toUpperCase() === input) return input;
    let inputArr = input.split(/(?=[A-Z])/);
    inputArr[0] = inputArr[0].charAt(0).toUpperCase() + inputArr[0].slice(1);

    return inputArr.join(' ');
}