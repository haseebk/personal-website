import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import ResumePDF from './resume/resume.pdf';
import ResumeIMG from './resume/resume.jpg';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const Resume = ({ resume }) => (
  <Layout>
    {/* <embed
        src={ResumePDF}
        type="application/pdf"
        width="100%"
        height="600px"
        title="resume"
        data="resume.pdf?#zoom=100&scrollbar=1&toolbar=1&navpanes=0"
      ></embed> */}

    {/* <Section.Container id="Resume" Background={Background}>
      <embed
        src={ResumePDF}
        type="application/pdf"
        width="100%"
        height="900px"
      />
    </Section.Container> */}

{/* <iframe src={ResumePDF}
width="100%" height="300px"  /> */}
  <div id="x"></div>

<script>
var img = document.createElement("img");
 
img.src = {ResumeIMG};
var src = document.getElementById("x");
 
src.appendChild(img);
</script>
  
  </Layout>
);

export default Resume;
