import styles from "../../styles/Tag.module.css"
import Tag from './Tag'
import Kingdom from './KingdomVisual'
import { KingdomType } from '../data/Kingdom'

export default function KingdomTag(props: {kingdom: KingdomType, onClick?: (kingdom: KingdomType) => void}) {
    const element = Kingdom({kingdom: props.kingdom, className: styles.kingdomTag, onClick: props.onClick});
    return <Tag content={element}/>
}
