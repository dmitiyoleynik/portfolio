import { useBreakpointValue } from '@chakra-ui/react';

const useIsSmallScreen = () => useBreakpointValue({ base: true, md: false });

export default useIsSmallScreen;
