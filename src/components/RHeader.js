import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const RHeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
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
  <RHeaderContainer>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <SectionLinks>
        {({ allLinks }) => {
          const { home } = formatLinks(allLinks);

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
          return (
            <Fragment>
              {homeLink}
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </RHeaderContainer>
);

export default Header;
