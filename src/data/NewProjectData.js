// Example of enhanced project data structure in ../data/ProjectData.js

import logo1 from "../assets/images/logo1.webp";
import SMP1 from "../assets/images/SMP1.png"

export const newProjects = [
  {
    id: 1,
    title: "TalentFolio",
    description: "The Resume Management System with a job portal streamlines candidate company interactions.",
    fullDescription: "TalentFolio is a powerful Resume Management System integrated with a job portal, designed to streamline interactions between candidates and companies. This platform offers a centralized hub for job postings, applications, and professional profiles, making the hiring process more efficient and user-friendly.",
    category: "web apps",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWITx8JF2A8ROJcQE4unnviAUYjR5-NaloBlYgloWtY-B-FTwZOkzSDmJ1FP1anLhj7gw&usqp=CAU",
    techStack: ["React", "Node", "Tailwind CSS", "MongoDB", "Express"],
    features: [
      "Candidate & Company Registration – Secure authentication and authorization using JWT.",
      "Resume Management – Candidates can upload and store up to five resumes.",
      "Job Posting & Applications – Companies can create job vacancies, and candidates can easily apply.",
      "Interview Scheduling – Employers can schedule interviews seamlessly within the platform.",
      "Advanced Search & Filtering – Job seekers can search and filter job listings based on preferences.",
      "Profile Management – Both candidates and companies can maintain detailed profiles.",
      "Responsive & Intuitive Interface – Built with React, Tailwind CSS, and a modern UI for a seamless experience."
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  {
    id: 2,
    title: "MindTalk",
    description: "Web application that acts as a portal for people with depression and counsellors to pave their way to a better mental health state.",
    fullDescription: "MindTalk is a web application designed to bridge the gap between individuals struggling with depression and qualified counselors. The platform provides a secure and supportive environment where users can seek professional help, access mental health resources, and track their progress toward emotional well-being.",
    category: "web apps",
    coverImage: "https://medicaldialogues.in/h-upload/2024/02/14/750x450_232269-depression-50.webp",
    techStack: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
    features: [
      "User & Counselor Registration: A seamless onboarding process for users and mental health professionals.",
      "Self-Assessment Test: Helps users evaluate their mental state and receive personalized recommendations.",
      "Counseling Sessions: Users can schedule and join one-on-one sessions with counselors via secure chat and video calls.",
      "Group Therapy Sessions: Moderated group discussions for peer support and shared healing.",
      "Resource Library: A collection of mental health blogs, relaxing music, and videos to promote well-being.",
      "Appointment Scheduling: Easy booking and management of counseling sessions.",
      "Secure Messaging: End-to-end encrypted communication between users and counselors.",
      "Progress Tracking: Allows users to monitor their mental health journey.",
      "Payment Handling: Secure payment processing for counseling services.",
      "Personal Notes: Counsellors can create notes about there patients and keep them as secure as possible."
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  {
    id: 3,
    title: "Stadia",
    description: "The application streamlines indoor stadium bookings, facilitating coordination between clients, coaches, managers, and suppliers.",
    fullDescription: "Stadia is a comprehensive application designed to simplify the process of booking indoor stadiums. It creates a streamlined coordination system between various stakeholders, including clients, coaches, facility managers, and equipment suppliers. The platform allows users to register as players or coaches, book courts and training sessions, rent sports equipment, order refreshments, and even conduct or join training classes. With its intuitive booking and management features, Stadia ensures a seamless experience for all users involved in sports facility operations.",
    category: "web apps",
    coverImage: "https://snsca.gov.lk/wp-content/uploads/2023/11/1-13.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
        "Booking management system",
        "Coach scheduling",
        "Equipment reservation",
        "Payment processing",
        "User role management",
        "Player & Coach registration",
        "Courts & Coaches booking",
        "Renting equipment",
        "Ordering refreshments",
        "Conducting & joining training classes"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },

  {
    id: 4,
    title: "BlogMe",
    description: "BlogMe is a feature-rich blogging platform that enables users to create, publish, and manage content efficiently. It provides a seamless user experience with intuitive content management tools and a modern, responsive design.",
    fullDescription: "BlogMe is a comprehensive blog management system designed to offer full CRUD (Create, Read, Update, Delete) functionality for blog posts. Users can create engaging blog content with a rich text editor, categorize posts, and upload images. The platform includes advanced filtering by author and category, along with a search feature by title to enhance content discoverability. It ensures security with JWT Authorization for secure user registration and login, protecting user data in a multi-user environment.",
    category: "web apps",
    coverImage: "https://www.teledataict.com/media/2022/02/blog_online_business.jpg",
    techStack: ["React", "ASP.Net", "Tailwind CSS", "MS SQL"],
    features: [
      "Rich text editor",
      "Full CRUD functionality for blog posts",
      "Advanced filtering by author and category",
      "Search functionality by blog title",
      "File upload support for blog images",
      "Content management system",
      "User authentication with JWT Authorization",
      "Secure user registration and login",
      "Responsive design"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  
  {
    id: 5,
    title: "Portfolio",
    description: "A portfolio website showcases the works, skills, and achievements, providing a professional online presence to impress potential employers or clients.",
    fullDescription: "This portfolio website was created to showcase professional work, skills, and achievements in a clean, modern format. It serves as a digital resume and project gallery to impress potential employers and clients with a cohesive presentation of capabilities and experience.",
    category: "websites",
    coverImage: "https://www.esdesignbarcelona.com/sites/default/files/img/6_pasos_para_crear_un_portfolio_digital_y_todo_lo_que_debe_incluir_2.png",
    techStack: ["React", "TailwindCSS"],
    features: [
      "Responsive design",
      "Project showcase",
      "Skills section",
      "Contact form",
      "Modern UI/UX"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://www.pathumld.me/"
  },
  {
    id: 6,
    title: "TalkyBudies",
    description: "A mobile application that allows users to register with their mobile numbers and chat with registered users.",
    fullDescription: "TalkyBudies is a mobile chat application that enables users to register using their mobile numbers and communicate with other registered users. The app provides a simple, intuitive interface for real-time messaging.",
    category: "mobile apps",
    coverImage: "https://ik.imagekit.io/ably/ghost/prod/2023/06/the-ultimate-guide-to-chat-app-architecture.png?tr=w-1728,q-50",
    techStack: ["React Native", "Firebase"],
    features: [
      "Mobile number registration",
      "Real-time messaging",
      "User profiles",
      // "Push notifications",
      // "Media sharing"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  {
    id: 7,
    title: "Student Management System",
    description: "Helps manage students, teachers, classrooms, and payments,improving education management and user experience.",
    fullDescription: "This Student Management System is designed to streamline educational institution operations by providing comprehensive tools to manage students, teachers, classrooms, and payments. The system improves overall education management efficiency and enhances user experience for administrators, educators, and students.",
    category: "web apps",
    coverImage: "https://images.ctfassets.net/pdf29us7flmy/7pN8DM5Wy8xTsQNagfgdYn/b68653e60598e2ad8bbab302e8852a1e/GettyImages-139887145_optimized.jpg",
    techStack: ["Java"],
    features: [
      "Basic CRUD operations for students, teachers, classes, subjects and non academic staff",
      // "Attendance monitoring"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  {
    id: 8,
    title: "Logo for KodeMargin",
    description: "KodeMargin is a startup company that provides software development and graphic designing services. The logo is designed to reflect the company's brand identity.",
    fullDescription: "This logo was designed for KodeMargin, a startup company specializing in software development and graphic design services. The logo was crafted to reflect the company's brand identity, combining elements that represent both technical expertise and creative design capabilities.",
    category: "logo",
    coverImage: logo1, // Note: This would need to be updated with proper import
    techStack: ["Adobe Illustrator"],
    features: [
      "Custom typography",
      "Unique brand symbol",
      "Scalable vector format",
      "Color scheme aligned with brand values",
      "Multiple format variations"
    ],
    githubLink: "https://github.com/your-repo",
    demoLink: "https://your-demo.com"
  },
  {
    "id": 9,
    "title": "Business Website for ParkWay Hotel",
    "description": "A professional business website developed for ParkWay Hotel using modern web technologies.",
    "fullDescription": "This business website was designed and developed for ParkWay Hotel to enhance its online presence. Built using React and Tailwind CSS, the website ensures a responsive, user-friendly experience with a sleek and elegant design that aligns with the hotel's branding.",
    "category": "business-website",
    "coverImage": "parkwayWebsiteCover", // Note: This should be updated with the correct import
    "techStack": ["React", "Tailwind CSS"],
    "features": [
      "Responsive and mobile-friendly design",
      "Elegant UI aligned with hotel branding",
      "Fast loading with optimized performance",
      "Interactive booking section",
      "SEO-friendly structure"
    ],
    "githubLink": "https://github.com/your-repo",
    "demoLink": "https://your-demo.com"
},
{
  id: 10,
  title: "Social Media Post",
  description: "An social media post design created to promote a Grade 10–11 educational event on media and communication technology.",
  fullDescription: "This social media graphic was designed using Adobe Photoshop to promote an educational session titled 'Tharuru Ha Sanhivedana Thakshanaya' for Grade 10 and 11 students. The design includes fantasy-themed background visuals, clear Sinhala typography, session details with time slots, and event branding, all optimized for high engagement on Instagram. It balances visual appeal and clarity to effectively communicate the event information to the target audience.",
  category: "graphic design",
  coverImage: SMP1,
  techStack: ["Adobe Photoshop"],
  features: [
    "Designed for social media",
    "Clear Sinhala typography and event details",
    "Creative fantasy-themed background to draw attention",
    "Time slots and grade separation for clarity",
    "Branding and contact details included",
    "Optimized for readability and engagement"
  ],
  githubLink: "",
  demoLink: "https://www.behance.net/gallery/224818379/Social-Media-Post-Design"
},
{
  id: 11,
  title: "Flavoura Restaurant Website",
  description: "A modern restaurant website designed for Flavoura, featuring a complete menu, online reservations, and more.",
  fullDescription: "The Flavoura restaurant website is a fully responsive and visually appealing platform built to represent a contemporary dining experience. Developed using modern web technologies, it includes a full digital menu with categorization (mains, snacks, beverages, desserts), a table reservation system, contact and location details with Google Maps integration, and a smooth, user-friendly interface. The design emphasizes brand identity and ease of use to enhance customer engagement and drive online reservations.",
  category: "websites",
  coverImage: "FlavouraWebsiteCover",
  techStack: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  features: [
    "Fully responsive modern UI/UX",
    "Dynamic digital menu with categories",
    "Online table reservation form with validation",
    "Smooth animations using Framer Motion",
    "Google Maps integration for location access",
    "SEO-friendly and optimized for performance",
    "Brand-focused design with custom visuals"
  ],
  githubLink: "https://github.com/yourusername/flavoura-restaurant",
  demoLink: "https://flavoura-restaurant.vercel.app/"
}



];