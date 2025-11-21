import React from 'react';
import TextPressure from '../components/TextPressure/TextPressure.jsx';
import CardSwap, { Card } from '../components/CardSwap/CardSwap.jsx';
import SplitText from '../components/SplitText/SplitText.jsx';

function About() {
  return (
    <div className='bg-black text-white min-h-screen p-10'>
      <TextPressure text="About Me" className="text-6xl text-center mb-10" />

      {/* 🚀 NEW FLEX CONTAINER: Wraps both Left Text and Right CardSwap */}
      <div className="flex justify-between items-start max-w-7xl mx-auto">


        <div className="w-1/2 p-4 pt-30 pr-10">
          <SplitText text="My technical commitment is clearly demonstrated through tangible achievements across major coding platforms. I maintain competitive ratings on LeetCode and GeeksforGeeks (GFG) contests, showcasing my consistent ability to solve complex Data Structures and Algorithms (DSA) challenges under pressure."
          delay="10"
          className="mb-8"
          />

          <SplitText text="I totally leveled up my skills during my Full-Stack Internship at Zidio Developments this past summer (June to August 2025). I didn't just tinker—I actually engineered and rolled out an end-to-end full-stack website. I rocked React and Tailwind CSS to build a responsive, animated frontend that seriously boosted user engagement by 30%. On the backend, I used Node.js and MongoDB to automatically process over 100 Excel files weekly, all secured with JWT authentication. Plus, I optimized performance by implementing Lazy-reloading in React, which chopped initial load times by a solid 30%! I even built a secure data visualization platform that made generating 50+ daily reports super easy."
          delay="10"
          />
        </div>

        <div className="w-1/2 flex justify-end">
          <div style={{ height: '600px', position: 'relative' }} className="mr-10 max-w-lg">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {/* Card 1 */}
              <Card>
                <div className="flex flex-col items-center p-4">
                  <img src='/GitHub.jpg' alt='Item 1 Image' className="w-50 h-60 object-cover rounded-full mb-4 shadow-lg" />
                  <h3>GitHub Profile: Vipransh007</h3>
                  <p className="text-sm text-gray-400">.Click on the photo to visit Profile</p>
                </div>
              </Card>

              {/* Card 2 */}
              <Card>
                <div className="flex flex-col items-center p-4">
                  <img src='/leetcode.jpg' alt='Item 2 Image' className="w-50 h-60 object-cover rounded-full mb-4 shadow-lg" />
                  <h3>LeetCode Profile: Vipransh9123</h3>
                  <p className="text-sm text-gray-400">Click on the photo to visit Profile</p>
                </div>
              </Card>

              {/* Card 3 */}
              <Card>
                <div className="flex flex-col items-center p-4">
                  <img src='/Gfg.jpg' alt='Item 3 Image' className="w-50 h-60 object-cover rounded-full mb-4 shadow-lg" />
                  <h3>GFG Profile: Vipranshgk9</h3>
                  <p className="text-sm text-gray-400">Click on the photo to visit Profile</p>
                </div>
              </Card>

              {/* Card 4 */}
              <Card>
                <div className="flex flex-col items-center p-4">
                  <img src='/resume.jpg' alt='Item 4 Image' className="w-50 h-60 object-cover rounded-full mb-4 shadow-lg" />
                  <h3>Resume</h3>
                  <p className="text-sm text-gray-400">Click on the photo to visit Profile</p>
                </div>
              </Card>

              {/* Card 5 (The new card) */}
              <Card>
                <div className="flex flex-col items-center p-4">
                  <img src='/codolio.jpg' alt='Item 5 Image' className="w-50 h-60 object-cover rounded-full mb-4 shadow-lg" />
                  <h3>Codolio: vipransh</h3>
                  <p className="text-sm text-gray-400">Click on the photo to visit Profile </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;