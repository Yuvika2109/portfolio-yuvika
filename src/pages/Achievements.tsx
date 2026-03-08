import { VStack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { achievements, extracurriculars } from "../data/achievements";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Achievements = ({ setPage }: Props) => {
  useEffect(() => { setPage("achievements.yml"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={2} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#6A9955"># achievements.yml — Yuvika Mehta</Text>
        <Box h={4}/>
        <Text color="#569CD6" fontWeight="600">achievements:</Text><Box h={2}/>
        {achievements.map((a, i) => (
          <Box key={i} pl={4} mb={4}>
            <Text><Text as="span" color="#D4D4D4">- </Text><Text as="span" color="#569CD6">title: </Text><Text as="span" color="#CE9178">"{a.title}"</Text></Text>
            <Text pl={4}><Text as="span" color="#569CD6">detail: </Text><Text as="span" color="#CE9178">"{a.detail}"</Text></Text>
            <Text pl={4}><Text as="span" color="#569CD6">org: </Text><Text as="span" color="#CE9178">"{a.org}"</Text></Text>
          </Box>
        ))}
        <Box h={4}/>
        <Text color="#569CD6" fontWeight="600">extracurriculars:</Text><Box h={2}/>
        {extracurriculars.map((e, i) => (
          <Box key={i} pl={4} mb={4}>
            <Text><Text as="span" color="#D4D4D4">- </Text><Text as="span" color="#569CD6">role: </Text><Text as="span" color="#CE9178">"{e.role}"</Text></Text>
            <Text pl={4}><Text as="span" color="#569CD6">org: </Text><Text as="span" color="#CE9178">"{e.org}"</Text></Text>
            {e.period && <Text pl={4}><Text as="span" color="#569CD6">period: </Text><Text as="span" color="#CE9178">"{e.period}"</Text></Text>}
            <Text pl={4}><Text as="span" color="#569CD6">detail: </Text><Text as="span" color="#CE9178">"{e.detail}"</Text></Text>
          </Box>
        ))}
      </VStack>
    </MBox>
  );
};
export default Achievements;
