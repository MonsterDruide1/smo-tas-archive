import Head from 'next/head'
import Navbar from './Navbar'

export interface Props {
    children: React.ReactNode,
    title: string,
    navbar_current: string,
    onLogoClick?: () => void,
}

export default function Layout(props: Props) {
    return <div>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="Archive for Super Mario Odyssey-TASes" />
      <link rel="icon" href="/smo/favicon.ico" />
    </Head>

    <Navbar current={props.navbar_current} onLogoClick={props.onLogoClick}/>

    {props.children}

    <footer>
      <p>Website created by <a href="https://github.com/MonsterDruide1">MonsterDruide1</a></p>
    </footer>
  </div>
}
