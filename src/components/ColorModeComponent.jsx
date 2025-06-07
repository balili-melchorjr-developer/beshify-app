import { Flex, useColorMode, Icon, Switch } from '@chakra-ui/react'
import React from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeComponent = () => {
    const{colorMode, toggleColorMode} = useColorMode() // {light:dark, updateValue}
  return (
    <Flex alignItems={"center"}>
        <Icon color="yellow.500" boxSize={6} mr={2} as={colorMode === 'light' ? FiMoon: FiSun}></Icon>
        <Switch
            id="color-mode"
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
        >
            
        </Switch>
    </Flex>
  )
}

export default ColorModeComponent