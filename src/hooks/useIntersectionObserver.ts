import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  elementRef: RefObject<Element | null>,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px'
  }
) => {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isIntersecting;
}; 