export function calc(a: string) {
    if (a === "") {
        return 0
    }
    let currentString = a
    let delimiter = ""
    if (currentString.startsWith("//")) {
        if (currentString.includes("[") && currentString.includes("]")) {
            while (currentString.includes("[")) {
                const endOfDelimiter = currentString.indexOf("]")
                const startOfDelimiter = currentString.indexOf("[")
                delimiter += currentString.substring(startOfDelimiter + 1, endOfDelimiter)
                currentString = currentString.substring(endOfDelimiter + 1)
            }
        } else {
            delimiter = a.at(2) ?? ""
            currentString = currentString.substring(3)
        }
    }

    const regex = new RegExp(`[\n,${delimiter}]`)
    const splitString = currentString.split(regex).map(Number)

    if (splitString.some(number => number < 0)) {
        throw new Error("negatives not allowed")
    }
    return splitString.filter(number => number <= 1000).reduce((acc, curr) => acc + curr)
}
