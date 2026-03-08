import { HStack, Text, Box, Image, Show } from "@chakra-ui/react";
import VSCodeLogo from "/assets/vscode_icon.svg";

const ToolBar = () => {
  const tools = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];
  return (
    <HStack justifyContent="space-between" h="32px" px={3} alignItems="center">
      <HStack spacing={2}>
        <Image src={VSCodeLogo} boxSize="16px" />
        <Show above="lg">
          {tools.map((t) => (
            <Text key={t} fontSize="12px" mx="3px" userSelect="none" cursor="pointer" color="gray.400" _hover={{ color: "white" }}>{t}</Text>
          ))}
        </Show>
      </HStack>
      <Text fontSize={{ base: "10px", md: "12px" }} position="absolute" left="50%" transform="translateX(-50%)" color="gray.400" userSelect="none">
        Yuvika Mehta — Portfolio
      </Text>
      <HStack spacing={2}>
        <Box w="12px" h="12px" borderRadius="50%" bg="#f5bf4f" />
        <Box w="12px" h="12px" borderRadius="50%" bg="#5bb98b" />
        <Box w="12px" h="12px" borderRadius="50%" bg="#f14c4c" />
      </HStack>
    </HStack>
  );
};
export default ToolBar;
