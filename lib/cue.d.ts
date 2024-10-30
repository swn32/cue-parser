import { ICueSheet } from "./types";
/**
 * Parse function
 * @param filename Filename path to cue-sheet to be parsed
 * @return CUE-sheet information object
 */
export declare function parse(filename: string | Uint8Array): ICueSheet;
