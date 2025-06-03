import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";

const Home = () => {
  const [text1] = useState("Hello...");
  const [text2, setText2] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const fullText =
    'I am <span class="blue-text"> Arekemase Ayomide </span>, a <span class="blue-text"> Frontend Developer </span> with 3 years of experience, proficient in building software with the following frontend technologies, <span class="blue-text">Javascript, React.js, Next.js, Redux, Bootstrap, Tailwind CSS and others.</span> I am constantly working on myself to improve my skills and I also love learning new technologies to add to my stack!';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText2(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 25);
  }, []);

  return (
    <>
      <div className="home">
        <div className="typing-demo">
          <p className="text-1">{text1}</p>
          <p className="text-2">
            <span
              className="typed-text"
              dangerouslySetInnerHTML={{ __html: text2 }}
            />
          </p>
          {typingComplete && (
            <a className="btn" href="/arekemase-ayomide.pdf" download>
              Résumé
            </a>
          )}
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Home;
