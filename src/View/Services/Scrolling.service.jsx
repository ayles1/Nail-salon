import React, { useRef, useContext, useMemo } from 'react'

const ScrollingContext = React.createContext()

export const useScroll = () => useContext(ScrollingContext)

function ScrollingProvider({ children }) {
    const navigationRefs = {
        portfolio: useRef(null),
        pricing: useRef(null),
        ratings: useRef(null),
        address: useRef(null),
    }
    const componentsRefs = {
        portfolio: useRef(null),
        pricing: useRef(null),
        ratings: useRef(null),
        address: useRef(null),
    }

    function handleScroll() {
        const refs = Object.keys(componentsRefs)
        refs.map((ref) => {
            const currentNode = componentsRefs[ref].current
            const rect = currentNode.getBoundingClientRect().y
            if (rect <= window.innerHeight / 2 - 150) {
                const navRefs = Object.keys(componentsRefs)
                navRefs.map((navRef) => {
                    navigationRefs[navRef].current.classList.remove('active')
                    navigationRefs[ref].current.classList.add('active')
                    return null
                })
            }
            return null
        })
    }
    function handleClick(ref) {
        componentsRefs[ref].current.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }
    const memoizedValue = useMemo(() => {
        const props = {
            handleClick,
            handleScroll,
            componentsRefs,
            navigationRefs,
        }
        return props
    }, [])
    return (
        <ScrollingContext.Provider value={memoizedValue}>
            {children}
        </ScrollingContext.Provider>
    )
}

export default ScrollingProvider
