import React from 'react'
import Image from 'next/image'
import {trpc} from '@/utils/trpc'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import * as gtag from '@/utils/gtag'

import {Avatar} from '@/ui/avatars/Avatar'
import {ContactForm} from '@/ui/forms/ContactForm'
import {CookieConsentPopup as _CookieConsentPopup} from '@/ui/popups/CookieConsentPopup'

import { siteLogo } from '@/public/siteLogo'

import * as stackLogos from "@/public/stackLogos";
import everyspaceLogo from "/public/images/client-logos/everyspace.png";
import jackBlackLogo from "/public/images/client-logos/jack-black.png";
import oldMutualLogo from "/public/images/client-logos/old-mutual.png";
import prismaLogo from "/public/images/client-logos/prisma.png";
import bibloLogo from "/public/images/client-logos/biblo.png";
import diagramImage from "/public/images/diagram.png";
import Link from 'next/link'

import {Icon} from '@/ui/icons/Icon';

export default function IndexPage() {
  return <>

    <Head>
      <title>Convert Figma Boards into React Storybooks</title>
      <meta
        name="description"
        content="Bootstrap your development team with fully tested, design consistent, accessible React components and documentation."
      />
    </Head>
    
    <div className="container mx-auto px-4 flex max-lg:flex-col gap-10 items-center justify-between"> 
      <div className="max-w-full w-[660px] flex flex-col gap-4 py-10 xl:py-20">
        <Image data-aos="fade-up" data-aos-delay="0" className="lg:w-[80px] h-full mb-8" src={siteLogo} alt={""} />
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl lg:text-[50px] leading-none">
          Frontend <span className="font-bold ">development</span> as-a-service that<span className="font-bold text-purple-800"> accelerates product development</span>
        </h1>
        {/* <h1 className="text-3xl lg:text-[70px] leading-none">
          We turn <span className="font-bold text-teal-400">Figma Boards</span> into <span className="font-bold text-purple-800">React Storybooks</span>
        </h1> */}
        <p data-aos="fade-up" data-aos-delay="400" className="text-xl lg:text-3xl mt-4">
          You give us <span className='font-bold'>Figma designs</span> - we give you <span className='font-medium'>React pages and components</span>.
        </p>
        <Link data-aos="fade-up" data-aos-delay="600" className='mt-12 flex flex-row gap-[16px]' href={"https://twitter.com/fig2story_io"}>
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            <div className='font-bold'>Questions? Reach out on Twitter!</div>
        </Link>

        <div data-aos="fade-up" data-aos-delay="800" className="flex flex-col mt-4">
          <Link href="/#contact" className="flex justify-center items-center rounded-full bg-purple-900 text-white h-[50px] w-[200px]">
            <div role="status">
                <span className="sr-only">Loading...</span>
              </div>
              Get Quote
          </Link>
        </div>
    </div>

      <Image data-aos="fade-up" data-aos-delay="800" className="lg:w-1/2 h-full" src={diagramImage} alt={""} />
    </div>
    
    <div className=" bg-gray-100 px-4 mx-auto py-20 flex flex-col">
      <h2 className='text-4xl lg:text-[48px] leading-[60px] font-semibold text-center'>But, why?</h2>
      <p className='text-2xl mb-4 text-center mt-4 w-1/2 mx-auto'>Not only do you get pages and components back in high-quality React code - there is a lot more going on under the hood.</p>
      <div className="container px-4 grid lg:grid-cols-3 gap-10 mx-auto">
        <div data-aos="fade-up" data-aos-delay="200">
          <div className='flex justify-center mb-4'>
            <Icon name="lightning"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Your devs will love it</h4>
          <p className='text-center'>We build Storybooks that makes it faster and easier to develop UI by isolating components. </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
        <div className='flex justify-center mb-4'>
            <Icon name="check"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Test your components</h4>
          <p className='text-center'>Built in testing helps to simulate user interactions such as clicks and form entries.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
        <div className='flex justify-center mb-4'>
            <Icon name="bookstack"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Documented components</h4>
          <p className='text-center'>All of your components are well documented by using stories as a basis for documentation.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
        <div className='flex justify-center mb-4'>
            <Icon name="pointer"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Share components</h4>
          <p className='text-center'>Publish your Storybook online. This allows you to share your components with anyone who has access to the URL.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
        <div className='flex justify-center mb-4'>
            <Icon name="globe"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Get brand consistency</h4>
          <p className='text-center'>We deliver a design system can be reused across your projects to ensure a consistent look and feel.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1800">
        <div className='flex justify-center mb-4'>
            <Icon name="block"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Integrate the backend</h4>
          <p className='text-center'>Integrate easier with the backend by using isolated components with documented properties.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="2100">
        <div className='flex justify-center mb-4'>
            <Icon name="hand"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Get accessibility built in</h4>
          <p className='text-center'>By default, we deliver your storybook components with accessibility built into each and every component.  </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="2400">
        <div className='flex justify-center mb-4'>
            <Icon name="sun"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Reference one source</h4>
          <p className='text-center'>Anyone across your organisation can easily explore and access all components.  Design and Marketing have a full view at all times. </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="2700">
        <div className='flex justify-center mb-4'>
            <Icon name="sun"  />
          </div>
          <h4 className="text-2xl mb-4 text-center">Alleviate team friction</h4>
          <p className='text-center'>A single source of truth and full visibility for all departments in your company, you allow for better communication and team work. </p>
        </div>
        
      </div>
    </div>
    


    <div className="container px-4 mx-auto py-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div>
          <h4 className="text-2xl mb-4">Fast Delivery</h4>
          <p>Our team of expert frontend developers can move quickly and have your components ready in days, not weeks or months. After the intial build, your designers can add more and more designs and we will keep on growing your React component library.</p>
        </div>
        <div>
          <h4 className="text-2xl mb-4">Accessibilty Included</h4>
          <p>By leveraging libraries like React-aria, HeadlessUI and Radix (Our favourite) every interaction on your app will be accessible via the widest variety of devices, browsers, platforms and screen readers.</p>
        </div>
        <div>
          <h4 className="text-2xl mb-4">Cost Effective</h4>
          <p>By bootstrapping your team with all your UI components, they'll be free to create real value instead of testing dropdown menus.  Don't spend expensive development time on building UI's - let us do it!</p>
        </div>
      </div>
    </div>
    
    <div className="container px-4 mx-auto">
        <h2 className="text-4xl mt-10 block text-center">Companies that have worked with us</h2>
        <div className="container px-4 mx-auto pt-4 pb-20">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <Image style={{ height: 40, width: "auto" }} src={everyspaceLogo} alt={""} />
            <Image style={{ height: 30, width: "auto" }} src={jackBlackLogo} alt={""} />
            <Image style={{ height: 40, width: "auto" }} src={oldMutualLogo} alt={""} />
            <Image style={{ height: 50, width: "auto" }} src={prismaLogo} alt={""} />
            <Image style={{ height: 50, width: "auto" }} src={bibloLogo} alt={""} />
          </div>
        </div>
    </div>

    <div className="bg-gray-100 shadow-inner py-10">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl mb-10 block text-center">What our clients are saying</h1>

        <div className="flex flex-wrap gap-8 items-start justify-center">
          <div className="bg-white px-8 py-6 rounded shadow-sm w-[360px]">
            <p className="mb-4">The Storybook components we got from the team at Fig2Story were of incredible quality and really sped up the backend development.  I did not expect such an improvement in deployment of new features, so all in all, very stoked!</p>
            <div className="flex gap-2 items-center">
              <Avatar size={"large"} initials={"BF"} backgroundColor={"#6b21a8"} color={"white"} />
              <div className="leading-none">
                <strong className="font-semibold mb-2">Blanche Franken</strong>
                <div className="text-gray-400 text-sm">Founder, Everyspace</div>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-6 rounded shadow-sm w-[360px]">
            <p className="mb-4">Our product is moving at such a rapid pace, and gets deployed to so many platforms that it is really hard to keep track of what we have in our kitchen sink to work with.  Fig2Store helped us pull together our component assets and we are really seeing big gains in time to feature roll out.</p>
            <div className="flex gap-2 items-center">
              <Avatar size={"large"} initials={"JM"} backgroundColor={"#6b21a8"} color={"white"} />
              <div className="leading-none">
                <strong className="font-semibold mb-2">Julliet Melliet</strong>
                <div className="text-gray-400 text-sm">Head of Web, Prisma Data Inc</div>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-6 rounded shadow-sm w-[360px]">
            <p className="mb-4">I was sceptical at first, but I am super happy I work with them.</p>
            <div className="flex gap-2 items-center">
              <Avatar size={"large"} initials={"MW"} backgroundColor={"#6b21a8"} color={"white"} />
              <div className="leading-none">
                <strong className="font-semibold mb-2">Markus Wormstrom</strong>
                <div className="text-gray-400 text-sm">CEO, Biblo</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="container px-4 mx-auto py-20 flex flex-col gap-10">
      <h3 className="text-4xl">How it works</h3>

      <div>
        <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        <h4 className="text-2xl mb-4 pt-2">Share your designs</h4>
        <p>Share your UI Figma files with us and we'll give you a detailed estimate for your new storybook. From primitives like buttons and typography, to stateful forms with input validation.</p>
      </div>

      <div>
      <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        <h4 className="text-2xl mb-4 pt-2">Get a Quote</h4>
        <p>With a price range that's in or near the ballpark we'll get started by making sure we understand what's expected from every element in your design.</p>

      </div>

      <div>
      <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        <h4 className="text-2xl mb-4 pt-2">Delivery and Iteration</h4>
        <p>Everything's packed and ready. Our Continuous integration pipelines allow us to iterate fast. When building complex systems, the only thing we can be sure of is change. Our process embraces it, and we make you a part of it!</p>

      </div>
    </div>

    <div className="container px-4 mx-auto py-20 flex flex-col gap-10">
      <div>
        <h3 className="text-4xl mb-4">The Stack</h3>
        <p>We're not that opinionated, really! If you have a particular preference in technology, let's chat. If you don't, here's what we'll be using!</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.storybookLogo} alt={""} />
          <h4 className="text-xl mb-4">React Storybook</h4>
          <p className="mb-4">Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://storybook.js.org/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.typescriptLogo} alt={""} />
          <h4 className="text-xl mb-4">Typescript</h4>
          <p className="mb-4">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Make your IDE your friend!</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.reactLogo} alt={""} />
          <h4 className="text-xl mb-4">React</h4>
          <p className="mb-4">A Declarative library that makes creating complex UI painless. Build base components as pure functions of props and compose them into more complex ones that manage their own state.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://reactjs.org/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 32, width: "auto" }} className="mb-4" src={stackLogos.tailwindLogo} alt={""} />
          <h4 className="text-xl mb-4">TailwindCSS</h4>
          <p className="mb-4">A utility-first CSS framework that can be composed to build any design, directly in your markup.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://tailwindcss.com/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 30, width: "auto" }} className="mb-4" src={stackLogos.radixLogo} alt={""} />
          <h4 className="text-xl mb-4">Radix UI</h4>
          <p className="mb-4">Building robust UIs takes a lot of time and is mostly undifferentiated work. Building on top of Radix components will save you time and money, so you can ship a better product faster.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://www.radix-ui.com/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.formikLogo} alt={""} />
          <h4 className="text-xl mb-4">Formik</h4>
          <p className="mb-4">Embracing the ephemeral nature of forms, Formik keeps track of values/errors/visited fields, orchestrating validation, and handling submission.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://formik.org/">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.zodLogo} alt={""} />
          <h4 className="text-xl mb-4">Zod</h4>
          <p className="mb-4">a TypeScript-first schema declaration and validation library with zero dependencies and a concise, chainable interface.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://github.com/colinhacks/zod">Learn more</a>
        </div>

        <div>
          <Image style={{ height: 40, width: "auto" }} className="mb-4" src={stackLogos.cvaLogo} alt={""} />
          <h4 className="text-xl mb-4">CVA / CLSX</h4>
          <p className="mb-4">When working with TailwindCSS or your own CSS, CVA and CLSX aim to alleviate the pain points of managing variants, matching classes to props, and manual type definitions.</p>
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://github.com/lukeed/clsx">CLSX</a>
          {" "}and{" "}
          <a className="text-teal-400 hover:underline" target="_blank" rel="noreferrer" href="https://cva.style/docs">CVA</a>
        </div>
      </div>
    </div>

    <ContactFormContainer />

    <CookieConsentPopup />
  </>;

}

const CookieConsentPopup = dynamic(
  Promise.resolve(_CookieConsentPopup),
  { ssr: false }
);

const ContactFormContainer = () => {
  const form = trpc.submitContactForm.useMutation();

  return <div className="bg-purple-800 text-white relative">
    {form.isSuccess && <div className="absolute inset-0 bg-purple-800 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Thank You!</h1>
      <p className="text-xl">Check your inbox for <strong className="font-semibold underline">{form.variables?.email}</strong> to schedule a meeting!</p>
    </div>}

    <div className="max-w-full w-[600px] px-4 mx-auto py-20">
      <h3 id="contact" className="text-4xl mb-4">Get in touch</h3>
      <p>As soon as you submit the form we'll send you a calendar to pick a date and time for a video conference. Let's get this show on the road!</p>
      <div className="py-10">
        <ContactForm onSubmit={(values, formHelpers) => {
          form.mutate(values, {
            onSuccess: () => {
              window.gtag("event", "form_submitted");
            },
            onError: () => {
              console.log("Error");
            },
            onSettled: () => {
              formHelpers.resetForm();
            }
          });
        }} />
      </div>
    </div>
  </div>;
}