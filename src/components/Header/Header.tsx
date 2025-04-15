import { useEffect, useState, useRef } from "react";

interface HeaderProps {
  scrollContainerId?: string;
}

function Header({ scrollContainerId }: HeaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLElement | Window | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerId
      ? document.getElementById(scrollContainerId)
      : window;

    if (!scrollContainer) return;

    (
      scrollContainerRef as React.MutableRefObject<HTMLElement | Window | null>
    ).current = scrollContainer;

    const handleScroll = () => {
      const currentContainer = scrollContainerRef.current;
      if (!currentContainer) return;

      const currentScrollY =
        currentContainer === window
          ? (currentContainer as Window).scrollY
          : (currentContainer as HTMLElement).scrollTop;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollContainerId]);

  return (
    <div className={`header ${isVisible ? "visible" : "hidden"}`}>
      <img src="./avatar.png" alt="" />
      <h3>Лента</h3>
    </div>
  );
}

export default Header;
