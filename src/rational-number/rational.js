export function makeRational(num, demon) {
    return new Map([
        ['num', num],
        ['denum', denom]
    ])
}

export function getNumber(rat) {
    return rat.get('num')
}

export function getDenom(rat) {
    return rat.get('denom')
}

