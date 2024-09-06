import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./carousel.module.css";
// Carousel Component
const Carousel = (props) => {

    const photos = props.photos;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext= () => {
        let activeIndex = (currentIndex <= photos.length-1) ? currentIndex + 1 : 0;
        if(activeIndex>photos.length-1){
            activeIndex=0;
        }
        setCurrentIndex(activeIndex);
    };
    
    const handlePrev = () => {
        let activeIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
        setCurrentIndex(activeIndex);
    };

    //console.log(photos);
    

    return (
        <>
            {
                photos.map((photo, index) => {
                    return (
                        <img key={index}
                            src={`../../../../public/${photo}`}
                            alt={`Motorbike Image ${index + 1}`}
                            className={`
                                ${styles['carousel-img']} 
                                ${currentIndex === index ? styles.active : ''
                            }`}
                        />
                    );
                })
            }
            <div className={styles['carousel-controls']}>
                <span className={styles.prev} onClick={handlePrev}>
                    ‹
                </span>
                <span className={styles.next} onClick={handleNext}>
                    ›
                </span>
            </div>
        </>
    );
};

export default Carousel;
