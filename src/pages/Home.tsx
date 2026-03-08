import { Image, Text, VStack, Flex, Box, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { homeData } from "../data/home";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiReact, SiNextdotjs, SiFastapi, SiPostgresql, SiMongodb, SiDocker, SiJavascript, SiTypescript } from "react-icons/si";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);
const MImage = motion(Image);

const techStack = [
  { Icon: SiPython, color: "#3776AB", label: "Python" },
  { Icon: SiTensorflow, color: "#FF6F00", label: "TensorFlow" },
  { Icon: SiPytorch, color: "#EE4C2C", label: "PyTorch" },
  { Icon: SiScikitlearn, color: "#F7931E", label: "Scikit-learn" },
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { Icon: SiFastapi, color: "#009688", label: "FastAPI" },
  { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiDocker, color: "#2496ED", label: "Docker" },
];

const useTypewriter = (text: string, speed: number = 60) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    setDone(false);
    const timer = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) { clearInterval(timer); setDone(true); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return { displayed, done };
};

const Home = ({ setPage }: Props) => {
  const nav = useNavigate();
  useEffect(() => { setPage("home.jsx"); }, []);

  const name = useTypewriter(homeData.name, 80);
  const title = useTypewriter(homeData.title, 40);

  return (
    <Box h="100%" display="flex" flexDirection="column">
      <Flex flex="1" justify="space-around" align="center" direction={{ base: "column-reverse", lg: "row" }}
        px={{ base: 5, md: 10 }} py={{ base: 6, md: 0 }} gap={{ base: 6, md: 12 }}>
        <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <VStack align={{ base: "center", lg: "flex-start" }} spacing={5} maxW="600px">
            <Box textAlign={{ base: "center", lg: "left" }}>
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" letterSpacing="wide" color="white" fontFamily="'Fira Code',monospace">
                {name.displayed}<Box as="span" display="inline-block" w="2px" h="1em" bg={name.done ? "transparent" : "white"} ml="2px" verticalAlign="middle"
                  animation={name.done ? "none" : "blink 1s step-end infinite"}
                  sx={{ "@keyframes blink": { "50%": { opacity: 0 } } }} />
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }} fontWeight="600" color="#0BCEAF" mb={3} fontFamily="'Fira Code',monospace" minH="28px">
                {name.done ? title.displayed : ""}<Box as="span" display={name.done && !title.done ? "inline-block" : "none"} w="2px" h="1em" bg="#0BCEAF" ml="2px" verticalAlign="middle"
                  animation="blink 1s step-end infinite"
                  sx={{ "@keyframes blink": { "50%": { opacity: 0 } } }} />
              </Text>
              {title.done && (
                <MBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Text fontSize="13px" color="#858585" fontStyle="italic" fontFamily="'Fira Code',monospace">{homeData.quote}</Text>
                </MBox>
              )}
            </Box>
            {[homeData.contactInfo, homeData.education].map((items, gi) => (
              <Box key={gi} p={5} borderRadius="xl" bg="rgba(31,36,40,0.7)" border="1px solid rgba(11,206,175,0.2)" w="100%">
                <VStack spacing={3} align="stretch">
                  {items.map((item, i) => (
                    <HStack key={i} spacing={3} color="gray.300" cursor={item.Link ? "pointer" : "default"}
                      _hover={item.Link ? { color: "#0BCEAF", transform: "translateX(4px)" } : undefined} transition="all 0.2s"
                      onClick={() => { if (item.Link?.startsWith("/")) nav(item.Link); else if (item.Link) window.open(item.Link, "_blank"); }}>
                      <item.Icon size={16} /><Text fontSize="sm">{item.Label}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
            <HStack spacing={4} mb={2}>
              {homeData.social.map((s, i) => (
                <HStack key={i} spacing={2} color="gray.400" cursor="pointer" _hover={{ color: "#0BCEAF" }} transition="all 0.2s"
                  onClick={() => window.open(s.Link, "_blank")}>
                  <s.Icon size={18} /><Text fontSize="sm">{s.Label}</Text>
                </HStack>
              ))}
            </HStack>
          </VStack>
        </MBox>
        <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box position="relative">
            <Box position="absolute" inset="0" borderRadius="50%" bgGradient="radial(#0BCEAF, transparent 70%)" opacity="0.15" filter="blur(15px)" />
            <MImage src={homeData.myImage}
              w={{ base: "220px", md: "350px", lg: "380px" }} borderRadius="50%"
              border="3px solid #0BCEAF"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              _hover={{ transform: "scale(1.02)" }}
              fallback={
                <MBox
                  w={{ base: "220px", md: "350px", lg: "380px" }} h={{ base: "220px", md: "350px", lg: "380px" }}
                  borderRadius="50%" border="3px solid #0BCEAF" bg="#252526" display="flex" alignItems="center" justifyContent="center"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Text color="gray.500" fontSize="sm">Add Photo</Text>
                </MBox>
              } />
          </Box>
        </MBox>
      </Flex>

      {/* Tech Stack Marquee — full width at bottom */}
      <Box w="100%" overflow="hidden" py={3} flexShrink={0}>
        <Box
          display="flex"
          w="max-content"
          animation="marquee 20s linear infinite"
          sx={{
            "@keyframes marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[0, 1].map((setIdx) => (
            <HStack key={setIdx} spacing={8} mr={8}>
              {techStack.map((tech, i) => (
                <VStack key={i} spacing={1} minW="60px" opacity={0.7} _hover={{ opacity: 1 }} transition="opacity 0.2s">
                  <tech.Icon size={28} color={tech.color} />
                  <Text fontSize="9px" color="#858585" fontFamily="'Fira Code',monospace">{tech.label}</Text>
                </VStack>
              ))}
            </HStack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
