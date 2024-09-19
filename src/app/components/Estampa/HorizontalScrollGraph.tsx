import React, { useRef, useState, useEffect, useLayoutEffect, ReactNode } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to check if the arrows should be shown (based on content width vs container width)
   const checkForScroll = () => {
    const container = containerRef.current;
    if (container) {
      const totalScrollableWidth = container.scrollWidth; // Total width of content (scrollable width)
      const visibleWidth = container.clientWidth; // Visible width of the container

      // Calculate how far right the user can scroll
      const maxScrollLeft = totalScrollableWidth - visibleWidth;

      // Right arrow visible if content width is larger than the container width and not scrolled all the way right
      setShowRightArrow(container.scrollLeft < maxScrollLeft);

      // Left arrow visible if scrolled more than 0 (we are past the start)
      setShowLeftArrow(container.scrollLeft > 0);
    }
  };

  // Scroll left
  const scrollLeftButton = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Scroll right
  const scrollRightButton = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Mouse down event for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  // Mouse move event for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (container) {
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // 2x faster scrolling
      container.scrollLeft = scrollLeft - walk;
    }
  };

  // Mouse up or leave event to stop dragging
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch events for dragging on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (container && e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (container && e.touches.length === 1) {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Initial scroll check when the component mounts and when children are added
  useLayoutEffect(() => {
    checkForScroll();
  }, [children]); // Check when children are rendered

  // Re-check scroll conditions on window resize
  useEffect(() => {
    const handleResize = () => {
      checkForScroll();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check for scroll whenever the container scrolls
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkForScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkForScroll);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {showLeftArrow && (
        <button
          onClick={scrollLeftButton}
          className="absolute -left-9 bg-transparent border-none text-3xl cursor-pointer p-2 z-10"
        >
         <IoIosArrowBack color={'#FFFFFF'} />
        </button>
      )}

      <div
        className={`items-container flex overflow-x-auto whitespace-nowrap w-full cursor-${isDragging ? 'grabbing' : 'grab'}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (child) => (
          <div className="min-w-[150px] mr-2 inline-block">{child}</div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRightButton}
          className="absolute -right-9 bg-transparent border-none text-3xl cursor-pointer p-2 z-10"
        >
          <IoIosArrowForward color={'#FFFFFF'} />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
