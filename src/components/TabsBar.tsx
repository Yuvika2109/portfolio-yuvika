import { HStack, Image, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

interface TabInfo {
  label: string;
  icon: string;
  link: string;
}

const allTabs: Record<string, TabInfo> = {
  "home.jsx": { label: "home.jsx", icon: "/assets/javascript.webp", link: "/" },
  "about.js": { label: "about.js", icon: "/assets/javascript.webp", link: "/about" },
  "experience.json": { label: "experience.json", icon: "/assets/json.webp", link: "/experience" },
  "projects.py": { label: "projects.py", icon: "/assets/css.webp", link: "/projects" },
  "skills.ts": { label: "skills.ts", icon: "/assets/typescript.webp", link: "/skills" },
  "education.sql": { label: "education.sql", icon: "/assets/css.webp", link: "/education" },
  "certifications.md": { label: "certifications.md", icon: "/assets/html.webp", link: "/certifications" },
  "achievements.yml": { label: "achievements.yml", icon: "/assets/json.webp", link: "/achievements" },
  "contact.html": { label: "contact.html", icon: "/assets/html.webp", link: "/contact" },
};

interface Props {
  selectedTab: string;
  onSelectTab: (t: string) => void;
  openTabs: string[];
  onCloseTab: (t: string) => void;
}

const TabsBar = ({ selectedTab, onSelectTab, openTabs, onCloseTab }: Props) => {
  const navigate = useNavigate();
  return (
    <HStack bg="#1a1a1a" spacing={0} overflowX="auto" flexShrink={0} borderBottom="1px solid #3c3c3c" h="36px"
      css={{ "&::-webkit-scrollbar": { height: "3px" } }}>
      {openTabs.map((tabKey) => {
        const t = allTabs[tabKey];
        if (!t) return null;
        const active = t.label === selectedTab;
        return (
          <HStack key={t.label} h="36px" minW="120px" justify="center" px={3} spacing={2}
            bg={active ? "#1E1E1E" : "transparent"} borderBottom={active ? "1px solid #007ACC" : "none"}
            borderRight="1px solid #252526" cursor="pointer" userSelect="none" flexShrink={0}
            onClick={() => { onSelectTab(t.label); navigate(t.link); }}
            _hover={{ bg: active ? "#1E1E1E" : "#2A2D2E" }} transition="background 0.1s">
            <Image boxSize="15px" src={t.icon} />
            <Text fontSize="13px" color={active ? "white" : "#858585"} whiteSpace="nowrap">{t.label}</Text>
            <Box as="button" ml={1} p="2px" borderRadius="4px" display="flex" alignItems="center" justifyContent="center"
              opacity={active ? 1 : 0} _groupHover={{ opacity: 1 }}
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); onCloseTab(t.label); }}
              color="#858585" transition="all 0.15s">
              <VscClose size={14} />
            </Box>
          </HStack>
        );
      })}
    </HStack>
  );
};
export default TabsBar;
