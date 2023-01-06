import classNames from "classnames"
import styles from "../../styles/AuthorsList.module.css"

import Image from "next/image"
import AuthorEntry from "../data/AuthorEntry"

export interface Props {
    authors: AuthorEntry[],
    className?: string,
    onClick?: (author: AuthorEntry) => void
}

export default function AuthorsList(props: Props) {
    const clickable = !!props.onClick;
    const singular = props.authors.length == 1;
    var alt_text = `Profile-icon of ${props.authors[0].name}`
    return <div className={classNames(styles.item, props.className)}>
        <span className={styles.inner_item} style={(clickable && singular) ? {zIndex: 1, cursor: "pointer"} : {}} onClick={(clickable && singular) ? ()=>props.onClick?.(props.authors[0]) : undefined}>
            <p className={styles.names}>{props.authors.map(author => author.name).join(", ")}</p>
            <div className={styles.thumbnails}>
                {props.authors.map(author => (
                    <Image key={author.name} width={32} height={32} className={styles.thumbnail} style={clickable ? {zIndex: 2, cursor: "pointer"} : {}} src={author.icon} alt={alt_text} onClick={clickable ? () => props.onClick?.(author) : undefined}/>
                ))}
            </div>
        </span>
    </div>
}
