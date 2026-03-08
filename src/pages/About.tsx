import { VStack, Text, HStack, Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { aboutMe } from "../data/about";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const About = ({ setPage }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => { setPage("about.js"); }, []);
  const downloadCV = () => {
    setLoading(true);
    const a = document.createElement("a"); a.href = aboutMe.cvPath; a.download = aboutMe.cvFileNameAfterDownload;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); setLoading(false);
  };
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={6} fontFamily="'Fira Code',monospace">
        <Box color="#6A9955" fontSize="14px" lineHeight="1.8">
          <Text>{"/**"}</Text>
          <Text pl={2}>* @file about.js</Text>
          <Text pl={2}>* @author Yuvika Mehta</Text>
          <Text>{"*/"}</Text>
        </Box>
        <Box fontSize="14px" lineHeight="1.8">
          <HStack spacing={2}><Text color="#569CD6">class</Text><Text color="#4EC9B0">Developer</Text><Text color="#D4D4D4">{"{"}</Text></HStack>
          <Box pl={6} mt={4}>
            <HStack spacing={2}><Text color="#DCDCAA">getSummary</Text><Text color="#D4D4D4">{"() {"}</Text></HStack>
            <Box pl={6}><Text color="#569CD6">return</Text>
              {aboutMe.description.map((t, i) => <Text key={i} color="#CE9178" pl={4} mt={1}>{'"'+t+'"'}</Text>)}
            </Box>
            <Text pl={4} color="#D4D4D4">{"}"}</Text>
          </Box>
          <Box pl={6} mt={6}>
            <HStack spacing={2}><Text color="#DCDCAA">getInterests</Text><Text color="#D4D4D4">{"() {"}</Text></HStack>
            <Box pl={6}><HStack spacing={2}><Text color="#569CD6">return</Text><Text color="#FFD700">{"["}</Text></HStack>
              {aboutMe.interests.map((s, i) => <Text key={i} color="#CE9178" pl={8}>{'"'+s+'"'}{i<aboutMe.interests.length-1?",":""}</Text>)}
              <Text color="#FFD700" pl={6}>{"]"}</Text>
            </Box>
            <Text pl={4} color="#D4D4D4">{"}"}</Text>
          </Box>
          <Text color="#D4D4D4" mt={4}>{"}"}</Text>
        </Box>
        <Button mt={4} w="200px" bg="#0BCEAF" color="white" onClick={downloadCV}
          _hover={{ bg: "#09a88d" }} isLoading={loading} loadingText="Downloading..." leftIcon={<FaDownload />}>
          Download CV
        </Button>
      </VStack>
    </MBox>
  );
};
export default About;
