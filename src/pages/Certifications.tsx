import { VStack, Text, Box, HStack, Divider, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import { certifications } from "../data/certifications";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Certifications = ({ setPage }: Props) => {
  useEffect(() => { setPage("certifications.md"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={2} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#569CD6" fontWeight="700" fontSize="20px"># Professional Certifications</Text>
        <Box h={2}/><Divider borderColor="#3c3c3c"/><Box h={2}/>
        {certifications.map((c, i) => (
          <Box key={i} mb={6} pl={2} borderLeft="3px solid #0BCEAF" _hover={{ borderLeftColor: "#DCDCAA" }} transition="all 0.2s">
            <Text color="#569CD6" fontWeight="700" fontSize="16px">## {c.name}</Text>
            <HStack spacing={2} mt={1}><Text color="#D4D4D4">-</Text><Text color="#569CD6" fontWeight="700">Issuer:</Text><Text color="gray.300">{c.issuer}</Text></HStack>
            <HStack spacing={2}><Text color="#D4D4D4">-</Text><Text color="#569CD6" fontWeight="700">Focus:</Text><Text color="gray.300">{c.focus}</Text></HStack>
            <Link href={c.credentialUrl} isExternal _hover={{ textDecoration: "none" }} mt={2} display="inline-block">
              <Button size="xs" bg="transparent" border="1px solid #0BCEAF" color="#0BCEAF" borderRadius="md"
                _hover={{ bg: "rgba(11,206,175,0.15)" }} leftIcon={<VscLinkExternal />} fontFamily="'Fira Code',monospace" fontSize="11px">
                View Credential
              </Button>
            </Link>
          </Box>
        ))}
        <Divider borderColor="#3c3c3c"/><Box h={2}/>
        <Text color="#CE9178">{">"} All certifications verified and up to date.</Text>
      </VStack>
    </MBox>
  );
};
export default Certifications;
