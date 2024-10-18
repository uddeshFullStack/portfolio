import project1 from "../assets/projects/foodVilla.png"
import project2 from "../assets/projects/movieRecommandationSystem.png"
import project3 from "../assets/projects/portfolio.png"
import project4 from "../assets/projects/airbnc.png"
import project5 from "../assets/projects/saranFarm.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like Reactjs TailwindCSS, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React,NextJs, Node.js, Postgresql, MySQL,and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024  - Present",
    role: "Full Stack Developer Intern",
    company: "SGRS Academic Private Limited",
    description: ` Increased website performance by optimizing front-end and back-end code for faster loading times. Developed scalable applications React Js, resulting in increased efficiency and maintainability`,
    technologies: ["Javascript", "React.js", "TailwindCSS","Tan Stack Query","Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Saran Farm",
    image: project5,
    description:
      "Saran.farm is a startup that brings together farmers, consumers, and nature lovers. We focus on connecting people with real farm experiences to help them understand agriculture better, support sustainable farming, and strengthen local communities. On our platform, you can book farm visits, join events like workshops and festivals, and farmers can sign up to share what their farms offer. Saran.farm makes it easy for everyone to learn about farming, enjoy nature, and support local farmers. The site is built with Next.js, making it easy to use on any device.",
    technologies:  ["HTML", "CSS", "NextJs", "Node.js", "postgresql","Tailwind CSS","Express"],
    link:"https://indianfarm.vercel.app/"
  },
  {
    title: "Food Villa Website",
    image: project1,
    description:
      "A food ordering single page web application. Food Villa is a leading online food delivery platform offering aseamless experience for users to order from a wide range of restaurants.Intuitive interface, users can explore diverse cuisines, search different restaurants Shimmer UI,Search Feature,Filter Feature",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Tan Stack Query","Tailwind CSS"],
    link:"https://food-villa-nine.vercel.app/"
  },
  {
    title: "Movie Recommendation System",
    image: project2,
    description:
      "• A movie recommender system in Python can be implemented using vectorization techniques such as content basedand Collaborative Filtering.Content based is a supervised machine learning used to induce a classifier to discriminate between interesting and uninteresting items for the user. Collaborative Filtering recommends items based on similarity measures between users and/or items.",
    technologies: ["Python","Machine Learning","Jupyter NoteBook"],
    link:"https://movie-recmmondation-system.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind"],
    link:"https://portfolio-lime-seven-18.vercel.app/"
  },
  {
    title: "AirBnc",
    image: project4,
    description:
      "A full-stack project that replicates Airbnb's platform, featuring user-friendly navigation, property listings, search functionality, user authentication, and responsive design. Built with React JS, Node.js, Express, and MongoDB, it offers a seamless and visually appealing user experience.",
    technologies:  ["HTML", "CSS", "React", "Node.js", "MongoDB","Tan Stack Query","Tailwind CSS","Express"],
    link:"https://airbnb-app-black.vercel.app/"
  },
];

export const CONTACT = {
  address: `Shyamnagar,
  Kolkata, West Bengal,
  India`,
  phoneNo: "+91-7059219618",
  email: "uddeshy.mca21.du@gmail.com"
};

