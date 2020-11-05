import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const TextHeader = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: background-color 0.1s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <SectionLinks>
        {({ allLinks }) => {
          const { home, links } = formatLinks(allLinks);

          const homeLink = home && (
            <Image
              src={Logo}
              width="50px"
              alt="Portfolio Logo"
              onClick={home.onClick}
              style={{
                cursor: 'pointer',
              }}
            />
          );
          const navLinks = links.map(({ name, value }) => (
            <RouteLink
              key={name}
              onClick={value.onClick}
              selected={value.isSelected}
              name={name}
            />
          ));

          <TextHeader fontSize={[2, 3]}>
            <Link href="https://www.haseebkhan.ca/resume" mr={1}>
                  Resume
            </Link>
            
          </TextHeader>;

          return (
            <Fragment>
              {homeLink}
              <Flex mr={[0, 3, 5]}>
                {navLinks}
                {TextHeader}
              </Flex>
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </HeaderContainer>
);

export default Header;
