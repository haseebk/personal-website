import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

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

const Resume = ({
  resume
}) => (
  <Layout>
    <Section.Container id="Resume" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading
          color="primaryDark"
          fontSize={['8rem', '12rem', '14rem']}
          as="h1"
        >
          <embed src="resume/resume.pdf#toolbar=0" type="application/pdf" width="100%" height="600px"/>
            {/* <a id="resume" href="resume/Muhammad Tariq - Resume.pdf">Resume</a> */}


          Resume
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default Resume;
