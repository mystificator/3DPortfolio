import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const globeEl = useRef();
    useEffect(() => {
        // Once the globe is loaded, set the initial view
        globeEl.current.pointOfView({ lat: 22.719568, lng: 75.857727, altitude: 1.5 }, 1000);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(
            "vipultandon.business@gmail.com"
        );
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Who I am?</p>
                            <p className="grid-subtext">
                            I am Vipul Tandon, a Fullstack Web Developer with over a year and a half of experience in building scalable applications across frontend and backend technologies. I am a self-motivated and detail-oriented professional, eager to learn, adapt, and contribute effectively in collaborative team environments
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I have worked extensively with modern frameworks like React.js for seamless UI experiences and Node.js with Express.js for efficient server-side development.
                                Additionally, I am proficient in Ruby on Rails, with a focus on building robust and scalable applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeEl}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 28.4595,
                                        lng: 77.0266,
                                        text: "I'm here", // Add a pin icon or emoji
                                        size: 0.5, // Adjust size
                                        color: "white", // Pin color
                                    }
                                ]}
                                labelAltitude={0.05} // Keeps label closer to the globe
                                labelSize={2.5} // Increase label size to make it visible from a higher altitude
                                labelDotRadius={0.4}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Gurgaon, India and open to remote work worldwide</p>
                            <a href="#contact">
                                <Button name="Let's work together" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills
                            </p>
                            <a href="https://drive.google.com/file/d/1hfDSUeMlkfj8sIPEOe35mv2m3CMpheIa/view?usp=drivesdk" target='_blank'>
                                <Button name="See my Resume" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-lg md:text-lg sm:text-sm font-medium text-gray_gradient text-white">vipultandon.business@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About