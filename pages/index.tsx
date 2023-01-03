import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../lib/components/Layout'
import Navbar from '../lib/components/Navbar'
import SearchBar, { Filter } from '../lib/components/SearchBar'
import MenuEntryDesktop from '../lib/components/MenuEntryDesktop'
import MenuEntryMobile from '../lib/components/MenuEntryMobile'

import TasData from '../lib/data/TasData'
import { useCallback, useEffect, useState } from 'react'
import AuthorEntry from '../lib/data/AuthorEntry'
import { KingdomType } from '../lib/data/Kingdom'
import AuthorData from '../lib/data/AuthorData'

const Home: NextPage = () => {
  const isMobile = useMediaQuery(600);
  const [filter, setFilter] = useState(new Filter());

  function onFilterChange(filter: Filter) {
    setFilter(filter);
  }

  useEffect(() => {
    let value = window.localStorage.getItem('filter');
    if(value !== null) {
      try {
        let filter = JSON.parse(value) as Filter;
        setFilter(new Filter(filter.text, filter.kingdom, AuthorData.find(author => author.name == filter.author?.name)));
      }
      catch(e) {console.log(e)}
    }
    return () => window.localStorage.setItem('filter', JSON.stringify(filter));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  function onAuthorClick(author: AuthorEntry) {
    setFilter(filter.changeAuthor(author));
  }
  function onKingdomClick(kingdom: KingdomType) {
    setFilter(filter.changeKingdom(kingdom));
  }

  return (
  <Layout title="TAS-Segment archive - Home" navbar_current='Home' onLogoClick={() => {onFilterChange(new Filter())}}>
    <SearchBar className={styles.searchbar} filter={filter} onFilterChange={onFilterChange}/>

    <div className={styles.entrylist}>
      {filter.filter().map(entry => {
          const [element, _] = entry;
          if(isMobile) {
            return <MenuEntryMobile
              key={element.id}
              index={element.id}
              entry={element}
              onAuthorClick={onAuthorClick}
              onKingdomClick={onKingdomClick}/>
          } else {
            return <MenuEntryDesktop
              key={element.id}
              index={element.id}
              entry={element}
              onAuthorClick={onAuthorClick}
              onKingdomClick={onKingdomClick}/>
          }
        }
        )}
    </div>
  </Layout>
  )
}

export default Home

const useMediaQuery = (width:number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', e => updateTarget(e))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', e => updateTarget(e))
  }, [updateTarget, width])

  return targetReached;
}
