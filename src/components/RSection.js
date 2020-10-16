import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const RSectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  justify-content: center;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

const DefaultBackground = () => <div />;

const RContainer = ({ id, children, Background = DefaultBackground }) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <RSectionContainer>{children}</RSectionContainer>
  </Section>
);

RContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name, icon = '', label = '' }) => (
  <Slide left>
    <Heading color="secondaryDark" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  RContainer,
  Header,
};
