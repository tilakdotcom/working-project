import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface ScrollToTopProps {
  behavior?: ScrollBehavior;
  disabledPaths?: string[];
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  behavior = "instant",
  disabledPaths = [],
}) => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const shouldScroll =
      pathname !== prevPath.current &&
      !disabledPaths.includes(pathname) &&
      (navigationType === "PUSH" || navigationType === "REPLACE");

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior });
    }

    prevPath.current = pathname;
  }, [pathname, behavior, disabledPaths, navigationType]);

  return null;
};

export default ScrollToTop;
