import styles from "../../styles/MenuEntryMobile.module.css"

import Image from "next/image"
import MenuEntry from "../data/MenuEntry"
import Kingdom from "./KingdomVisual"
import AuthorsList from "./AuthorsList"

export default function MenuEntryMobile(menuData: MenuEntry) {
    const data = menuData.entry;
    return <div className={styles.item}>
        <a href={`/smo/details/${menuData.index}`} className={styles.overlay_link}/>
        <p className={styles.name}>{data.name}</p>
        <div className={styles.middlerow}>
            <img className={styles.thumbnail} src={data.thumbnail} alt="thumbnail of TAS video"/>
            <br/>
            <div className={styles.rightside}>
                <div>
                    <p className={styles.version_helper}>Version: </p>
                    <p className={styles.version}>{data.version}</p>
                    <p className={styles.time_helper}>Time: </p>
                    <p className={styles.time}>{data.time}s</p>
                </div>
            </div>
        </div>
        <br/>
        <div className={styles.bottomrow}>
            <Kingdom kingdom={data.kingdom} className={styles.kingdom} onClick={menuData.onKingdomClick}/>
            <AuthorsList authors={data.authors} className={styles.author} onClick={menuData.onAuthorClick}/>
        </div>
    </div>
}
