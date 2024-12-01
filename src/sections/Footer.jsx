import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='c-space pt-6 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className="text-white-500 flex gap-2">
                <p>Mobile no</p>
                <p>|</p>
                <p>+91 8290604013</p>
            </div>

            <div className="flex gap-3">
                <a className="social-icon" href='https://github.com/mystificator' target="_blank">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a className="social-icon" href='https://leetcode.com/u/mystificator/' target='_blank'>
                    <img src="/assets/leetcode.svg" alt="leetcode" className="w-1/2 h-1/2" />
                </a>
                <a className="social-icon" href='https://www.linkedin.com/in/vipul-tandon/' target="_blank">
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© {currentYear} Vipul Tandon. All rights reserved.</p>
        </section>
    )
}

export default Footer