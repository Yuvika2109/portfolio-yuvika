import { Box, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Props { selectedPage: string; onSelectPage: (p: string) => void; }

const filePages = [
  { label: "home.jsx", icon: "/assets/javascript.webp", link: "/" },
  { label: "about.js", icon: "/assets/javascript.webp", link: "/about" },
  { label: "experience.json", icon: "/assets/json.webp", link: "/experience" },
  { label: "projects.py", icon: "/assets/css.webp", link: "/projects" },
  { label: "skills.ts", icon: "/assets/typescript.webp", link: "/skills" },
  { label: "education.sql", icon: "/assets/css.webp", link: "/education" },
  { label: "certifications.md", icon: "/assets/html.webp", link: "/certifications" },
  { label: "publications.bib", icon: "/assets/html.webp", link: "/publications" },
  { label: "achievements.yml", icon: "/assets/json.webp", link: "/achievements" },
  { label: "contact.html", icon: "/assets/html.webp", link: "/contact" },
];

const Explorer = ({ selectedPage, onSelectPage }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <VStack align="stretch" h="100%" spacing={0}>
      <Text fontSize="11px" textTransform="uppercase" letterSpacing="1.2px" color="gray.400" px={4} pt={3} pb={2} userSelect="none">Explorer</Text>
      <Box>
        <HStack px={3} py={1} gap={1} cursor="pointer" onClick={() => setIsOpen(!isOpen)} userSelect="none">
          {isOpen ? <IoIosArrowDown size={12} /> : <IoIosArrowForward size={12} />}
          <Text fontSize="11px" fontWeight="700" textTransform="uppercase" letterSpacing="0.5px">Portfolio</Text>
        </HStack>
        {isOpen && (
          <VStack align="stretch" spacing={0} mt={1}>
            {filePages.map((p) => (
              <HStack key={p.label} px={4} pl={7} py="3px" spacing={2} cursor="pointer"
                bg={selectedPage === p.label ? "#264F78" : "transparent"} _hover={{ bg: "#2A2D2E" }}
                onClick={() => { onSelectPage(p.label); navigate(p.link); }} transition="background 0.1s">
                <Image boxSize="15px" src={p.icon} />
                <Text fontSize="13px" color={selectedPage === p.label ? "white" : "#cccccc"}>{p.label}</Text>
              </HStack>
            ))}
          </VStack>
        )}
      </Box>
      <Box mt={4}>
        <HStack px={3} py={1} gap={1} userSelect="none">
          <IoIosArrowDown size={12} />
          <Text fontSize="11px" fontWeight="700" textTransform="uppercase" letterSpacing="0.5px">Quick Links</Text>
        </HStack>
        <VStack align="stretch" spacing={0} mt={1}>
          <HStack px={4} pl={7} py="3px" spacing={2} cursor="pointer" _hover={{bg:"#2A2D2E"}} onClick={() => window.open("https://linkedin.com/in/yuvikamehta21","_blank")}>
            <Text fontSize="11px" color="#0a66c2" fontWeight="700">in</Text>
            <Text fontSize="13px" color="#cccccc">LinkedIn</Text>
          </HStack>
          <HStack px={4} pl={7} py="3px" spacing={2} cursor="pointer" _hover={{bg:"#2A2D2E"}} onClick={() => window.open("https://github.com/Yuvika2109","_blank")}>
            <Text fontSize="11px" color="white" fontWeight="700">GH</Text>
            <Text fontSize="13px" color="#cccccc">GitHub</Text>
          </HStack>
          <HStack px={4} pl={7} py="3px" spacing={2} cursor="pointer" _hover={{bg:"#2A2D2E"}} onClick={() => window.open("https://leetcode.com/u/yuvika_21","_blank")}>
            <Text fontSize="11px" color="#FFA116" fontWeight="700">LC</Text>
            <Text fontSize="13px" color="#cccccc">LeetCode</Text>
          </HStack>
          <HStack px={4} pl={7} py="3px" spacing={2} cursor="pointer" _hover={{bg:"#2A2D2E"}} onClick={() => window.open("mailto:yuvikamehta.2109@gmail.com")}>
            <Text fontSize="11px" color="#ea4335" fontWeight="700">@</Text>
            <Text fontSize="13px" color="#cccccc">Email</Text>
          </HStack>
          <HStack px={4} pl={7} py="3px" spacing={2} cursor="pointer" _hover={{bg:"#2A2D2E"}} onClick={() => {
            const a=document.createElement("a"); a.href="/assets/CV.pdf"; a.download="Yuvika_Mehta_Resume.pdf"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
          }}>
            <Text fontSize="11px" color="#4EC9B0" fontWeight="700">DL</Text>
            <Text fontSize="13px" color="#cccccc">Resume.pdf</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};
export default Explorer;
