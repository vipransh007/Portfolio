import React from 'react';
import TextPressure from '../components/TextPressure/TextPressure';
import SplitText from '../components/SplitText/SplitText.jsx';
import TiltedCard from '../components/TiltedCard/TiltedCard';
// Assuming you have a TextType component for the animated description text
import TextType from '../components/TextType/TextType.jsx'; 

// --- Project Item Component: Handles the Card/Text Side-by-Side Layout ---
const ProjectItem = ({ title, description, imageSrc, captionText, accessLink, reverse = false }) => {
    
    // Content Block (SplitText Heading, TextType Description, and Link)
    const content = (
      <div className="flex flex-col justify-center h-full space-y-4 p-4">
        
        {/* Project Heading */}
        <SplitText 
          text={title} 
          className="text-5xl mb-4 font-extrabold text-blue-300" // Changed color for contrast
          delay={50}
        />
        
        {/* Project Description (Using TextType for animation) */}
        <SplitText
          text={description} 
          className="text-lg text-gray-300" 
          delay={10} 
        />
        
        {/* Project Link */}
        <p className='text-white font-bold mt-4'>
          Project Link: 
          <a 
            href={accessLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-400 ml-2 underline transition duration-300"
          >
            Link
          </a>
        </p>
      </div>
    );

    // Card Block
    const card = (
      <div className="flex justify-center items-center">
        <TiltedCard 
          captionText={captionText} 
          imageSrc={imageSrc}
          imageWidth="500px"
        />
      </div>
    );

    // Grid Layout: 2 columns, centered items, with a separator line
    return (
      <div className={`grid grid-cols-2 gap-10 items-center border-b border-gray-700 py-16`}>
        {/* Conditionally swap order based on 'reverse' prop */}
        {reverse ? content : card}
        {reverse ? card : content}
      </div>
    );
};
// ------------------------------------------------------------------------


function Projects() {
    
    // --- Project Data with Detailed Technical Descriptions ---
    const demoItems = [
      { 
          text: 'CAREEAR CONNECT', 
          description: '🚀 **A High-Availability MERN Stack Employment Ecosystem.** Engineered as a **full-stack job portal**, this system leverages **MongoDB** for flexible document storage and **Express/Node.js** for robust API microservices. Key features include **dual-role authorization** utilizing JSON Web Tokens (JWT), sophisticated **Elasticsearch-like job indexing** for sub-second search latency, and a stateful **candidate pipeline management dashboard** that provides real-time status checks, ensuring **data integrity** across multi-tenant user contexts.', 
          image: '/CarearConnectImage.jpg',
          accessLink: 'https://react-job-portal-main-2k5s.vercel.app/'
      },
      { 
          text: 'TranZieee', 
          description: '🖼️ **Secure, Scalable Microservice for Computer Vision & E-commerce.** This MERN application implements a **dedicated image processing microservice** using **Node.js workers** to handle resource-intensive, **non-blocking background removal** tasks (potentially leveraging OpenCV or similar libraries). The system integrates a certified **third-party payment gateway (e.g., Stripe/PayPal)** for secure transaction processing, complete with a relational **credit consumption model** implemented in MongoDB, demonstrating a mastery of both **API security (OAuth/SSL)** and **e-commerce logistics**.', 
          image: '/bgremover.jpg',
          accessLink: 'https://react-job-portal-main-2k5s.vercel.app/login'
      },
      { 
          text: 'TripleDockerized', 
          description: '🐳 **CI/CD Pipeline Mastery via Container Orchestration.** This project is a demonstration of **DevOps best practices**, showcasing a **triple-containerized architecture**. The **React frontend**, **Express API server**, and **MongoDB database** each reside in dedicated Docker containers. This setup ensures **environment parity** and facilitates seamless, automated deployment via a **Continuous Integration/Continuous Delivery (CI/CD) pipeline**. It exemplifies robust **infrastructure-as-code (IaC)** principles for maximal scalability and maintainability in production.', 
          image: '/profilePhoto.jpg',
          accessLink: 'https://react-job-portal-main-2k5s.vercel.app/login'
      },
      { 
          text: 'Exceliante (The Excel Visualizer)', 
          description: '📊 **Interactive Data Science Visualization Engine.** This **MERN Stack data tool** specializes in transforming proprietary environmental datasets. It uses **React Plotly.js**—a high-performance charting library—to render complex, interactive visualizations (e.g., heatmaps, 3D scatter plots). The architecture features a **stream-based ingestion API** to handle large XLSX/CSV files efficiently, performing **server-side data sanitization and transformation** before visualization, ensuring exceptional **frontend responsiveness** and **data fidelity**.', 
          image: '/profilePhoto.jpg',
          accessLink: 'https://react-job-portal-main-2k5s.vercel.app/login'
      }
    ];

    return (
      <div className='max-w-7xl mx-auto'>
        {/* Main Heading */}
        <TextPressure text="My Projects" className="text-4xl font-bold text-center text-white my-20" />
        
        {/* Project List Container */}
        <div className='p-8'> 
          {demoItems.map((item, index) => (
            <ProjectItem
              key={item.text}
              title={item.text}
              description={item.description}
              captionText={`Project ${index + 1}`}
              imageSrc={item.image}
              accessLink={item.accessLink} // Passing the access link
              reverse={index % 2 !== 0} // Alternating card position (left/right)
            />
          ))}
        </div>
      </div>
    );
}

export default Projects;