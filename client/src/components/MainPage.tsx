"use client"
import React from 'react';
import '@/styles/style.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image component from next/image

const MainPage = () => {

    const router = useRouter();
    function handleClick() {
        router.push('/courses');
    }

    return (
        <div className="main-content flex justify-center">
            <div className="content-list">
                <section className="hero-section">
                    <div className="left-hero">
                        <h1 className="learn-with">
                            Learn with <span>Faang</span> Tutor
                        </h1>
                        <p>
                            Complete Roadmap to Become a Software Engineer <span>Structured Manner</span>
                        </p>
                        <div className="hero-button">
                            <button onClick={() => handleClick()}
                                className="btn"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #020024 0%, rgb(33, 57, 101) 60%, var(--main-color) 100%)",
                                    color: "#fff",
                                }}
                            >
                                Get Start
                            </button>
                        </div>
                    </div>
                    <div className="right-hero">
                        <Image src="/1.png" alt="pc img" width={1200} height={800} />
                    </div>
                </section>

                <section className="about-section">
                    <div className="left-about">
                        <h1>About Us</h1>
                        <Image src="/ssssss-removebg-preview.png" alt="About Us" width={500} height={300} />
                    </div>
                    <div className="right-about">
                        <div className="r-upper">
                            <h1>Mocombo</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat a voluptatibus. Dolorum,
                                facilis vitae sit explicabo amet neque autem! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Doloremque facere cumque.
                            </p>
                        </div>
                        <div className="r-lower">
                            <h1>B Tech</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat a voluptatibus. Dolorum,
                                facilis vitae sit explicabo amet neque autem! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maiores voluptatibus harum!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="meet-instructor mi">
                    <div className="instructor">
                        <h1>
                            Meet Your <span>Instructor</span>
                        </h1>
                    </div>
                    <div className="instructor-img">
                        <div className="img-name">
                            <Image src="/love-babbar.webp" alt="Love Babbar" width={120} height={120} />
                            <h1>Love Babbar</h1>
                            <h3>Ex-Microsoft</h3>
                        </div>

                        <div className="img-name">
                            <Image src="/apna.jpeg" alt="Shradha Khapra" width={120} height={120} />
                            <h1>Shradha Khapra</h1>
                            <h3>Ex-Microsoft</h3>
                        </div>

                        <div className="img-name">
                            <Image src="/gp_sir.jpg" alt="Gajendra Purohit" width={120} height={120} />
                            <h1>Gajendra Purohit</h1>
                            <h3>Maths</h3>
                        </div>

                        <div className="img-name">
                            <Image src="/codewithharry.jpg" alt="CodeWithHarry" width={120} height={120} />
                            <h1>CodeWithHarry</h1>
                            <h3>Python, C, GitHub</h3>
                        </div>

                        <div className="img-name">
                            <Image src="/gates_mesar2.jpg" alt="Gate Smashers" width={120} height={120} />
                            <h1>Gate Smashers</h1>
                            <h3>Core Subject</h3>
                        </div>

                        <div className="img-name">
                            <Image src="/sher2.png" alt="Sheriyans Coding" width={120} height={120} />
                            <h1>Sheriyans Coding</h1>
                            <h3>Web Development</h3>
                        </div>
                    </div>
                </section>

                <section className="companies">
                    <h1>
                        Achievers <span>Work</span> With
                    </h1>
                    <div className="company-img">
                        <div className="c-img">
                            <Image src="/dell.png" alt="Dell" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/wipro.png" alt="Wipro" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/amazon.png" alt="Amazon" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/microshoft.png" alt="Microsoft" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/oyo.png" alt="Oyo" width={100} height={55} />
                        </div>
                        <div className="c-img oracle-hd">
                            <Image src="/oracle.png" alt="Oracle" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/paypal.png" alt="PayPal" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/ibm.png" alt="IBM" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/paytm.png" alt="Paytm" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/flipkart.png" alt="Flipkart" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/Deloitte.png" alt="Deloitte" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/unacademy.png" alt="Unacademy" width={100} height={55} />
                        </div>
                        <div className="c-img microshoft-h">
                            <Image src="/RE1Mu3b.png" alt="Microsoft" width={100} height={55} />
                        </div>
                        <div className="c-img">
                            <Image src="/jpmlogo.svg" alt="JPMorgan" width={100} height={55} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainPage;
