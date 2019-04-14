export const wordsCount = (str) => str.trim().split(/\s+/).length;

export const getWords = (str) => {
    var list = str.trim().split(/\s+/);
    let words = {};
    words[Symbol.iterator] = () => {
        let current = 0;
        let stop = wordsCount(str) - 1;
        return {
            next() {
                if (current <= stop) {
                    return {
                        done: false,
                        value: list[current++]
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
    return words;
}