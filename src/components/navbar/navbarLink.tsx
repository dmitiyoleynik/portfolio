import { styled } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const StyledScrollLink = styled(ScrollLink, {
  baseStyle: {
    padding: '0.25rem 0.75rem',
    fontSize: '0.875rem',
    borderRadius: 'full',
    transition: 'background-color 0.5s easeInOut',
    margin: '0 0.5rem',
    cursor: 'pointer',
    color: 'gray.400',
    _hover: {
      color: 'gray.600',
    },
    '&.active': {
      color: 'white',
      backgroundColor: 'gray.400',
    },
  },
});

export default StyledScrollLink;
