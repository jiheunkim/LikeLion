import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>소개 페이지로 이동했습니다.</p>

      <Link to="/likelion">Success</Link>
      
    </div>
  );
};

export default About;
