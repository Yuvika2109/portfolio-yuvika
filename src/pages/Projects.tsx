import { VStack, Text, Box, HStack, Badge, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { projects } from "../data/projects";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Projects = ({ setPage }: Props) => {
  useEffect(() => { setPage("projects.py"); }, []);
  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Box p={{ base: 5, md: 10 }}>
        <Box fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8" mb={8}>
          <Text color="#6A9955"># projects.py — Yuvika Mehta</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
          {projects.map((p, i) => (
            <Box key={i} bg="#1a1a1a" border="1px solid #3c3c3c" borderRadius="lg" overflow="hidden" transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "0 8px 24px rgba(11,206,175,0.15)", borderColor: "rgba(11,206,175,0.4)" }}>
              {/* Project Image */}
              {(p as any).Image ? (
                <Image src={(p as any).Image} h="160px" w="100%" objectFit="cover" borderBottom="1px solid #3c3c3c" />
              ) : (
                <Box h="120px" bg="#252526" display="flex" alignItems="center" justifyContent="center" borderBottom="1px solid #3c3c3c"
                  fontFamily="'Fira Code',monospace" position="relative" overflow="hidden">
                  {/* TODO: Add project screenshots in /public/assets/ and update Image field in src/data/projects.ts */}
                  <Text color="#858585" fontSize="xs">Add project screenshot</Text>
                </Box>
              )}
              <VStack align="left" p={5} spacing={3}>
                <Text fontWeight="bold" fontSize="md" color="white">{p.Title}</Text>
                <Text fontSize="11px" color="#858585" fontFamily="'Fira Code',monospace">{p.Date}</Text>
                {(p as any).Award && <Badge bg="rgba(11,206,175,0.15)" color="#0BCEAF" borderRadius="md" px={2} py={1} fontSize="11px">{(p as any).Award}</Badge>}
                <Text color="gray.300" fontSize="sm" lineHeight="tall">{p.Description}</Text>
                <HStack wrap="wrap" spacing={2} mt={1}>
                  {p.Technologies.map(t => <Badge key={t} bg="transparent" border="1px solid #0BCEAF" color="#0BCEAF" borderRadius="full" px={2} fontSize="10px" textTransform="none">{t}</Badge>)}
                </HStack>
                <HStack spacing={4} mt={1}>
                  {p.Source && <Link href={p.Source} target="_blank" color="#0BCEAF" fontSize="sm" fontWeight="600" _hover={{ textDecoration: "underline" }}>Source ↗</Link>}
                  {p.Demo && <Link href={p.Demo} target="_blank" color="#0BCEAF" fontSize="sm" fontWeight="600" _hover={{ textDecoration: "underline" }}>Demo ↗</Link>}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MBox>
  );
};
export default Projects;
