import classNames from "classnames"
import styles from "../../styles/KingdomVisual.module.css"
import { KingdomType, getNiceName, getIcon } from "../data/Kingdom"
import Image from "next/image"

export interface Props {
    kingdom: KingdomType,
    className?: string,
    onClick?: (kingdom: KingdomType) => void,
}

export default function Kingdom(props: Props) {
    var alt_text = `Icon of ${props.kingdom}`
    return <span className={classNames(styles.item, props.className)}>
        <span className={styles.inner_item} style={!!props.onClick ? {zIndex: 2, cursor: "pointer"} : {}} onClick={!!props.onClick ? () => props.onClick?.(props.kingdom) : undefined}>
            <div className={styles.thumbnail_wrapper}>
                <Image fill className={styles.thumbnail} src={getIcon(props.kingdom)} alt={alt_text} />
            </div>
            <p className={styles.name}>{getNiceName(props.kingdom)}</p>
        </span>
    </span>
}
