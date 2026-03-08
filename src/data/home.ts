import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaUniversity } from "react-icons/fa";

export const homeData = {
  myImage: "/assets/my_image.webp",
  name: "YUVIKA MEHTA",
  title: "CS Student | ML, GenAI & Full Stack Developer",
  quote: '"The best way to predict the future is to build it." — Alan Kay',
  contactInfo: [
    { Icon: IoMdMail, Label: "yuvikamehta.2109@gmail.com", Link: "/contact" },
    { Icon: FaLocationDot, Label: "Chennai, India", Link: "https://www.google.com/maps/place/Chennai" },
    { Icon: FaPhoneAlt, Label: "+91 6207712530", Link: "tel:+916207712530" },
  ],
  education: [
    { Icon: FaUniversity, Label: "SRM Institute of Science and Technology", Link: "https://www.srmist.edu.in/" },
    { Icon: FaGraduationCap, Label: "B.Tech CSE — CGPA: 9.86/10", Link: "" },
  ],
  social: [
    { Icon: FaGithub, Label: "GitHub", Link: "https://github.com/Yuvika2109" },
    { Icon: FaLinkedin, Label: "LinkedIn", Link: "https://linkedin.com/in/yuvikamehta21" },
  ],
};
