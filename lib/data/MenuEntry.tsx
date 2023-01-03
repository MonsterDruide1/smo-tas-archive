import { KingdomType } from "./Kingdom";
import AuthorEntry from "./AuthorEntry";
import TasEntry from "./TasEntry";

export default interface MenuEntry {
    index: number,
    entry: TasEntry,
    onAuthorClick: (author: AuthorEntry) => void,
    onKingdomClick: (kingdom: KingdomType) => void,
}
