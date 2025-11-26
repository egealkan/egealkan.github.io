import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // The useLocation hook gives us the current URL location object
  const { pathname } = useLocation();

  // useEffect runs a side-effect whenever the dependency array [pathname] changes
  useEffect(() => {
    // Reset the window scroll position to the top-left (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // This dependency ensures it runs on every route change

  return null; // This component renders nothing visually
};

export default ScrollToTop;