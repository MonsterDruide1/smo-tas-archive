import Router from 'next/router'
import useFitText from "use-fit-text"
import TasData from "../../lib/data/TasData"
import TasEntry from "../../lib/data/TasEntry"
import Head from 'next/head'
import Layout from "../../lib/components/Layout"
import Image from 'next/image'
import styles from '../../styles/details.module.css'
import Navbar from '../../lib/components/Navbar'
import TwitterEmbed from "../../lib/components/TwitterEmbed"

import Kingdom from '../../lib/components/KingdomVisual'
import AuthorsList from '../../lib/components/AuthorsList'
import { Filter } from "../../lib/components/SearchBar"
import { KingdomType } from '../../lib/data/Kingdom';
import AuthorEntry from '../../lib/data/AuthorEntry';

export default function TAS({ entry }: {entry: TasEntry}) {
    let title = `TAS-Segment archive - ${entry.name}`
    const { fontSize, ref } = useFitText({maxFontSize: 350});

    function filterBy(text: string, kingdom: KingdomType | null, author: AuthorEntry | null) {
        window.localStorage.setItem('filter', JSON.stringify(new Filter(text, kingdom, author)));
        Router.push(`/`);
    }

    return (
        <Layout title={title} navbar_current={`Details: ${entry.name}`}>
            <div className={styles.content}>

                <p ref={ref} style={{ fontSize }} className={styles.name}>{entry.name}</p>

                <div className={styles.video_pane}>
                    <div className={styles.video}>
                        {
                            entry.video.indexOf("youtube") > -1 ?
                                <iframe className={styles.inner_video} src={entry.video.replace("watch?v=", "embed/")} frameBorder={0} allowFullScreen/> :
                                entry.video.indexOf("youtu.be") > -1 ?
                                    <iframe className={styles.inner_video} src={entry.video.replace("youtu.be", "youtube.com/embed/")} frameBorder={0} allowFullScreen/> :
                                    entry.video.indexOf("twitter") > -1 ?
                                        <TwitterEmbed url={entry.video} className={styles.inner_video} /> :
                                        <video controls className={styles.inner_video}><source src={entry.video} /></video>
                        }
                    </div>

                    <div className={styles.bottomrow}>
                        <Kingdom kingdom={entry.kingdom} className={styles.kingdom} onClick={(kingdom) => {filterBy("", kingdom, null)}}/>
                        <AuthorsList authors={entry.authors} className={styles.author} onClick={(author) => {filterBy("", null, author)}}/>
                    </div>
                </div>

                <p className={styles.details_title}>Details</p>

                <div className={styles.details_table_wrapper}>
                    <table className={styles.details_table}>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{entry.name}</td>
                            </tr>
                            <tr>
                                <td>Kingdom</td>
                                <td><Kingdom kingdom={entry.kingdom} className={styles.kingdom}  onClick={(kingdom) => {filterBy("", kingdom, null)}}/></td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{entry.time}s</td>
                            </tr>
                            <tr>
                                <td>Authors ({entry.authors.length})</td>
                                <td>
                                    {entry.authors.map((element, index) => {
                                        return <div className={styles.author_item} key={element.name} onClick={() => {filterBy("", null, element)}}>
                                            <img className={styles.author_thumbnail} src={element.icon} alt={`Profile-icon of ${element.name}`} />
                                            <p className={styles.author_name}>{element.name}</p>
                                        </div>
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <td>Script</td>
                                <td>
                                    {
                                        (entry.script == "Not available" || entry.script == "??") ? "Not available" : <a href={entry.script} className={styles.script_link}>Download</a>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Setup</td>
                                <td>{entry.setup}</td>
                            </tr>
                            <tr>
                                <td>Version</td>
                                <td>{entry.version}</td>
                            </tr>
                            <tr>
                                <td>Published</td>
                                <td suppressHydrationWarning>{new Date(entry.date.slice(0,4)+"-"+entry.date.slice(4,6)+"-"+entry.date.slice(6)).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td>Notes</td>
                                <td>{entry.notes == "" ? "-" : entry.notes}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params } : {params: {id: number}}) {
    const entry = TasData.find(element => element.id == params.id);
    return {
        props: {
            entry,
        },
    };
}

export async function getStaticPaths() {
    const paths = TasData.map(element => {
        return `/details/${element.id}`
    })
    return {
        paths,
        fallback: false
    }
}
