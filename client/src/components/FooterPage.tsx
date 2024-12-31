"use client";

import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import '@/styles/style.css'


export function FooterPage() {
  return (
    <footer className="flex-grow mb-0">
      <div className="footer-content">
        <div className="maxlearn wd">
          <h3>MaxLearn</h3>
          <p>
            Roadmap, and the actual curriculum may vary depending on the
            university or college you attend.
          </p>
          <div className="iii">
            <i className="bx bx-code-block"></i>
            <i className="bx bx-code-alt"></i>
            <i className="bx bx-math"></i>
          </div>
        </div>
        <hr />
        <div className="explore wd h2-exf">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/courses">Courses</a>
            </li>
            
            <li>
              <a href="courses/subject/1">Learn DSA</a>
            </li>
            <li>
              <a href="courses/subject/3">Learn Development</a>
            </li>
            <li>
              <a href="courses/subject/2">Learn Core Subjects</a>
            </li>
          </ul>
        </div>

        <div className="contact wd h2-exf">
          <h3>Contact</h3>
          <a href="mailto:Lalitmaxy@gmail.com">Lalitmaxy@gmail.com</a>
          <p>+91 6202-597-511</p>
          <a href="mailto:Suryansh.rajs96@gmail.com">Suryansh.rajs96@gmail.com</a>
          <p>+91 8765-946-737</p>
        </div>

        <div className="follow wd h2-exf">
          <h3>Follow Us</h3>
          <div className="social-media">
            <div>
            <a href="https://github.com/Lalitmax">
              <BsGithub /> GitHub
            </a>
            
            </div>
            <a href="https://twitter.com/lalit__max">
              <BsTwitter /> Twitter
            </a>
            <a href="https://instagram.com/lalit.max?igshid=MzNlNGNkZWQ4Mg==">
              <BsInstagram /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/lalitmax">
              <BsLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      

      <div className="reserved-footer">
        <p style={{ color: "#fff", fontWeight: "bold" }} className="foo-p">
          Made With {" "}
          <a href="#home">
            <span>&#x2665;&#xfe0f; </span>
          </a>
          by Lalit & Suryansh
        </p>
      </div>
    </footer>
  );
}
