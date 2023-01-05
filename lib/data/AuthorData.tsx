import authorsJSON from "../../public/authors.json"
import AuthorEntry from "./AuthorEntry"

let AuthorData = authorsJSON.map(entry => {
    return {
        // replacing spaces in names with &nbsp;
        name: entry.name.replace(" ", "\u00a0"),
        icon: entry.avatar
    }
}) as AuthorEntry[];
export default AuthorData;
