import { VStack, Text, Box, HStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { educationList } from "../data/education";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Education = ({ setPage }: Props) => {
  useEffect(() => { setPage("education.sql"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={2} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#6A9955">{"// education.ts — Academic Background — Yuvika Mehta"}</Text>
        <Box h={4}/>
        <HStack spacing={2}><Text color="#569CD6">interface</Text><Text color="#4EC9B0">Education</Text><Text color="#D4D4D4">{"{"}</Text></HStack>
        <Text pl={4}><Text as="span" color="#9CDCFE">degree</Text>: <Text as="span" color="#4EC9B0">string</Text>;</Text>
        <Text pl={4}><Text as="span" color="#9CDCFE">institution</Text>: <Text as="span" color="#4EC9B0">string</Text>;</Text>
        <Text pl={4}><Text as="span" color="#9CDCFE">score</Text>: <Text as="span" color="#4EC9B0">string</Text>;</Text>
        <Text color="#D4D4D4">{"}"}</Text>
        <Box h={4}/>
        <HStack spacing={2}>
          <Text color="#569CD6">const</Text><Text color="#9CDCFE">academicRecord</Text><Text color="#D4D4D4">:</Text>
          <Text color="#4EC9B0">Education[]</Text><Text color="#D4D4D4">=</Text><Text color="#FFD700">{"["}</Text>
        </HStack>
        {educationList.map((edu, idx) => (
          <Box key={idx} pl={4} mb={2}>
            <Text color="#FFD700">{"{"}</Text>
            <Box pl={4}>
              <Text><Text as="span" color="#9CDCFE">degree</Text>: <Text as="span" color="#CE9178">"{edu.degree}"</Text>,</Text>
              <Text><Text as="span" color="#9CDCFE">institution</Text>: <Text as="span" color="#CE9178">"{edu.institution}"</Text>,</Text>
              <Text><Text as="span" color="#9CDCFE">period</Text>: <Text as="span" color="#CE9178">"{edu.period}"</Text>,</Text>
              <Text><Text as="span" color="#9CDCFE">score</Text>: <Text as="span" color="#B5CEA8">"{edu.score}"</Text>,</Text>
              {(edu as any).highlight && (
                <HStack mt={1}>
                  <Text color="#9CDCFE">highlight:</Text>
                  <Badge bg="rgba(11,206,175,0.15)" color="#0BCEAF" borderRadius="md" px={2} fontSize="11px">{(edu as any).highlight}</Badge>
                </HStack>
              )}
              {edu.coursework.length > 0 && (
                <>
                  <Text><Text as="span" color="#9CDCFE">coursework</Text>: <Text as="span" color="#FFD700">{"["}</Text></Text>
                  {edu.coursework.map((c, ci) => (
                    <Text key={ci} pl={4} color="#CE9178">"{c}"{ci < edu.coursework.length - 1 ? "," : ""}</Text>
                  ))}
                  <Text color="#FFD700">{"]"}</Text>
                </>
              )}
            </Box>
            <Text color="#FFD700">{"}"}{idx < educationList.length - 1 ? "," : ""}</Text>
          </Box>
        ))}
        <Text color="#FFD700">{"]"}</Text>
        <Box h={4}/>
        <Text color="#6A9955">{"// Total records: " + educationList.length + " ✓"}</Text>
      </VStack>
    </MBox>
  );
};
export default Education;
