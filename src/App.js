import React ,{ useRef } from "react";
import "./App.css"; // Add your CSS styling here
import profileImage from "./WhatsApp Image 2023-10-16 at 3.44.47 PM.jpeg"; 
function App() {
  const bioRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="header">
      
      <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="circle-border"></div>
        </div>
        <h1>Gujjarlapudi Ketan sai</h1>
        <hi>+91 7093594331</hi>
        <p>gujjarlapudiketansai@gmail.com</p>
        <h3>Web Developer and AI and ML</h3>
      </header>

      <section className="bio" style={{textAlign:'center'}}>
        <h2>Bio</h2>
        <p>Date of Birth: 23/05/2004</p>
        <p>Place : Vijayawada</p>
      </section>

      <section className="education">
        <h2 style={{textAlign:'center'}}>Education</h2>
        <div className="school">
          <h3>School</h3>
          <p>Nalanda Vidya Niketan</p>
        </div>

        <div className="intermediate">
          <h3>Intermediate</h3>
          <p>Gravitty</p>
        </div>

        <div className="btech">
          <h3>B.Tech</h3>
          <p>Vit-ap</p>
        </div>
      </section>
      <section className="hobbies">
        <h2 style={{textAlign:'center'}}>Hobbies</h2>
        <ul>
          <li>PLAYING</li>
          <li>READING</li>
          <li>DANCING</li>
        </ul>
      </section>

      <section className="skills">
        <h2 style={{textAlign:'center'}}>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>PYTHON</li>
          <li>AI AND ML</li>
          <li>JAVA</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

