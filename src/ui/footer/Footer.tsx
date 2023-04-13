
import React from 'react';
import { IconEmail } from '../icons/IconEmail';
import { IconWeb } from '../icons/IconWeb';
import { IconFacebook } from '../icons/IconFacebook';
import { IconInsta } from '../icons/IconInsta';
import { IconWhatsapp } from '../icons/IconWhatsapp';

const footerColor = {
    pink: 'bg-calicoPink-400',
    peach: 'bg-calicoPeach-400',
    orange: 'bg-calicoOrange-400'
}

type FooterType = {

}

type FooterProps = {
    credit : string
    
}

export const Footer = ({credit}: FooterProps) => {
    return (
    <div className={`bg-calicoPink-400 flex flex-col items-center justify-around h-72`}>
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