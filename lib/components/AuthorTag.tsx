import { Fragment } from "react";
import styles from "../../styles/Tag.module.css"
import AuthorEntry from "../data/AuthorEntry";
import Tag from './Tag'

export default function AuthorTag(props: { author: AuthorEntry }) {
    const element = (
        <Fragment>
            <img src={props.author.icon} alt={`Profile-icon of ${props.author.name}`} className={styles.authorTagImg}/>
            <p>{props.author.name}</p>
        </Fragment>
    );
    return <Tag content={element} />
}
