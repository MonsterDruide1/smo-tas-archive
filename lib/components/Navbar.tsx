import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/Navbar.module.css"

export interface Props {
    current: string,
    onLogoClick?: () => void,
}

export default function Navbar(props: Props) {
    return <div className={styles.navbar}>
        <Link href="/">
            <div style={{width: "100%", height: "100%"}} onClick={!!props.onLogoClick ? props.onLogoClick : undefined}>
                <Image width={40} height={40} src={"/smo/img/logo.png"} alt="Logo" className={styles.logo}/>
            </div>
        </Link>
        <p className={styles.current}>{props.current}</p>
    </div>
}
