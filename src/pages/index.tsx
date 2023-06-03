import React from 'react'
import Image from 'next/image'
import {trpc} from '@/utils/trpc'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import * as gtag from '@/utils/gtag'
import { Hero } from '@/ui/home/Hero'

import {Avatar} from '@/ui/avatars/Avatar'
import {CookieConsentPopup as _CookieConsentPopup} from '@/ui/popups/CookieConsentPopup'

import { siteLogo } from '@/public/siteLogo'

import * as stackLogos from "@/public/stackLogos";
import Link from 'next/link'

export default function IndexPage() {
  return <>

    <Head>
      <title>Calico Creatives</title>
      <meta
        name="description"
        content=""
      />
    </Head>
    
    <div className="flex items-center justify-between gap-10 mx-auto max-lg:flex-col"> 
      <Hero />
  </div>
  </>;
}