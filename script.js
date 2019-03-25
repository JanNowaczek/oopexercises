// 2. Napisz funkcję która liczy medianę przekazanych do niej liczb jako tablicy.

const median = (array) => {
    const sortedArray = array.concat().sort((a, b) => a - b)

    const halfIndex = Math.floor((sortedArray.length - 1) / 2)

    if (sortedArray.length % 2 === 0) { 
        return (sortedArray[halfIndex] + sortedArray[halfIndex + 1]) / 2
    } else { 
        return sortedArray[halfIndex]
    }

}
