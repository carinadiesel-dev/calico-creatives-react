
import React from 'react';
import { IconEmail } from '../icons/IconEmail';
import { IconWeb } from '../icons/IconWeb';
import { IconFacebook } from '../icons/IconFacebook';
import { IconInsta } from '../icons/IconInsta';
import { IconWhatsapp } from '../icons/IconWhatsapp';

const footerColor = {
    pink: 'bg-calicoPink-400',
    peach: 'bg-calicoPeach-300',
    orange: 'bg-calicoOrange-400'
}


type FooterProps = {
    credit?: string
    backgroundColor: 'bg-calicoPink-400' | 'bg-calicoOrange-400' | 'bg-calicoPeach-300'
}

export const Footer = ({credit, backgroundColor}: FooterProps) => {
    return (
    <div className={`${backgroundColor} flex flex-col items-center justify-around h-64 xl:h-72`}>
        <div className='flex gap-2 py-5 xl:gap-4'>
            <a href="#"><IconEmail /></a>
            <a href="#"><IconWeb /></a>
            <a href="#"><IconFacebook /></a>
            <a href="#"><IconInsta /></a>
            <a href="#"><IconWhatsapp /></a>
        </div>
        <div>
            <span className='text-2xl text-calicoWhite-400'>Created by Calico Creatives</span>
        </div>
    </div>
    )
}