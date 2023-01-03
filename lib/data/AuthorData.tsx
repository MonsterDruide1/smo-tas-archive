import authorsJSON from "../../public/authors.json"
import AuthorEntry from "./AuthorEntry"

let AuthorData = authorsJSON.map(entry => {
    return {
        name: entry.name,
        icon: entry.avatar
    }
}) as AuthorEntry[];
export default AuthorData;
