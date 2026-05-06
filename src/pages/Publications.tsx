import { VStack, Text, Box, HStack, Divider, Button, Link, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import { publications } from "../data/publications";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Publications = ({ setPage }: Props) => {
  useEffect(() => { setPage("publications.bib"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <VStack align="left" p={{ base: 5, md: 10 }} spacing={2} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#569CD6" fontWeight="700" fontSize="20px"># Publications</Text>
        <Box h={2}/><Divider borderColor="#3c3c3c"/><Box h={2}/>
        {publications.map((p, i) => (
          <Box key={i} mb={6} pl={2} borderLeft="3px solid #0BCEAF" _hover={{ borderLeftColor: "#DCDCAA" }} transition="all 0.2s">
            <Text color="#569CD6" fontWeight="700" fontSize="16px">## {p.title}</Text>
            <HStack spacing={2} mt={1} flexWrap="wrap">
              <Badge bg="transparent" border="1px solid #569CD6" color="#569CD6" borderRadius="full" px={2} fontSize="11px" textTransform="none">{p.type}</Badge>
              <Badge bg="transparent" border="1px solid #0BCEAF" color="#0BCEAF" borderRadius="full" px={2} fontSize="11px" textTransform="none">{p.date}</Badge>
            </HStack>
            <HStack spacing={2} mt={1}><Text color="#D4D4D4">-</Text><Text color="#569CD6" fontWeight="700">Publisher:</Text><Text color="gray.300">{p.venue}</Text></HStack>
            <HStack spacing={2} flexWrap="wrap"><Text color="#D4D4D4">-</Text><Text color="#569CD6" fontWeight="700">Book:</Text><Text color="gray.300" wordBreak="break-word">"{p.book}"</Text></HStack>
            <Text pl={4} color="#CE9178" mt={1} wordBreak="break-word">{p.description}</Text>
            <Link href={p.doiUrl} isExternal _hover={{ textDecoration: "none" }} mt={2} display="inline-block">
              <Button size="xs" bg="transparent" border="1px solid #0BCEAF" color="#0BCEAF" borderRadius="md"
                _hover={{ bg: "rgba(11,206,175,0.15)" }} leftIcon={<VscLinkExternal />} fontFamily="'Fira Code',monospace" fontSize="11px">
                View Publication
              </Button>
            </Link>
          </Box>
        ))}
        <Divider borderColor="#3c3c3c"/><Box h={2}/>
        <Text color="#CE9178">{">"} Peer-reviewed and published works.</Text>
      </VStack>
    </MBox>
  );
};
export default Publications;
