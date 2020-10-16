import React from 'react';
import RLayout from '../components/RLayout';
import RSection from '../components/RSection';
import Triangle from '../components/Triangle';
import ResumePDF from './resume/resume.pdf';

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
    <RSection.RContainer id="Resume" Background={Background}>
      <iframe
      
        // src={ResumePDF}
        src="/static/resume-2124ccc316960f7b0b62a9c9b4c366c4.pdf#view=FitH"
        type="application/pdf"
        alt="Resume"
        width="100%"
      />
    </RSection.RContainer>
  </RLayout>
);

export default Resume;
