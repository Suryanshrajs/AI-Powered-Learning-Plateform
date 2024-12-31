
"use client"
import React from 'react';
import '@/styles/style.css'
import { useRouter } from 'next/navigation';
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
                            <button onClick={() =>handleClick() }
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
                        <img src="/1.png" alt="pc img" width="1200px" />
                    </div>
                </section>

                <section className="about-section">
                    <div className="left-about">
                        <h1>About Us</h1>
                        <img src="ssssss-removebg-preview.png" alt="About Us" />
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
                            <img src="/love-babbar.webp" alt="Love Babbar" />
                            <h1>Love Babbar</h1>
                            <h3>Ex-Microsoft</h3>
                        </div>

                        <div className="img-name">
                            <img src="/apna.jpeg" alt="Shradha Khapra" />
                            <h1>Shradha Khapra</h1>
                            <h3>Ex-Microsoft</h3>
                        </div>

                        <div className="img-name">
                            <img src="/gp_sir.jpg" alt="Gajendra Purohit" />
                            <h1>Gajendra Purohit</h1>
                            <h3>Maths</h3>
                        </div>

                        <div className="img-name">
                            <img src="/codewithharry.jpg" alt="CodeWithHarry" />
                            <h1>CodeWithHarry</h1>
                            <h3>Python, C, GitHub</h3>
                        </div>

                        <div className="img-name">
                            <img src="/gates_mesar2.jpg" alt="Gate Smashers" />
                            <h1>Gate Smashers</h1>
                            <h3>Core Subject</h3>
                        </div>

                        <div className="img-name">
                            <img src="/sher2.png" alt="Sheriyans Coding" />
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
                            <img src="/dell.png" alt="Dell" />
                        </div>
                        <div className="c-img">
                            <img src="/wipro.png" alt="Wipro" />
                        </div>
                        <div className="c-img">
                            <img src="/amazon.png" alt="Amazon" height="55px" />
                        </div>
                        <div className="c-img">
                            <img src="/microshoft.png" alt="Microsoft" />
                        </div>
                        <div className="c-img">
                            <img src="/oyo.png" alt="Oyo" />
                        </div>
                        <div className="c-img oracle-hd">
                            <img src="/oracle.png" alt="Oracle" />
                        </div>
                        <div className="c-img">
                            <img src="/paypal.png" alt="PayPal" />
                        </div>
                        <div className="c-img">
                            <img src="/ibm.png" alt="IBM" />
                        </div>
                        <div className="c-img">
                            <img src="/paytm.png" alt="Paytm" />
                        </div>
                        <div className="c-img">
                            <img src="/flipkart.png" alt="Flipkart" />
                        </div>
                        <div className="c-img">
                            <img src="/Deloitte.png" alt="Deloitte" />
                        </div>
                        <div className="c-img">
                            <img src="/unacademy.png" alt="Unacademy" />
                        </div>
                        <div className="c-img microshoft-h">
                            <img src="/RE1Mu3b.png" alt="Microsoft" />
                        </div>
                        <div className="c-img">
                            <img src="/jpmlogo.svg" alt="JPMorgan" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainPage;
