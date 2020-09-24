import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import ResumePDF from './resume/resume.pdf';
import Header from '../components/Header';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const Resume = ({ resume }) => (
  <Layout>
    <Header />
    <Section.Container id="Resume" Background={Background}>
        <embed
          src={ResumePDF}
          type="application/pdf"
          width="1000px"
          height="100%"
        />
    </Section.Container>
    <Footer />
  </Layout>
);

export default Resume;
