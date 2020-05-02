import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';


// hook to get the window's width and height

const getWindowDimensions = () => {
  // get the width and the height from the window object
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
  // set default state of the hook
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  // set event when the window is resize
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // return the hook with the data
  return windowDimensions;
}

// hook to add scroll event
// documentation
// https://github.com/n8tb1t/use-scroll-position
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// the type of window is an object
const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {

  if (!isBrowser) return { x: 0, y: 0 }

  // if there is an element in the DOM to target, target. If not target the body
  const target = element ? element.current : document.body
  // get the positions(x,y,height,width, etc) of the target element
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  // return x: window.scrollX, y: window.scrollY 
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
}