import { useMediaQuery } from 'react-responsive';
import ComputersCanvas from '../components/Computer';
import { motion } from "framer-motion";

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 500 });

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Vipul Tandon <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <ComputersCanvas />
            </div>

            {isMobile && (
                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href='#about'>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full mb-1 bg-[#aaa6c3]'
                            />
                        </div>
                    </a>
                </div>
            )}
        </section>
    )
}

export default Hero