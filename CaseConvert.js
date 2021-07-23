class CaseConvert {

    #str;
    #pattern;

    static TYPE = {
        CAMEL_CASE: /([A-Z])/g,
        HYPHEN: /-(\w)/g,
        UNDERSCORE: /_(\w)/g,
        SENTENCE: /(\s)/g
    }

    constructor(text, type) {
        this.#str = text;
        this.#pattern = type;
    }

    toCamelCase() {
        return this.#str.replace(this.#pattern, (...result) => {
            return this.#camelCase(result.slice(1, -2)[0]);
        });
    }

    toHyphenCase() {
        return this.#str.replace(this.#pattern, (...result) => {
            return this.#hyphenCase(result.slice(1, -2)[0]);
        });
    }

    toUnderscore() {
        return this.#str.replace(this.#pattern, (...result) => {
            return this.#underScoreCase(result.slice(1, -2)[0]);
        });
    }

    toCapital() {
        return this.#capitalCase(this.#str);
    }

    toSentence() {
        const _str = this.#str.replace(this.#pattern, (...result) => {
            return this.#splitCase(result.slice(1, -2)[0]);
        });
        return this.#capitalCase(_str);;
    }

    #splitCase(text) {
        return ` ${text.toUpperCase()}`;
    }

    #hyphenCase(text) {
        return `-${text.toLowerCase()}`;
    }

    #camelCase(text) {
        return `${text.toUpperCase()}`;
    }

    #underScoreCase(text) {
        return `_${text.toLowerCase()}`;
    }

    #capitalCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
