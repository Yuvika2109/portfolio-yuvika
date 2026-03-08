import { VStack, Text, Box, HStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { experiences } from "../data/experience";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Experience = ({ setPage }: Props) => {
  useEffect(() => { setPage("experience.json"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={2} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#D4D4D4">{"{"}</Text>
        <Text pl={4} color="#9CDCFE">"experience": <Text as="span" color="#FFD700">{"["}</Text></Text>
        {experiences.map((exp, idx) => (
          <Box key={idx} pl={8}>
            <Text color="#FFD700">{"{"}</Text>
            <Box pl={6}>
              <HStack spacing={2} flexWrap="wrap"><Text color="#9CDCFE">"role":</Text><Text color="#CE9178">"{exp.role}",</Text></HStack>
              <HStack spacing={2} flexWrap="wrap"><Text color="#9CDCFE">"company":</Text><Text color="#CE9178">"{exp.company}",</Text></HStack>
              <HStack spacing={2} flexWrap="wrap"><Text color="#9CDCFE">"period":</Text><Text color="#CE9178">"{exp.period}",</Text></HStack>
              <HStack spacing={2} flexWrap="wrap"><Text color="#9CDCFE">"location":</Text><Text color="#CE9178">"{exp.location}",</Text></HStack>
              <Text color="#9CDCFE">"highlights": <Text as="span" color="#FFD700">{"["}</Text></Text>
              {exp.highlights.map((h, i) => <Text key={i} pl={4} color="#CE9178" wordBreak="break-word">"{h}"{i<exp.highlights.length-1?",":""}</Text>)}
              <Text color="#FFD700">{"]"}</Text>
              {exp.tech && <HStack mt={2} spacing={2} flexWrap="wrap">
                {exp.tech.map(t => <Badge key={t} bg="transparent" border="1px solid #0BCEAF" color="#0BCEAF" borderRadius="full" px={2} fontSize="11px" textTransform="none">{t}</Badge>)}
              </HStack>}
            </Box>
            <Text color="#FFD700">{"}"}{idx<experiences.length-1?",":""}</Text>
            {idx<experiences.length-1 && <Box h={4}/>}
          </Box>
        ))}
        <Text pl={4} color="#FFD700">{"]"}</Text>
        <Text color="#D4D4D4">{"}"}</Text>
      </VStack>
    </MBox>
  );
};
export default Experience;
