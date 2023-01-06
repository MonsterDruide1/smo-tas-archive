import { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles/Tag.module.css"
import AuthorEntry from "../data/AuthorEntry";
import Tag from './Tag'

export default function AuthorTag(props: { author: AuthorEntry }) {
    const element = (
        <Fragment>
            <div className={styles.authorTagImgWrapper}>
                <Image fill src={props.author.icon} alt={`Profile-icon of ${props.author.name}`} className={styles.authorTagImg}/>
            </div>
            <p className={styles.authorTagText}>{props.author.name}</p>
        </Fragment>
    );
    return <Tag content={element} />
}
