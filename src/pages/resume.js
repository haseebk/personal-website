import React from 'react';
import RLayout from '../components/RLayout';
import RSection from '../components/RSection';
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
  <RLayout>
    {/* <embed
        src={ResumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
        title="resume"
        data="resume.pdf?#zoom=100&scrollbar=1&toolbar=1&navpanes=0"
      ></embed> */}

    <RSection.RContainer id="Resume" Background={Background}>
      <embed
        src={ResumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </RSection.RContainer>

    {/* <iframe src={ResumePDF}
width="100%" height="300px"  /> */}
  </RLayout>
);

export default Resume;
