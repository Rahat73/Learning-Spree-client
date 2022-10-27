import Reactreveal from '../../Components/React Reveal/Reactreveal';
import computer from "../../resources/computer.json";
import Lottie from "lottie-react";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <Reactreveal></Reactreveal>
                <div className="md:w-1/2 w-full flex justify-center items-center mx-auto ">
                    <Lottie animationData={computer} loop={true} className="h-96" />
                </div>
                <div className="carousel w-full  my-16">
                    <div id="slide1" className="carousel-item relative w-full justify-center">
                        <img src="https://i.ibb.co/xYF3MhD/web-dev.png" alt='carousel' className="w-3/12" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full justify-center">
                        <img src="https://i.ibb.co/XFTn4bd/python.png" alt='carousel' className="w-3/12" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full justify-center">
                        <img src="https://i.ibb.co/7Y5DkMF/javascript.png" alt='carousel' className="w-3/12" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full justify-center">
                        <img src="https://i.ibb.co/S31GSzn/excel.png" alt='carousel' className="w-3/12" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;