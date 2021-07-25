import { Flex, useColorMode } from '@chakra-ui/react';

const Container = (props) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.50', dark: 'gray.900' };
	const color = { light: 'black', dark: 'white' };

	return (
		<Flex
			d='flex'
			direction='column'
			alignItems='center'
			justifyContent='flex-start'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			{...props}
		/>
	);
};

export default Container;
