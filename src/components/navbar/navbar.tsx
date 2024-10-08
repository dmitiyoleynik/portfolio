import { Flex } from '@chakra-ui/react';

import { sectionsNames } from 'appConstants';
import StyledScrollLink from 'components/navbar/navbarLink';
import useIsSmallScreen from 'hooks/useIsSmallScreen';

const Navbar = () => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Flex
      as="nav"
      bg="gray.900"
      color="white"
      align="center"
      justify="center"
      padding="0.5rem"
      borderRadius={isSmallScreen ? 'none' : 'full'}
      boxShadow="md"
      position="fixed"
      top={isSmallScreen ? 'none' : '1rem'}
      left="50%"
      transform="translateX(-50%)"
      width={isSmallScreen ? '100%' : 'auto'}
      zIndex="1000"
      wrap={isSmallScreen ? 'wrap' : 'nowrap'}
    >
      {sectionsNames.map(sectionName => (
        <StyledScrollLink
          key={sectionName}
          to={sectionName}
          smooth={true}
          spy={true}
          offset={-150}
          duration={1000}
          activeClass="active"
        >
          {sectionName}
        </StyledScrollLink>
      ))}
    </Flex>
  );
};

export default Navbar;
