"use client"
import { Products } from '@/app/types/main';
import React from 'react';
import { Carousel } from 'rsuite';
import Image from 'next/image';

const products: Products[] = [
    {
        photo: "/photo7.jpg",
        link: ""
    },
    {
        photo: "/photo2.jpg",
        link: ""
    },
    {
        photo: "/photo3.jpg",
        link: ""
    },
    {
        photo: "/photo4.jpg",
        link: ""
    },
    {
        photo: "/photo5.jpg",
        link: ""
    },
];

function openlink(link: string) {
    window.open(link, '_blank');
}

const CarouselComponent: React.FC = () => {
    return (
        <div className='carousel-container mt-0 mb-10 md:mb-2'>
            <Carousel autoplay className="custom-slider mx-auto h-[32rem] w-full">
                {products.map((product, index) => (
                    <Carousel key={index}>
                        <a href={product.link} target="_blank" rel="noreferrer" onClick={() => openlink(product.link)}>
                            <Image
                                src={product.photo}
                                width={1500}
                                height={1500}
                                priority
                                alt='photo'
                                className="w-full h-full" />
                        </a>
                    </Carousel>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
