import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation:
    | "fadeIn"
    | "slideInFromLeft"
    | "slideInFromRight"
    | "slideInFromBottom";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
