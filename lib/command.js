"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommand = void 0;
/**
 * parse one line of cue sheet, and return COMMAND
 * and all parameters
 */
function parseCommand(line) {
    const matcher = /^([A-Z]+)\s+(.*)$/;
    let result;
    line = line.trim();
    result = line.match(matcher);
    if (!result) {
        throw new Error('Not a command: ' + line);
    }
    const command = result[1];
    if (!command) {
        throw new Error('Can not parse command from ' + line);
    }
    const params = parseParams(result[2]);
    if (!params) {
        throw new Error('Can not parse parameters from ' + line);
    }
    return {
        command,
        params
    };
}
exports.parseCommand = parseCommand;
function parseParams(lineString) {
    let params = [];
    if (lineString[0] === '"') {
        const quoteIndex = lineString.indexOf('"', 1);
        params.push(lineString.substring(1, quoteIndex));
        lineString = lineString.substring(quoteIndex + 1).trim();
    }
    if (lineString !== '') {
        params = params.concat(lineString.split(' '));
    }
    return params;
}
//# sourceMappingURL=command.js.map