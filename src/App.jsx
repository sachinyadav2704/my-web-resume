/* eslint-disable react/no-unescaped-entities */
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => {
   return (
      <div className="resume-container">
         {/* Header */}
         <header className="resume-header">
            <h1 className="name">SACHIN YADAV</h1>
            <h4 className="name">MERN Developer</h4>
            <p>
               Bengaluru, KA(IN) | <a href="mailto:sachin2704.yadav@gmail.com">sachin2704.yadav@gmail.com</a> |{' '}
               <FaGithub
                  style={{ cursor: 'pointer', marginTop: '2px', marginRight: '0.5rem', fontSize: '1.2rem' }}
                  onClick={() => window.open('https://github.com/sachinyadav2704', '_blank')}
               />
               <FaLinkedin
                  style={{ cursor: 'pointer', marginTop: '2px', marginRight: '0.5rem', fontSize: '1.2rem' }}
                  onClick={() => window.open('https://www.linkedin.com/in/sachin-yadav-b57426141/', '_blank')}
               />
               {/* <SiLeetcode
                  style={{ cursor: 'pointer', marginTop: '2px', marginRight: '0.5rem', fontSize: '1.2rem' }}
                  onClick={() => window.open('https://leetcode.com/u/Sachin_Yadav_27/', '_blank')}
               /> */}
            </p>
         </header>

         {/* Summary Section */}
         <section className="section">
            <h2 className="section-title">Summary</h2>
            <div className="section-content">
               <p>
                  Dedicated and performance-driven MERN Developer with over 4 years of professional experience in full-stack development. Expert in building
                  scalable and responsive web applications using JavaScript, React.js, Node.js, and MongoDB. Adept at integrating complex APIs, implementing
                  reusable components, and ensuring high-quality solutions. Passionate about leveraging innovative technologies to enhance user experience and
                  drive business impact.
               </p>
            </div>
         </section>

         {/* Technical Skills Section */}
         <section className="section">
            <h2 className="section-title">Technical Skills</h2>
            <ul className="bullet-list">
               <li>
                  <b>Frontend - </b> React.js, Redux, JavaScript (ES6+), HTML, CSS, REST Api's Integrate, TypeScript, React Native (Expo)
               </li>
               <li>
                  <b>Backend - </b>Node.js, Express.js, MongoDB, REST Api's Create
               </li>
               <li>
                  <b>Frameworks - </b> Ant Design, Material UI, Tailwind
               </li>
               <li>
                  <b>Tools - </b>Git, DevOps, Postman, VS Code
               </li>
            </ul>
         </section>

         {/* Work Experience Section */}
         <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
               <div className="subsection">
                  <p className="institution">
                     Jio Platforms Limited{' '}
                     <span className="location" style={{ float: 'inline-end' }}>
                        Aug 2020 – Present
                     </span>
                  </p>
                  <p className="details">
                     <strong>MERN Developer</strong>
                  </p>
                  <ul className="bullet-list">
                     <li>Built responsive web applications with React.js and Redux, enhancing UI/UX for improved user satisfaction.</li>
                     <li>Partnered with cross-functional teams to deliver projects like Jio Unified Ads and Jio Reels on time, adhering to agile processes.</li>
                     <li>Developed the client layer by implementing reusable components and following JavaScript and React best practices.</li>
                     <li>
                        Integrated complex APIs and coordinated with Node.js and Express backend services, optimizing front-end performance and supporting
                        full-stack workflows.
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Projects Section */}
         <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="section-content">
               <div className="subsection">
                  <p className="institution">
                     <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jio.jiofit&pcampaignid=web_share', '_blank')}
                     >
                        JioFit - Fitness App
                     </span>
                     <span className="location" style={{ float: 'inline-end' }}>
                        Aug 2024 – Present
                     </span>
                  </p>
                  {/* <p className="details"></p> */}
                  <ul className="bullet-list">
                     <li>A comprehensive full-stack application for managing fitness programs, user data, and analytics across Jio platforms.</li>
                     <li>
                        <b>Role - </b>Designed both frontend and backend, leveraging React, TypeScript, Node.js, Express, and MongoDB to ensure robust
                        scalability.
                     </li>
                     <li>
                        <b>Key Features -</b>
                        Integrated OAuth2.0 authentication for secure access, implemented data synchronization, implemented Custom Error Code scenarios and
                        social sharing to boost user engagement.
                     </li>
                  </ul>
               </div>

               <div className="subsection">
                  <p className="institution">
                     <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://portal-g.instreamo.jio.com/', '_blank')}>
                        Jio Reels (Instreamo)
                     </span>
                     <span className="location" style={{ float: 'inline-end' }}>
                        Jun 2023 – Aug 2024
                     </span>
                  </p>
                  {/* <p className="details"></p> */}
                  <ul className="bullet-list">
                     <li>A server-side ad insertion (SSAI) project enabling direct API integrations across ad publishers.</li>
                     <li>
                        <b>Role - </b>Architected and built primary modules (Landing Page, Channel Management) using React and Redux, focusing on seamless API
                        integration.
                     </li>
                  </ul>
               </div>

               <div className="subsection">
                  <p className="institution">
                     <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://jioads.jio.com/', '_blank')}>
                        Jio Unified Ads
                     </span>
                     <span className="location" style={{ float: 'inline-end' }}>
                        Feb 2021 – May 2023
                     </span>
                  </p>
                  {/* <p className="details"></p> */}
                  <ul className="bullet-list">
                     <li>
                        A centralized platform enabling Jio users to create and manage ad campaigns seamlessly integrated across platforms like MyJio and Jio
                        Pages.
                     </li>
                     <li>
                        <b>Role - </b>Architected and developed core modules using React and Node.js, implementing both class-based and functional components
                        for enhanced performance and flexibility.
                     </li>
                  </ul>
               </div>
               <div className="subsection">
                  <p className="institution">
                     JAMP
                     <span className="location" style={{ float: 'inline-end' }}>
                        Nov 2020 – Dec 2022
                     </span>
                  </p>
                  <ul className="bullet-list">
                     <li>
                        An internal portal for managing audiences across various Jio applications, streamlining user interactions and enhancing data management.
                     </li>
                     <li>
                        <b>Role - </b>Designed the architecture and developed key modules (Dashboard, Audience, Query, Users, Audience Overview, Audience
                        Taxonomy), ensuring efficient backend workflows for managing user and audience data.
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Education Section */}
         <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
               <div className="subsection">
                  <p className="institution">
                     SRM Institute of Science and Technology, Delhi NCR
                     <span className="location" style={{ float: 'inline-end' }}>
                        (Jul 2016 – Jun 2020)
                     </span>
                  </p>
                  <p className="details">
                     BACHELOR OF TECHNOLOGY - <b>78%</b>
                  </p>
               </div>
               <div className="subsection">
                  <p className="institution">
                     SKD Academy School, Rajajipuram
                     <span className="location" style={{ float: 'inline-end' }}>
                        (Apr 2014 – Mar 2015)
                     </span>
                  </p>
                  <p className="details">
                     Intermediate (PCM) - <b>76%</b>
                  </p>
               </div>
               <div className="subsection">
                  <p className="institution">
                     SKD Academy School, Rajajipuram
                     <span className="location" style={{ float: 'inline-end' }}>
                        (Apr 2012 – Mar 2013)
                     </span>
                  </p>
                  <p className="details">
                     High School - <b>69%</b>
                  </p>
               </div>
            </div>
         </section>

         {/* Soft Skills Section */}
         <section className="section">
            <h2 className="section-title">Soft Skills</h2>
            <ul className="bullet-list">
               <li>Strong Teamwork</li>
               <li>Problem-solving</li>
               <li>Time Management</li>
               <li>Self-motivation</li>
               <li>Attention to Detail</li>
            </ul>
         </section>
         {/* Languages Section */}
         <section className="section">
            <h2 className="section-title">Languages</h2>
            <p>Hindi, English</p>
            {/* <ul className="bullet-list">
               <li></li>
            </ul> */}
         </section>
      </div>
   );
};

export default App;
