
import React from 'react';
import { IconEmail } from '../icons/IconEmail';
import { IconWeb } from '../icons/IconWeb';
import { IconFacebook } from '../icons/IconFacebook';
import { IconInsta } from '../icons/IconInsta';
import { IconWhatsapp } from '../icons/IconWhatsapp';

type FooterType = {

}

type FooterProps = {
    credit : string
    backgroundColor: 'bg-calicoPink-400' | 'bg-calicoOrange-400' | 'bg-calicoPeach-400'
    footerTypes: FooterType[]
}

export const Footer = ({backgroundColor}: FooterProps) => {
    return (
    <div className="flex flex-col items-center justify-around bg-calicoPink-400 h-72">
        <div className='flex py-5 gap-4'>
            <a href="#"><IconEmail /></a>
            <a href="#"><IconWeb /></a>
            <a href="#"><IconFacebook /></a>
            <a href="#"><IconInsta /></a>
            <a href="#"><IconWhatsapp /></a>
        </div>
        <div>
            <span className='text-calicoWhite-400 text-2xl'>Created by Calico Creatives</span>
        </div>
    </div>
    )
}