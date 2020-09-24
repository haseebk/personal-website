import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import ResumePDF from './resume/resume.pdf';
import Footer from '../components/Footer';

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
    <div id="resumePDF">
      <script src={ResumePDF}></script>
      <script>PDFObject.embed("/resume", "#resumePDF");</script>
    </div>

    {/* <embed
        src={ResumePDF}
        width="100%"
        height="100%"
        type="application/pdf"
        title="resume"
        data="resume.pdf?#zoom=100&scrollbar=1&toolbar=1&navpanes=1"
      ></embed> */}

    {/* <Section.Container id="Resume" Background={Background}>
        <Box m="auto">
          <embed
          src={ResumePDF}
          type="application/pdf"
          width="100%"
        />
        </Box>
    </Section.Container> */}

    {/* <Section.Container id="Resume" Background={Background}>
      <embed
        src={ResumePDF}
        type="application/pdf"
        width="100%"
        height="100vh"
      />
    </Section.Container> */}
  </Layout>
);

export default Resume;
