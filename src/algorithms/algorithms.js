const algorithms = number => number > 1 ? number * algorithms(number - 1) : 1

export { algorithms }
