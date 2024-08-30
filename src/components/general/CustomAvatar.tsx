import { Box, Image } from '@chakra-ui/react';

interface CustomAvatarProps {
  name: string;
  src: string;
  size?: string;
  marginBottom?: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  name,
  src,
  size = '96px',
  marginBottom = '2rem',
}) => {
  return (
    <Box
      width={size}
      height={size}
      borderRadius="full"
      overflow="hidden"
      marginBottom={marginBottom}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.200"
    >
      <Image
        src={src}
        alt={name}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default CustomAvatar;
