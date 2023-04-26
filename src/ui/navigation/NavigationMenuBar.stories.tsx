import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { NavigationMenuBar } from '@/ui/navigation/NavigationMenuBar';

export default {
  title: 'Components/AppNavigationMenu',
  component: NavigationMenuBar,
  argTypes: {

  }
} as ComponentMeta<typeof NavigationMenuBar>;

const Template: ComponentStory<typeof NavigationMenuBar> = (args) =>
    <NavigationMenuBar {...args} />

    let navItemHome = {
      title: 'Home',
      link: '#',
    }

    let navItemPhotography = {
      title: 'Photography',
      link: '#',

    }

    let navItemGraphicDesign = {
      title: 'Graphic Design',
      link: '#',
      // subMenu: [
      //   {
      //     title: "Logo Design",
      //     href: "#",
      //     description:
      //       "We create professional logos from scratch based on your needs and preferences",
      //   },
      //   {
      //     title: "Animated Graphics",
      //     href: "#",
      //     description:
      //       "To bring a uniqueness to your logo, we can add some motion.",
      //   },
      //   {
      //     title: "Web Design",
      //     href: "#",
      //     description:
      //       "You are currently viewing one of our websites.",
      //   },
      //   {
      //     title: "Branding & Social",
      //     href: "#",
      //     description: "Social media increases the amount of exposure a brand receives and increases traffic",
      //   },
      //   {
      //     title: "Stationary'",
      //     href: "#",
      //     description:
      //       "We offer luxury stationery for all of life’s special celebrations and events.",
      //   },
      //   {
      //     title: "Poster & Ads",
      //     href: "#",
      //     description:
      //       "Turn anything into a poster",
      //   },
      // ]
    }

    let navItemPhotoGallery = {
      title: 'Photo Gallery',
      link: '#',
    }

    let navItemContact = {
      title: 'Contact',
      link: '#',
    }
;

let navItems = [navItemHome,navItemPhotography, navItemGraphicDesign, navItemPhotoGallery, navItemContact]

export const Default = Template.bind({});
Default.args = {

}




