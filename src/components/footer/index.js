import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-black">
            <div
                className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-bold text-white">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        1on1 Coaching
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Company Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        HR Consulting
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-white">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-white">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-white">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accessibility
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Returns Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Refund Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Hiring Statistics
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-white">Good emails.</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-white transition hover:opacity-75">
                                    Enter your email below to be the first to know about new collections and product launches.
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center justify-center">
                                        <input type="email" className="w-full h-12 bg-white pl-2 rounded-tl-lg rounded-bl-lg text-base font-semibold outline-0" placeholder="E-mail" id="" required />
                                        <input type="button" value="Submit" className="bg-secondary px-5 py-2 w-fit h-12 rounded-tr-lg rounded-br-lg text-white font-bold hover:bg-blue-800 transition-colors" />
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>

                <div className='flex justify-between max-sm:flex-col'>
                    <p className="text-xs text-white">
                        &copy; 2023. Company Name. All rights reserved.
                    </p>
                    <div className='text-3xl text-white font-bold max-sm:my-5'>
                        EnerjiVit
                    </div>
                    <div className='relative w-[313px] h-[28px] '>
                        <Image src="/images/img_1.png" alt='' fill sizes='100%' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer