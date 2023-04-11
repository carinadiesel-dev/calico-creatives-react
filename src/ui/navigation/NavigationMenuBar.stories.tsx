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
      isActive: true
    }

    let navItemPhotography = {
      title: 'Photography',
      link: '#',
      isActive: false
    }

    let navItemGraphicDesign = {
      title: 'Graphic Design',
      link: '#',
      isActive: false
      subMenu: [

        {
          title: 'Logo Design',
          description: 'We create professional logos from scratch based on your needs and preferences.'
        },
        {
          title: 'Animated Graphics',
          description: 'To bring a uniqueness to your logo, we can add some motion.'
        },
        {
          title: 'Web Design',
          description: 'You are currently viewing one of our websites.'
        },
        {
          title: 'Branding & Social',
          description: 'Social media increases the amount of exposure a brand receives and increases traffic'
        },
        {
          title: 'Stationary',
          description: 'We offer luxury stationery for all of life’s special celebrations and events.'
        },
        {
          title: 'Poster & Ads',
          description: 'Turn anything into a poster'
        }
      ]
    }

    let navItemPhotoGallery = {
      title: 'Photo Gallery',
      link: '#',
      isActive: false
    }

    let navItemContact = {
      title: 'Contact',
      link: '#',
      isActive: false
    }
;

let navItems= [navItemHome,navItemPhotography, navItemGraphicDesign, navItemPhotoGallery, navItemContact]

export const Default = Template.bind({});
Default.args = {

}




