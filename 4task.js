const input = [4, 8, 2, 9, 4, 6, 5, 1, 7, 4]
const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomElement(input))