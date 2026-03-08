import { VStack, Text, Box, HStack, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { technicalSkills } from "../data/about";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Skills = ({ setPage }: Props) => {
  useEffect(() => { setPage("skills.ts"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={6}>
        <Box fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
          <Text color="#6A9955">{"// skills.ts — Technical Skills — Yuvika Mehta"}</Text>
          <Box mt={4}>
            <HStack spacing={2}><Text color="#569CD6">interface</Text><Text color="#4EC9B0">SkillCategory</Text><Text color="#D4D4D4">{"{"}</Text></HStack>
            <Text pl={4}><Text as="span" color="#9CDCFE">category</Text>: <Text as="span" color="#4EC9B0">string</Text>;</Text>
            <Text pl={4}><Text as="span" color="#9CDCFE">skills</Text>: <Text as="span" color="#4EC9B0">string[]</Text>;</Text>
            <Text color="#D4D4D4">{"}"}</Text>
          </Box>
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={6}>
          {Object.entries(technicalSkills).map(([cat, skills]) => (
            <GridItem key={cat} bg="#1a1a1a" border="1px solid #3c3c3c" borderRadius="lg" p={5} transition="all 0.3s"
              _hover={{ transform: "translateY(-2px)", borderColor: "rgba(11,206,175,0.3)", boxShadow: "0 4px 12px rgba(11,206,175,0.1)" }}>
              <Text fontWeight="bold" fontSize="sm" color="#0BCEAF" mb={4} fontFamily="'Fira Code',monospace">{cat}</Text>
              <VStack align="start" spacing={2}>
                {skills.map(s => <HStack key={s} spacing={3}><Box w="6px" h="6px" borderRadius="full" bg="#0BCEAF" flexShrink={0}/><Text fontSize="13px" color="gray.300">{s}</Text></HStack>)}
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </MBox>
  );
};
export default Skills;
