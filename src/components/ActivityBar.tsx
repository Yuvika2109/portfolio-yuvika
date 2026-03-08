import { Box, VStack, Tooltip } from "@chakra-ui/react";
import { VscFiles, VscAccount, VscSettingsGear, VscMail, VscCode, VscBookmark, VscSymbolClass, VscStarFull } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props { selectedPage: string; onSelectPage: (p: string) => void; }

const pages = [
  { label: "Home", icon: VscFiles, file: "home.jsx", link: "/" },
  { label: "About", icon: VscAccount, file: "about.js", link: "/about" },
  { label: "Experience", icon: VscSymbolClass, file: "experience.json", link: "/experience" },
  { label: "Projects", icon: VscCode, file: "projects.py", link: "/projects" },
  { label: "Skills", icon: VscSettingsGear, file: "skills.ts", link: "/skills" },
  { label: "Education", icon: FaGraduationCap, file: "education.sql", link: "/education" },
  { label: "Certifications", icon: VscBookmark, file: "certifications.md", link: "/certifications" },
  { label: "Achievements", icon: VscStarFull, file: "achievements.yml", link: "/achievements" },
  { label: "Contact", icon: VscMail, file: "contact.html", link: "/contact" },
];

const ActivityBar = ({ selectedPage, onSelectPage }: Props) => {
  const navigate = useNavigate();
  return (
    <VStack h="100%" justify="flex-start" pt={1} spacing={0}>
      {pages.map((p) => {
        const Icon = p.icon;
        const active = selectedPage === p.file;
        return (
          <Tooltip key={p.label} label={p.label} placement="right" bg="gray.700" color="gray.200" hasArrow fontSize="12px">
            <Box w="100%" display="flex" justifyContent="center" py="10px"
              borderLeft="2px solid" borderLeftColor={active ? "white" : "transparent"}
              cursor="pointer" color={active ? "white" : "#858585"} _hover={{ color: "white" }}
              onClick={() => { onSelectPage(p.file); navigate(p.link); }} transition="all 0.15s">
              <Icon size={22} />
            </Box>
          </Tooltip>
        );
      })}
    </VStack>
  );
};
export default ActivityBar;
