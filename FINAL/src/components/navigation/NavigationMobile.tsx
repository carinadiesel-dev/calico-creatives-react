import React, {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import { CCLogo } from "../logos/CCLogo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Route, Routes, Link } from "react-router-dom";

import { Separator } from "../ui/separator";

import { IconHamburger } from "../icons/IconHamburger";

type NavRow = {
  title: string;
  link: string;
  subMenu?: { title: string; href: string; description: string }[];
};

// const [open, setOpen] = useState(false);

const subMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Logo Design",
    href: "/graphic-design/logo-design",
    description:
      "We create professional logos from scratch based on your needs and preferences",
  },
  {
    title: "Animated Graphics",
    href: "/graphic-design/logo-design",
    description: "To bring a uniqueness to your logo, we can add some motion.",
  },
  {
    title: "Web Design",
    href: "/graphic-design/web-design",
    description: "You are currently viewing one of our websites.",
  },
  {
    title: "Branding & Social",
    href: "/graphic-design/branding-and-social",
    description:
      "Social media increases the amount of exposure a brand receives and increases traffic",
  },
  {
    title: "Stationary'",
    href: "/graphic-design/stationary",
    description:
      "We offer luxury stationery for all of life’s special celebrations and events.",
  },
  {
    title: "Poster & Ads",
    href: "/graphic-design/posters-and-ads",
    description: "Turn anything into a poster",
  },
];

type NavItem = {};

type NavigationMenuBarProps = {
  navItems: NavItem[];
  scrollRef: Ref<HTMLDivElement>;
};

const NavItem: FunctionComponent<NavRow> = ({ title, link, subMenu }) => {
  const hasSubMenu = subMenu !== undefined ? true : false;
  return (
    <NavigationMenuItem className="h-full">
      {hasSubMenu === true ? (
        <>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {subMenu &&
                    subMenu.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}

                      />
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <Link to={link}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {title}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  );
};

export const NavigationMobile = ({ navItems,scrollRef }: NavigationMenuBarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between px-6 bg-calicoPink-100/40">
      <div className="translate-y-4">
        <CCLogo width={223} />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger ref={scrollRef}>
          <IconHamburger size={2} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="relative">
            <div className="h-20 overflow-hidden translate-x-4 translate-y-4">
              <CCLogo width={223} />
            </div>
          </DialogHeader>
          <NavigationMenu className="pt-10 -translate-y-32 ">
            <NavigationMenuList>
              <NavigationMenuItem >
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onSelect={() => setOpen(false)}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/photography">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onSelect={() => setOpen(false)}>
                    Photography
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Graphic Design</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pt-2 space-y-4">
                        <ListItem
                          key={"Logo Design"}
                          title={"Logo Design"}
                          href={"/graphic-design/logo-design"}
                          onSelect={() => setOpen(false)}
                        />
                        <ListItem
                          key={"Animated Graphics"}
                          title={"Animated Graphics"}
                          href={"/graphic-design/animated-graphics"}
                          onSelect={() => setOpen(false)}
                        />
                        <ListItem
                          key={"Web Design"}
                          title={"Web Design"}
                          href={"/graphic-design/web-design"}
                          onSelect={() => setOpen(false)}
                        />
                        <ListItem
                          key={"Branding & Social"}
                          title={"Branding & Social"}
                          href={"/graphic-design/branding-and-social-media"}
                          onSelect={() => setOpen(false)}
                        />
                        <ListItem
                          key={"Stationary"}
                          title={"Stationary"}
                          href={"/graphic-design/stationary-and-events"}
                          onSelect={() => setOpen(false)}
                        />
                        <ListItem
                          key={"Poster & Ads"}
                          title={"Poster & Ads"}
                          href={"/graphic-design/posters-and-ads"}
                          onSelect={() => setOpen(false)}
                        />
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/photo-gallery">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onSelect={() => setOpen(false)}>
                    Photo Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onSelect={() => setOpen(false)}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md text-4xl leading-none no-underline outline-none transition-colors hover:text-calicoPink-100",
            className
          )}
          {...props}
        >
          <div className="text-xl font-bold leading-none text-calicoRedOrange-400">
            {title}
          </div>
          <p className="text-xl leading-snug line-clamp-2 text-calicoGray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
