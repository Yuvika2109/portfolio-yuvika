import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import ToolBar from "./components/ToolBar";
import ActivityBar from "./components/ActivityBar";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";
import TabsBar from "./components/TabsBar";
import { useState, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

const tabLinkMap: Record<string, string> = {
  "home.jsx": "/", "about.js": "/about", "experience.json": "/experience",
  "projects.py": "/projects", "skills.ts": "/skills", "education.sql": "/education",
  "certifications.md": "/certifications", "publications.bib": "/publications", "achievements.yml": "/achievements", "contact.html": "/contact",
};

function App() {
  const [selectedPage, setSelectedPage] = useState("home.jsx");
  const [openTabs, setOpenTabs] = useState<string[]>(["home.jsx"]);
  const navigate = useNavigate();

  const selectPage = useCallback((page: string) => {
    setSelectedPage(page);
    if (!openTabs.includes(page)) {
      setOpenTabs(prev => [...prev, page]);
    }
  }, [openTabs]);

  const closeTab = useCallback((tab: string) => {
    setOpenTabs(prev => {
      const next = prev.filter(t => t !== tab);
      if (next.length === 0) {
        next.push("home.jsx");
      }
      if (selectedPage === tab) {
        const newActive = next[next.length - 1];
        setSelectedPage(newActive);
        navigate(tabLinkMap[newActive] || "/");
      }
      return next;
    });
  }, [selectedPage, navigate]);

  return (
    <Grid
      templateAreas={{
        base: '"tool tool" "activity main" "footer footer"',
        lg: '"tool tool tool" "activity explorer main" "footer footer footer"',
      }}
      templateColumns={{ base: "48px 1fr", lg: "48px 240px 1fr" }}
      templateRows="32px 1fr 24px"
      height="100vh" bg="#1E1E1E" color="#cccccc"
    >
      <GridItem area="tool" bg="#323233" borderBottom="1px solid #1a1a1a">
        <ToolBar />
      </GridItem>
      <GridItem area="activity" bg="#333333" borderRight="1px solid #3c3c3c">
        <ActivityBar selectedPage={selectedPage} onSelectPage={selectPage} />
      </GridItem>
      <Show above="lg">
        <GridItem area="explorer" bg="#252526" borderRight="1px solid #3c3c3c" overflowY="auto">
          <Explorer selectedPage={selectedPage} onSelectPage={selectPage} />
        </GridItem>
      </Show>
      <GridItem area="main" overflowX="hidden" display="flex" flexDirection="column" bg="#1E1E1E">
        <TabsBar selectedTab={selectedPage} onSelectTab={selectPage} openTabs={openTabs} onCloseTab={closeTab} />
        <Box overflowY="auto" flex="1">
          <Routes>
            <Route path="/" element={<Home setPage={selectPage} />} />
            <Route path="/about" element={<About setPage={selectPage} />} />
            <Route path="/experience" element={<Experience setPage={selectPage} />} />
            <Route path="/projects" element={<Projects setPage={selectPage} />} />
            <Route path="/skills" element={<Skills setPage={selectPage} />} />
            <Route path="/education" element={<Education setPage={selectPage} />} />
            <Route path="/certifications" element={<Certifications setPage={selectPage} />} />
            <Route path="/publications" element={<Publications setPage={selectPage} />} />
            <Route path="/achievements" element={<Achievements setPage={selectPage} />} />
            <Route path="/contact" element={<Contact setPage={selectPage} />} />
          </Routes>
        </Box>
      </GridItem>
      <GridItem area="footer" bg="#007ACC">
        <Footer selectedPage={selectedPage} />
      </GridItem>
    </Grid>
  );
}
export default App;
