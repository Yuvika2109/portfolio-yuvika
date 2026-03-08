import { Box, Button, useToast, VStack, Text, HStack, Input, Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";
import { contactInfo } from "../data/contact";
import { aboutMe } from "../data/about";

interface Props { setPage: (p: string) => void; }
const MBox = motion(Box);

const Contact = ({ setPage }: Props) => {
  useEffect(() => { setPage("contact.html"); }, []);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill name, email, and message.", status: "warning", duration: 3000, isClosable: true });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://email-sender-six-phi.vercel.app/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, receiver_email: "yuvikamehta.2109@gmail.com" }),
      });
      if (res.status === 200) {
        toast({ title: "Message Sent!", description: "Thanks for reaching out!", status: "success", duration: 3000, isClosable: true });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else throw new Error("Failed");
    } catch {
      toast({ title: "Error", description: "Could not send. Try emailing directly.", status: "error", duration: 3000, isClosable: true });
    } finally { setLoading(false); }
  };

  const downloadCV = () => {
    const a = document.createElement("a"); a.href = aboutMe.cvPath; a.download = aboutMe.cvFileNameAfterDownload;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <MBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Box p={{ base: 5, md: 10 }} fontFamily="'Fira Code',monospace" fontSize="14px" lineHeight="1.8">
        <Text color="#569CD6">{"<!DOCTYPE html>"}</Text>
        <Text><Text as="span" color="#569CD6">{"<html "}</Text><Text as="span" color="#9CDCFE">lang</Text>=<Text as="span" color="#CE9178">"en"</Text><Text as="span" color="#569CD6">{">"}</Text></Text>
        <Text color="#569CD6">{"<body>"}</Text>
        <Box h={4}/>

        <Box pl={6} mb={6} p={5} bg="#1a1a1a" border="1px solid #3c3c3c" borderRadius="lg">
          <Text color="#6A9955" mb={3}>{"/**"}</Text>
          <Text color="#6A9955" pl={2}>* Contact Information:</Text>
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <HStack key={label} pl={2} spacing={3} color="#6A9955">
              <Text>*</Text><Icon size={14} /><Text>{label}: {value}</Text>
            </HStack>
          ))}
          <Text color="#6A9955" mt={1}>{"*/"}</Text>
        </Box>

        <Box pl={6} p={5} bg="#1a1a1a" border="1px solid #3c3c3c" borderRadius="lg" mb={6}>
          <Text color="#6A9955" mb={4}>{"// Send me a message"}</Text>
          {["name", "email", "subject"].map((field) => (
            <HStack key={field} spacing={2} mb={2}>
              <Text color="#569CD6" flexShrink={0}>const</Text>
              <Text color="#9CDCFE" flexShrink={0}>{field}</Text>
              <Text color="#569CD6" flexShrink={0}>=</Text>
              <Input name={field} value={(form as any)[field]} onChange={handleChange} variant="unstyled"
                color="#CE9178" placeholder={`"Your ${field}"`} _placeholder={{ color: "gray.600" }}
                fontFamily="'Fira Code',monospace" fontSize="14px" />
            </HStack>
          ))}
          <HStack spacing={2} mb={2} align="flex-start">
            <Text color="#569CD6" flexShrink={0}>const</Text>
            <Text color="#9CDCFE" flexShrink={0}>message</Text>
            <Text color="#569CD6" flexShrink={0}>=</Text>
          </HStack>
          <Textarea name="message" value={form.message} onChange={handleChange} variant="unstyled"
            color="#CE9178" placeholder={'"Your message here..."'} _placeholder={{ color: "gray.600" }}
            fontFamily="'Fira Code',monospace" fontSize="14px" minH="80px" pl={2} resize="none" />
        </Box>

        <HStack spacing={4} pl={6}>
          <Button bg="#0BCEAF" color="white" _hover={{ bg: "#09a88d" }} onClick={handleSubmit}
            isLoading={loading} loadingText="Sending..." leftIcon={<FaPaperPlane />}>Send Message</Button>
          <Button bg="transparent" color="#0BCEAF" border="1px solid #0BCEAF"
            _hover={{ bg: "rgba(11,206,175,0.1)" }} onClick={downloadCV} leftIcon={<FaDownload />}>Download CV</Button>
        </HStack>

        <Box h={6}/>
        <Text color="#569CD6">{"</body>"}</Text>
        <Text color="#569CD6">{"</html>"}</Text>
      </Box>
    </MBox>
  );
};
export default Contact;
