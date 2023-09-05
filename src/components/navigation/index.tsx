import { useRef } from "react";

import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { NavigationMobile } from "./NavigationMobile";
import "../../index.css";
import { useState, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";

// type ContextType = {};

let navItemHome = {
  title: "Home",
  link: "/",
};

let navItemPhotography = {
  title: "Photography",
  link: "/photography",
};

let navItemGraphicDesign = {
  title: "Graphic Design",
  link: "/graphic-design",
  subMenu: [
    {
      title: "Logo Design",
      href: "/graphic-design/logo-design",
      description:
        "We create professional logos from scratch based on your needs and preferences",
    },
    {
      title: "Animated Graphics",
      href: "/graphic-design/animated-graphics",
      description:
        "To bring a uniqueness to your logo, we can add some motion.",
    },
    {
      title: "Web Design",
      href: "/graphic-design/web-design",
      description: "You are currently viewing one of our websites.",
    },
    {
      title: "Branding & Social",
      href: "/graphic-design/branding-and-social-media",
      description:
        "Social media increases the amount of exposure a brand receives and increases traffic",
    },
    {
      title: "Stationary'",
      href: "/graphic-design/stationary-and-events",
      description:
        "We offer luxury stationery for all of life’s special celebrations and events.",
    },
    {
      title: "Poster & Ads",
      href: "/graphic-design/posters-and-ads",
      description: "Turn anything into a poster",
    },
  ],
};

let navItemPhotoGallery = {
  title: "Photo Gallery",
  link: "/photo-gallery",
};

let navItemContact = {
  title: "Contact",
  link: "/contact",
};
let navItems = [
  navItemHome,
  navItemPhotography,
  navItemGraphicDesign,
  navItemPhotoGallery,
  navItemContact,
];

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function NavIndex() {
  // Different variable
  const isMobileBreakpoint = useMediaQuery(1024);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLButtonElement>(null);
  const scrollToNavigation = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    triggerRef?.current?.dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );
    setTimeout(() => {
      accordionRef?.current?.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    }, 400);
  };
  return (
    <>
      <div>
        {isMobileBreakpoint ? (
          <div>
            <NavigationMobile
              navItems={navItems}
              scrollRef={scrollRef}
              triggerRef={triggerRef}
              accordionRef={accordionRef}
            />
          </div>
        ) : (
          <div>
            <NavigationMenuDesktop
              navItems={navItems}
              scrollRef={scrollRef}
              triggerRef={triggerRef}
            />
          </div>
        )}
      </div>
      <Outlet context={[scrollToNavigation]} />
    </>
  );
}