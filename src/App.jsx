/* eslint-disable react/no-unescaped-entities */
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall, IoMdMail } from 'react-icons/io';

const App = () => {
   return (
      <div className="resume-container">
         {/* Header */}
         <header className="resume-header">
            <h1
               className="name"
               onClick={() => window.open('https://sachin-yadav-portfolio-mern.netlify.app/', '_blank')}
               style={{
                  cursor: 'pointer',
               }}
            >
               SACHIN YADAV
            </h1>
            {/* <h4 className="name">MERN Developer</h4> */}
            <p>
               <span
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginTop: '6px',
                  }}
               >
                  <FaLocationDot
                     style={{
                        cursor: 'pointer',
                        marginTop: '2px',
                        marginRight: '0.4rem',
                        fontSize: '1.2rem',
                     }}
                  />{' '}
                  Bengaluru, KA(IN)
                  <IoMdCall
                     style={{
                        cursor: 'pointer',
                        marginTop: '2px',
                        marginRight: '0.4rem',
                        fontSize: '1.2rem',
                        marginLeft: '1.5rem',
                     }}
                  />{' '}
                  +91 9321704313
                  <IoMdMail
                     style={{
                        cursor: 'pointer',
                        marginTop: '2px',
                        marginRight: '0.4rem',
                        marginLeft: '1.5rem',
                        fontSize: '1.2rem',
                     }}
                  />{' '}
                  <a href="mailto:sachin2704.yadav@gmail.com">sachin2704.yadav@gmail.com</a>
               </span>
               {/* <br /> */}
               <span
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginTop: '6px',
                  }}
               >
                  <FaGithub
                     style={{
                        cursor: 'pointer',
                        marginTop: '2px',
                        marginRight: '0.4rem',
                        fontSize: '1.2rem',
                     }}
                     onClick={() => window.open('https://github.com/sachinyadav2704', '_blank')}
                  />{' '}
                  <span
                     onClick={() => window.open('https://github.com/sachinyadav2704', '_blank')}
                     style={{
                        cursor: 'pointer',
                     }}
                  >
                     https://github.com/sachinyadav2704
                  </span>{' '}
                  <FaLinkedin
                     style={{
                        cursor: 'pointer',
                        marginTop: '2px',
                        marginRight: '0.4rem',
                        marginLeft: '1rem',
                        fontSize: '1.2rem',
                     }}
                     onClick={() => window.open('https://www.linkedin.com/in/sachin-yadav-b57426141/', '_blank')}
                  />
                  <span
                     onClick={() => window.open('https://www.linkedin.com/in/sachin-yadav-b57426141/', '_blank')}
                     style={{
                        cursor: 'pointer',
                     }}
                  >
                     https://www.linkedin.com/in/sachin-yadav-b57426141/
                  </span>
               </span>
            </p>
         </header>

         {/* Summary Section */}
         <section className="section">
            <h2 className="section-title">Summary</h2>
            <div className="section-content">
               <p style={{ margin: '6px 0' }}>
                  Results-driven <strong>MERN Developer</strong> with 4+ years of experience in building scalable web applications, optimizing performance by
                  40% and enhancing user engagement by 20%. Proficient in <strong>JavaScript, React.js, Redux, Node.js</strong> and <strong>MongoDB</strong>{' '}
                  with expertise in API integrations and reusable components, reducing development time by 30%. Skilled in mentoring teams and driving
                  efficient, high-impact solutions in fast-paced agile environments.
               </p>
            </div>
         </section>

         {/* Work Experience Section */}
         <section className="section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
               <div className="subsection">
                  <p className="institution">
                     FullStack Developer - Jio Platforms Limited
                     <span className="location" style={{ float: 'inline-end' }}>
                        Sep 2023 – Present
                     </span>
                  </p>
                  {/* <p className="details">
                     <strong>MERN Developer</strong>
                  </p> */}
                  <ul className="bullet-list">
                     <li>
                        Designed and developed <strong>CRUD APIs</strong> for JioFit’s Admin panel, streamlining data management and enhancing system
                        efficiency, leading to a 30% reduction in response time for database operations.
                     </li>
                     <li>
                        Implemented <strong>OAuth2.0 authentication</strong>, enabling secure user login and token-based access control, ensuring compliance
                        with industry security standards.
                     </li>
                     <li>
                        Developed and enforced <strong>Role-Based Access Control (RBAC)</strong>, restricting access to specific features based on user roles,
                        enhancing data protection and preventing unauthorized actions.
                     </li>
                     <li>
                        Optimized backend workflows and database queries, enhancing API performance by 30%, reducing server load, and improving the overall
                        scalability of the system using Node.js, Express.js, and MongoDB.
                     </li>
                     <li>
                        Implemented a <strong>Custom Error Code system</strong>, reducing debugging time by 40% and improving error tracking efficiency across
                        all JioFit APIs, leading to enhanced system reliability.
                     </li>
                     {/* <li>Implemented Role-Based Access Control (RBAC) to ensure only authorized users could access specific application features.</li> */}
                  </ul>
               </div>
            </div>
            <div className="section-content">
               <div className="subsection">
                  <p className="institution">
                     React Developer - Jio Platforms Limited
                     <span className="location" style={{ float: 'inline-end' }}>
                        Aug 2020 – Aug 2023
                     </span>
                  </p>
                  {/* <p className="details">
                     <strong>MERN Developer</strong>
                  </p> */}
                  <ul className="bullet-list">
                     <li>
                        Orchestrated the design and development of scalable web applications like Jio Unified Ads, Jio Reels, and JAMP, delivering projects on
                        time and exceeding performance benchmarks.
                     </li>
                     <li>
                        <strong>Developed the Dashboard module</strong> for <strong>JAMP and Jio Reels</strong>, enabling users to visualize analytics data
                        through <strong>interactive charts and graphs</strong>, with advanced filtering options, improving data accessibility by 40%.
                     </li>
                     <li>
                        <strong>Developed the Analytics module</strong> for <strong>Jio Reels</strong>, allowing users to analyze data in a{' '}
                        <strong>dynamic tabular format</strong>, where table columns adjusted <strong>dynamically based on applied filters</strong>, enhancing
                        data representation and usability by 35%.
                     </li>
                     <li>
                        <strong>Migrated the UI library</strong> from <strong>Material UI to Ant Design</strong>, boosting UI responsiveness by 30% and
                        improving overall performance.
                     </li>
                     <li>
                        <strong>Refactored and modernized legacy codebases</strong>, modularizing components and reducing overall code complexity by 40%.
                     </li>
                     <li>
                        <strong>Implemented reusable React.js components</strong>, cutting down redundant code by 25% and improving UI consistency across all
                        Jio web platforms.
                     </li>
                     <li>
                        <strong>Led the development of Jio Reels (Instreamo)</strong>, including core modules like landing pages and channel management,
                        focusing on seamless API integration and scalability.
                     </li>
                     <li>
                        <strong>Collaborated with cross-functional teams</strong>, ensuring agile delivery of high-performing applications, increasing
                        development efficiency by 35%.
                     </li>
                     <li>
                        <strong>Mentored 3+ junior developers</strong>, ensuring adherence to best coding practices and modern JavaScript (ES6+) standards.
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
                     {/* <span className="location" style={{ float: 'inline-end' }}>
                        Aug 2024 – Present
                     </span> */}
                  </p>
                  <ul className="bullet-list">
                     <li>
                        A comprehensive fitness management platform for Jio users, integrating advanced features for tracking fitness programs, real-time
                        analytics, and user engagement.
                     </li>
                     <li>
                        <b>Role - </b>Developed frontend (Admin) and backend (App, Admin) development using React, TypeScript, Node.js, Express, and MongoDB to
                        deliver a highly scalable solution.
                     </li>
                     <li>
                        <b>Key Features -</b>
                        Integrated OAuth2.0 authentication, real-time data synchronization, and custom error code scenarios to enhance debugging and user
                        experience.
                     </li>
                  </ul>
               </div>

               <div className="subsection">
                  <p className="institution">
                     <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://portal-g.instreamo.jio.com/', '_blank')}>
                        Jio Reels (Instreamo)
                     </span>
                     {/* <span className="location" style={{ float: 'inline-end' }}>
                        Jun 2023 – Aug 2024
                     </span> */}
                  </p>
                  <ul className="bullet-list">
                     <li>A server-side ad insertion (SSAI) platform enabling seamless API integrations with ad publishers.</li>
                     <li>
                        <b>Role - </b>Independently designed and developed the frontend critical modules like Channel, Job, Analytics, and Dashboard using
                        React.js and Redux.
                     </li>
                     <li>
                        <b>Impact - </b>Improved ad publisher integration efficiency by 30%, resulting in enhanced user engagement.
                     </li>
                  </ul>
               </div>

               <div className="subsection">
                  <p className="institution">
                     <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://jioads.jio.com/', '_blank')}>
                        Jio Unified Ads
                     </span>
                     {/* <span className="location" style={{ float: 'inline-end' }}>
                        Feb 2021 – May 2023
                     </span> */}
                  </p>
                  <ul className="bullet-list">
                     <li>A centralized platform enabling Jio users to create and manage ad campaigns across platforms like MyJio and Jio Pages.</li>
                     <li>
                        <b>Role - </b>Developed and optimized core features using React.js, focusing on performance, flexibility, and user-centric design.
                     </li>
                     <li>
                        <b>Outcome - </b>Streamlined the campaign creation process, reducing the time to launch ads by 20%.
                     </li>
                  </ul>
               </div>
               <div className="subsection">
                  <p className="institution">
                     JAMP
                     {/* <span className="location" style={{ float: 'inline-end' }}>
                        Nov 2020 – Dec 2022
                     </span> */}
                  </p>
                  <ul className="bullet-list">
                     <li>An internal portal for managing audiences across various Jio applications, streamlining workflows and enhancing data management.</li>
                     <li>
                        <b>Role - </b>
                        Designed and implemented critical modules (Dashboard, Audience Query, Users, Audience Overview, Audience Taxonomy), ensuring seamless
                        backend workflows with Node.js and MongoDB.
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
            </div>
         </section>
         {/* Technical Skills Section */}
         <section className="section">
            <h2 className="section-title">Technical Skills</h2>
            <ul className="bullet-list">
               {/* <b>Frontend - </b>React.js, Redux, TypeScript, JavaScript (ES6+), React Native (Expo), HTML, CSS, REST API Integration */}
               <li>
                  <b>Frontend - </b>React.js, Redux, JavaScript (ES6+), TypeScript, HTML, CSS, REST API Integration
               </li>
               <li>
                  <b>Backend - </b>Node.js, Express.js, REST API Development
               </li>
               <li>
                  <b>Database - </b>MongoDB (NoSQL), MySQL
               </li>
               <li>
                  <b>Frameworks - </b>Ant Design, Material UI, Tailwind CSS
               </li>
               <li>
                  <b>Tools - </b>Git, Postman, DevOps, VS Code
               </li>
               <li>
                  <b>Others - </b>JWT, OAuth2.0, API Design
               </li>
            </ul>
         </section>
      </div>
   );
};

export default App;
