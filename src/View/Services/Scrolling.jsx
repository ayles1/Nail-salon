import React, {useRef, useContext} from 'react'


const ScrollingContext = React.createContext()

export const useScroll = () => {
    return useContext(ScrollingContext)
}

const ScrollingProvider = ({children}) =>{
    const navigationRefs = {
    portfolio: useRef(null),
    pricing: useRef(null),
    ratings: useRef(null),
    address:useRef(null),
    }
    const componentsRefs = {
    portfolio: useRef(null),
    pricing: useRef(null),
    ratings: useRef(null),
    address:useRef(null),
    }
    function handleScroll(){
        for(let ref in componentsRefs){
            let currentNode = componentsRefs[ref].current
            let rect = currentNode.getBoundingClientRect().y
            if(rect <= (window.innerHeight / 2) - 150 ){
                for(let navRef in  navigationRefs){
                    navigationRefs[navRef].current.classList.remove('active')
                    navigationRefs[ref].current.classList.add('active')  
                }
            }
        }
    }
    function handleClick(ref) {
       return componentsRefs[ref].current.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    return (
        <ScrollingContext.Provider value={{
            handleClick, 
            handleScroll,
            componentsRefs,
            navigationRefs
            
            }}>
            {children}
        </ScrollingContext.Provider>
    )
}

export default ScrollingProvider