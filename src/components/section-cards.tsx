'use client'

import { useEffect, useRef } from 'react';

import Image from 'next/image';

import Mockup from '/public/mockup-main.png';

import Card01 from  '/public/image-01.png';
import Card02 from  '/public/image-02.png';
import Card03 from  '/public/image-03.png';
import Card04 from  '/public/image-04.png';
import Card05 from  '/public/image-05.png';
import Card06 from  '/public/image-06.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


export function SectionCards() {

    const mockupRef = useRef (null)
    const titleRef = useRef(null)
    const sectionRef = useRef(null)
    
    const section = sectionRef.current

    const card01Ref = useRef(null);
    const card02Ref = useRef(null);
    const card03Ref = useRef(null);
    const card04Ref = useRef(null);
    const card05Ref = useRef(null);
    const card06Ref = useRef(null);

    function animateCards (images: null[], position : number){
        gsap.fromTo(images, {
            opacity: 0,
            x: position
        },{
            opacity: 1,
            x:0,
            duration: .5,
            stagger: .1,
            scrollTrigger: {
                trigger: section,
                start: 'center center'
            }
        })
    }

    useEffect(() => {
        const mockupPhone = mockupRef.current
        const title = titleRef.current
       
        
       gsap.fromTo(mockupPhone, {
            opacity: 0,
            scale: 0.5
        },{
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power4.out',
        })
       gsap.fromTo(title, {
            opacity: 0,
            y: 100
        },{
            opacity: 1,
           y: 0,
           duration: 1,
           scrollTrigger: {
            trigger: section,
            start: '65% center',
           }
        })

        const img01 = card01Ref.current;
        const img02 = card02Ref.current;
        const img03 = card03Ref.current;
        const img04 = card04Ref.current;
        const img05 = card05Ref.current;
        const img06 = card06Ref.current;

        const leftImages = [img01, img02, img03]
        const rightImages = [img04, img05, img06]

        animateCards(leftImages, 50)
        animateCards(rightImages, -50)
        
    }, []);

    return (
        <>
        <section className='w-full pb-20' ref={sectionRef}>
            <Image 
            src={Mockup}
            alt="Mockup main"
            className='sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0'
            ref={mockupRef}
            />

            <h2 className='text-center text-7xl font-semibold text-black mb-56 opacity-0' ref={titleRef}>Faça <span className='text-green-title-card'>você</span> mesmo de casa</h2>

            <div className='relative w-full h-area-cards max-w-area-cards mx-auto'>
                <Image src={Card01} ref={card01Ref} className='absolute top-8 left-44 opacity-0' alt='Card 01'/>
                <Image src={Card02} ref={card02Ref} className='absolute left-0- bottom-32 opacity-0' alt='Card 02'/>
                <Image src={Card03} ref={card03Ref} className='absolute bottom-0 left-80 opacity-0' alt='Card 03'/>
                <Image src={Card04} ref={card04Ref} className='absolute top-0 right-32 opacity-0' alt='Card 04'/>
                <Image src={Card05} ref={card05Ref} className='absolute right-0 bottom-28 opacity-0' alt='Card 05'/>
                <Image src={Card06} ref={card06Ref} className='absolute bottom-0 right-80 opacity-0' alt='Card 06'/>
            </div>
        </section>
        </>
    )
}