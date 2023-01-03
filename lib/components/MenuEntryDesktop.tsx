import styles from "../../styles/MenuEntryDesktop.module.css"

import Image from "next/image"
import MenuEntry from "../data/MenuEntry"
import Kingdom from "./KingdomVisual"
import AuthorsList from "./AuthorsList"

//FIXME change this: do not use name
export default function MenuEntryDesktop(menuData: MenuEntry) {
    const data = menuData.entry;
    return <div className={styles.item}>
        <a href={`/smo/details/${menuData.index}`} className={styles.overlay_link}/>
        <img className={styles.thumbnail} src={data.thumbnail} alt="thumbnail of TAS video" />
        <div className={styles.alltext}>
            <div className={styles.toprow}>
                <p className={styles.name}>{data.name}</p>
                <div className={styles.rightside}>
                    <div className={styles.version_wrapper}><p className={styles.version_helper}>Version: </p><p className={styles.version}>{data.version}</p></div>
                    <div className={styles.time_wrapper}><p className={styles.time_helper}>Time: </p><p className={styles.time}>{data.time}s</p></div>
                </div>
            </div>
            <br/>
            <div className={styles.bottomrow}>
                <Kingdom kingdom={data.kingdom} className={styles.kingdom} onClick={menuData.onKingdomClick}/>
                <AuthorsList authors={data.authors} className={styles.author} onClick={menuData.onAuthorClick}/>
            </div>
        </div>
    </div>
}
