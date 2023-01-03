import Link from "next/link"
import styles from "../../styles/Navbar.module.css"

export interface Props {
    current: string,
    onLogoClick?: () => void,
}

export default function Navbar(props: Props) {
    return <div className={styles.navbar}>
        <Link href="/">
            <div style={{width: "100%", height: "100%"}} onClick={!!props.onLogoClick ? props.onLogoClick : undefined}>
                <img src={"https://cdn.discordapp.com/icons/829256569354321951/7a864c3a4114c5632efb901196a19afa.webp?size=96"} alt="Logo" className={styles.logo}/>
            </div>
        </Link>
        <p className={styles.current}>{props.current}</p>
    </div>
}
