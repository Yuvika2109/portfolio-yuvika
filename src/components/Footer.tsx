import { HStack, Text } from "@chakra-ui/react";
import { VscGitMerge, VscCheck, VscBell } from "react-icons/vsc";

interface Props { selectedPage: string; }
const langMap: Record<string,string> = {
  "home.jsx":"JavaScript JSX","about.js":"JavaScript","experience.json":"JSON","projects.py":"Python",
  "skills.ts":"TypeScript","education.sql":"SQL","certifications.md":"Markdown","achievements.yml":"YAML","contact.html":"HTML",
};
const Footer = ({ selectedPage }: Props) => (
  <HStack h="24px" px={3} justify="space-between" color="white" fontSize="12px">
    <HStack spacing={3}>
      <HStack spacing={1}><VscGitMerge size={14} /><Text>main</Text></HStack>
      <Text opacity={0.8}>0 errors, 0 warnings</Text>
    </HStack>
    <HStack spacing={4}>
      <Text>{langMap[selectedPage] || "Plain Text"}</Text>
      <HStack spacing={1}><VscCheck size={14} /><Text>Prettier</Text></HStack>
      <VscBell size={14} />
    </HStack>
  </HStack>
);
export default Footer;
