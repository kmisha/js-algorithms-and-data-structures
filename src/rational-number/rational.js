export function makeRational(num, demon) {
    const [normalizeNum, normalizeDenom] = normalize(num, demon)
    return new Map([
        ['num', normalizeNum],
        ['denom', normalizeDenom]
    ])
}

export function getNumber(rat) {
    return rat.get('num')
}

export function getDenom(rat) {
    return rat.get('denom')
}

export function getGCD(a, b) {
    return a % b ? getGCD(b, a % b) : Math.abs(b)
}

export function normalize(first, second) {
    const commonDivisor = getGCD(first, second)
    return [first / commonDivisor, second / commonDivisor]
}

export function add(first, second) {
    return makeRational(
        getNumber(first) * getDenom(second) + getNumber(second) * getDenom(first),
        getDenom(first) * getDenom(second)
    )
}

export function sub(first, second) {
    return makeRational(
        getNumber(first) * getDenom(second) - getNumber(second) * getDenom(first),
        getDenom(first) * getDenom(second)
    )
}

export function multi(first, second) {
    return makeRational(
        getNumber(first) * getNumber(second),
        getDenom(first) * getDenom(second)
    )
}

export function div(first, second) {
    return makeRational(
        getNumber(first) * getDenom(second),
        getDenom(first) * getNumber(second)
    )
}

export function ratToString(rat) {
    return `${getNumber(rat)}/${getDenom(rat)}`
}

