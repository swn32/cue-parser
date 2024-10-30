import { ITime, ICueSheet, IFile, ITrack } from "./types";
export declare class Track implements ITrack {
    type: string;
    title: string;
    flags: string[];
    isrc: string;
    performer: string;
    songWriter: string;
    pregap: ITime;
    postgap: ITime;
    indexes: Index[];
    rem: string[];
    number: number;
    constructor(_number: number, type?: string);
}
export declare class File implements IFile {
    name: string;
    type: string;
    tracks: Track[];
}
export declare class Index {
    time: Time;
    number: number;
    constructor(_number?: number, time?: Time);
}
export declare class Time {
    min: number;
    sec: number;
    frame: number;
    constructor(min?: number, sec?: number, frame?: number);
}
export declare class CueSheet implements ICueSheet {
    catalog: string;
    cdTextFile: string;
    files: File[];
    performer: string;
    songWriter: string;
    title: string;
    rem: string[];
    encoding: string;
    private track;
    getCurrentFile(): File;
    getCurrentTrack(): Track;
    newFile(): File;
    newTrack(_number: number, type: string): CueSheet;
}
