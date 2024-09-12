import React from 'react'
import {useState} from 'react';
import "../styles/CarouselTwo.css"


const slides = [
    {
        imgSrc: 'https://globalnaps.org/wp-content/uploads/2017/10/ICT-electronics.jpg',
        altText: 'Fashion Apparel',
        caption: 'Discover the latest trends in fashion!',
        buttonText: 'Shop Now',
        buttonLink: '#'
    },
    {
        imgSrc: 'https://globalnaps.org/wp-content/uploads/2017/10/ICT-electronics.jpg',
        altText: 'Electronics',
        caption: 'Upgrade your tech with our latest gadgets.',
        buttonText: 'Browse Electronics',
        buttonLink: '#'
    },
    {
        imgSrc: 'https://globalnaps.org/wp-content/uploads/2017/10/ICT-electronics.jpg',
        altText: 'Home Goods',
        caption: 'Enhance your living space with our premium home goods.',
        buttonText: 'View Collection',
        buttonLink: '#'
    },
    {
        imgSrc: 'https://globalnaps.org/wp-content/uploads/2017/10/ICT-electronics.jpg',
        altText: 'Beauty Products',
        caption: 'Pamper yourself with our top beauty picks.',
        buttonText: 'Shop Beauty',
        buttonLink: '#'
    },
    {
        imgSrc: 'https://globalnaps.org/wp-content/uploads/2017/10/ICT-electronics.jpg',
        altText: 'Fitness Equipment',
        caption: 'Achieve your fitness goals with our gear.',
        buttonText: 'Explore Fitness',
        buttonLink: '#'
    }
];

const CarouselTwo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (step) => {
        const totalSlides = slides.length;
        setCurrentIndex((prevIndex) => (prevIndex + step + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel">
            <div className="carousel-container" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={slide.imgSrc} alt={slide.altText} />
                        <div className="carousel-caption">
                            <h2>{slide.caption}</h2>
                            <a href={slide.buttonLink} className="btn">{slide.buttonText}</a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button prev" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="carousel-button next" onClick={() => moveSlide(1)}>&#10095;</button>
        </div>
    );
};

export default CarouselTwo;
