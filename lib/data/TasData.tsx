import tasJSON from "../../public/tas.json"
import TasEntry from "./TasEntry"
import { KingdomType } from "./Kingdom"
import AuthorData from "./AuthorData"

let TasData = tasJSON.map(entry => {
    return {
        id: entry.id,
        name: entry.name,
        kingdom: KingdomType[entry.kingdom.toUpperCase() as keyof typeof KingdomType],
        time: entry.time,
        authors: entry.authors.map(author => AuthorData.find(data => data.name === author) ?? {name:author, icon:"https://via.placeholder.com/48x48"}),
        video: entry.video,
        thumbnail: entry.thumbnail,
        script: entry.script,
        setup: entry.setup,
        version: entry.version,
        notes: entry.notes,
        date: entry.date,
    }
}) as TasEntry[]

export default TasData;
