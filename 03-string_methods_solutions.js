// 01
function length(text) {
    return text.length;
}

// 02
function toCase(text) {
    return text.toLowerCase() + '-' + text.toUpperCase();
}

// 03
function shortcut(s1, s2) {
    return s1[0] + s2[0];
}

// 04
function firstChar(text) {
    let trimmedText = text.trim();
    return trimmedText[0];
}

// 05
function indexOfIgnoreCase(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    return s1Lower.indexOf(s2Lower);
}

// 06
function firstWord(s) {
    let firstBlank = s.indexOf(' ');
    return s.substr(0, firstBlank);
}

// 07
function normalize(text) {
    return text.replace('-', '/')
}
// 08
function splitString(string) {
    return string.split(' ')
}

// 09
// the answer is string
// typeof 1 will return "number" and typeof "number" will return string.

// 10
function getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1)
}