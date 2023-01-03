import React from "react"
import styles from "../../styles/Tag.module.css"

export interface Props<T extends JSX.Element> {
    content: T,
}

export default class Tag<T extends JSX.Element> extends React.Component<Props<T>>  {
    render() {
        return <span className={styles.tag} contentEditable={false}>{this.props.content}</span>
    }
}
