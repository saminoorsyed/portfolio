import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDatabase,
  FaLeaf,
  FaFontAwesome,
} from "react-icons/fa";

export default function Technologies() {
  return (
    <article className="landingTech">
      <h2>Technologies</h2>

      {/* div to contain a list of tech skills */}
      <div className="technologies">
        <div className="techType">
          <h4> Skills </h4>
          <div className="cardContent">
            
            <div className="tech">
              <FaHtml5 className="icon" />
              <p>HTML</p>
            </div>

            <div className="tech">
              <FaCss3Alt className="icon" />
              <p>CSS</p>
            </div>

            <div className="tech">
              <FaJsSquare className="icon" />
              <p>JavaScript</p>
            </div>

            <div className="tech">
              <FaReact className="icon" />
              <p>React</p>
            </div>

            <div className="tech">
              <FaNodeJs className="icon" />
              <p>ExpressJs</p>
            </div>

            <div className="tech">
              <FaGithub className="icon" />
              <p>Git/GitHub</p>
            </div>

            <div className="tech">
              <FaPython className="icon" />
              <p>Python</p>
            </div>

            <div className="tech">
              <FaFontAwesome className="icon" />
              <p>MASM</p>
            </div>

            <div className="tech">
              <FaDatabase className="icon" />
              <p>SQL</p>
            </div>

            <div className="tech">
              <FaLeaf className="icon" />
              <p>MongoDb</p>
            </div>
          </div>
        </div>

        <div className="techType">
          <h4>Interests</h4>
          <div className="cardContent">
            <p>
              I am particularly interested full stack web development, and look
              forward to learning more about cloud and mobile development. Eventually, I
              would like to explore computer vision and augmented reality
              projects.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
