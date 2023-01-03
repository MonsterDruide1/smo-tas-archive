import { KingdomType } from "./Kingdom"
import AuthorEntry from "./AuthorEntry";

export default interface TasEntry {
    id: number,
    name: string,
    kingdom: KingdomType,
    time: string,
    authors: AuthorEntry[],
    video: string,
    thumbnail: string,
    script: string,
    setup: string,
    version: string,
    notes: string,
    date: string,
}
