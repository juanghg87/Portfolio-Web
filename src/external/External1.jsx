import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import './external1.scss';
import ImageSlider from '../components/imageSlider/ImageSlider';
import { Helmet } from 'react-helmet';

const IMAGES = [
  `${process.env.PUBLIC_URL}/persona1.png`,
  `${process.env.PUBLIC_URL}/persona2.png`,
  `${process.env.PUBLIC_URL}/persona3.png`,
  `${process.env.PUBLIC_URL}/persona4.png`
];

const External1 = () => {
  return (
    <div>
      <Helmet>
        <title>JuanG | Case Study</title>
        <link
          rel="preload"
          href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTzFIyCADpZGEi5GQ3ut14g%2FGlobal-Fit%3Ftype%3Ddesign%26node-id%3D56-4%26t%3DfYqxSyy8gpKM9GRe-1%26scaling%3Dscale-down%26page-id%3D56%253A2%26mode%3Ddesign"
          as="document"
        />
        <link
          rel="preload"
          href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTzFIyCADpZGEi5GQ3ut14g%2FGlobal-Fit%3Ftype%3Ddesign%26node-id%3D1-2%26t%3DAX899RvIDBliCt78-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
          as="document"
        />
      </Helmet>
      <SideBar />
      <Navbar />
      <body id='body-external'>
        <main>
          <h1 id='external-tittle'>Global Fit</h1>
          <p className="p-presentation">
            Responsive website that serves as a <b>comprehensive platform</b> for functional and personalized
            training, covering a diverse spectrum of users that includes people adults of different ages.
          </p>
          <p className="p-content">
            <strong>A digital platform</strong> that offers specialized services in sports initiation, early stimulation, adaptation to sport for special needs and different abilities, sports training competitive and
            recreational at different ages and disciplines, functional training for a lifestyle healthy and active, thus improving physical and mental well-being.
          </p>
        </main>

        <hr />
        <div className="specifications">
          <div>
            <h3>Roles</h3>
            <p id='p-external'>This is a concept project where I assumed the following</p>
            <ul>
              <li>Interaction (IxD) Designer</li>
              <li>User Experience (UX) Designer</li>
              <li>User Interface (UI) Designer</li>
              <li>Web Developer</li>
            </ul>
          </div>
          <div>
            <h3>Components</h3>
            <p id='p-external'>
              Interaction Design: High-fidelity interactive prototype
            </p>
            <ul>
              <li>Competitive analysis</li>
              <li>User surveys and one-on-one</li>
              <li>Interviews</li>
              <li>Task flows</li>
              <li>Journey maps</li>
              <li>Site maps</li>
              <li>Low fidelity wireframes and prototype</li>
              <li>High fidelity prototype</li>
              <li>Usability tests and findingse</li>
            </ul>
          </div>
          <div>
            <h3>Project Specifications</h3>
            <p id='p-external'>
              Duration: 4 weeks, tools:
            </p>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React Js</li>
            </ul>
          </div>
        </div>
        <hr />

        <article>
          <h3>
            The Opportunity
          </h3>
          <p className="opportunity">
            The integration of the landing page into the company's digital portfolio is a meeting point, development and enhancement of the brand on digital platforms. Market research shows a general delay in competition, in the application of new technologies, marketing techniques and design to platforms. This allows the user experience to be innovative, through the application of user research, their needs, skills, expectations and tastes. An exclusive, inclusive design through user-centered design strategies. Usability tests. An adaptable and scalable design with a flexible interface that adapts to different devices, with reusable components designed to suit the brand. Accessibility standards under international parameters for people with different abilities and performance optimization through emerging technologies. These elements allow the acceptance of the brand to be enhanced and easy to distribute on different digital platforms.
          </p>
        </article>

        <div className="div-features">
          <h3 className="features">
            Proposed Features
          </h3>
          <p className="features">
            Brand integration with application on all digital platforms.
            Show users previous experiences with a brand focus.
            Intuitive, easy and aesthetic landing page.
            Focus on user experience.
          </p>
          <h3 className="design">
            Design Approach
          </h3>
          <p className="design">
            Humanize the user experience through the projection of work in the field.
            Lightweight design that allows an experience of connection with the brand.
            Highlight goals achieved by previous users that inspire others to take the courses.
            Allow fluid navigation within the landing page and other digital platforms.
          </p>
        </div>

        <article className='description'>
          Utilizing Global Fit's distinctive appeal to cultivate a novel <strong>interactive platform</strong> demands pinpointing a delicate balance that proves more challenging than anticipated: it must be simultaneously enjoyable and fun while staying true to the essence of the brand.
        </article>

        <div className="empathy">
          <h3 className="empathy">Empathy</h3>
          <p className="empathy">
            A deeper understanding of customers' feelings and expectations regarding services and activities within Global Fit was achieved through people research. User research serves to effectively direct future design decisions. Clarify the qualitative nuances between individuals inclined to use the services for themselves or their children, covering the sporting needs of each individual. The brand aims to give peace of mind to its users about the quality of the services, the professionalism, training and education of the professionals in charge, thus giving the support that is sought in someone when giving their maximum and enjoyment in physical activities.
          </p>
        </div>
        <div style={{
          maxWidth: "1200px",
          width: "100%",
          height: "600px",
          margin: "0 auto"
        }}
          className='slider-image-container'
        >
          <ImageSlider imageUrls={IMAGES} />
        </div>
        <div className="integration">
          <h3 className="integration">
            Integration
          </h3>
          <p className="integration">
            Rapid paper prototyping (multiple iterations) revealed the challenge of maintaining simplicity for all essential tasks at a consistent level. This exercise was crucial for both identifying established, cohesive design patterns within Global Fit and understanding users' on-screen navigation workflows.
          </p>
          <div className="img-integration">
            <img src="./sketch.png" alt="" className="integration" />
          </div>
          <p className="integration">
            Users are not accustomed to the company logo serve to return to the home page, will implement iconography for this purpose. The WhatsApp icon It also can schedule a class courtesy, but it is not intuitive for some people. will be added a legend indicating by that means too class is scheduled courtesy. To reserve or communicate with the company, in the form is not requested the email, that will be added media.
          </p>
        </div>

        <div class="container-iframe">
          {/* <iframe
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTzFIyCADpZGEi5GQ3ut14g%2FGlobal-Fit%3Ftype%3Ddesign%26node-id%3D1-2%26t%3DAX899RvIDBliCt78-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
            allowfullscreen></iframe> */}

          <div class="p-iframe">
            <h3 className='h3-iframe'>
              Sketching
            </h3>
            <p>
              The page is meticulously crafted to ensure that users across a wide age spectrum, regardless of whether
              they are digital natives or not, can effortlessly grasp the iconography and consistently feel at ease
              with their interactions. By presenting users with a list to choose from, the design enhances
              memorability and streamlines the selection process, fostering a more intuitive experience. This approach
              enables users to make their initial contact in a more engaging manner, fostering a sense of
              companionship and support throughout their journey on the platform.
            </p>
            <h3 className='h3-iframe'>
              High-Fidelity Prototype
            </h3>
            <p>
              Color contrasts are crucial for maintaining the corporate identity, as they serve as the primary
              identifiers of the brand and enable a diverse range of users to navigate in accordance with
              international standards.

              As users explore the site, intuitive navigation evolves, building upon their prior experiences. This
              iterative process allows elements to be strategically positioned to enhance navigation flow, ensuring
              users can easily find what they seek.

              While the design emphasizes highlighting company products, there are instances where it may impact
              users' ability to locate features like scheduling a class or accessing training plans. Nonetheless,
              users will feel at ease navigating the site, focusing on content rather than its architectural
              complexities.
            </p>
          </div>
          {/* <iframe loading="lazy"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTzFIyCADpZGEi5GQ3ut14g%2FGlobal-Fit%3Ftype%3Ddesign%26node-id%3D56-4%26t%3DfYqxSyy8gpKM9GRe-1%26scaling%3Dscale-down%26page-id%3D56%253A2%26mode%3Ddesign"
            allowfullscreen></iframe> */}
        </div>

        <div className="next">
          <h3 className="next">
            Next
          </h3>
          <div className="next-container">
            <div className="next-impact">
              <h3 className="next-impact">
                Impact
              </h3>
              <p className="next-impact">
                Usability study enhancements refined the company's webpage's initial design. Findings revealed that integrating business objectives, corporate image, and product offerings seamlessly allows clients to navigate the site fluidly and purposefully, reducing abandonment rates
              </p>
            </div>
            <div className="lessons">
              <h3 className="lessons">
                Lessons Learned
              </h3>
              <p className="lessons">
                Ensuring the page is user-centric is paramount, as it's the end user who determines whether navigation feels intuitive or frustrating. A seamless navigation experience is equally crucial to the product or service offered.
              </p>
            </div>
            <div className="develop">
              <h3 className="develop">
                Develop
              </h3>
              <p className="develop">
                Develop HTML, CSS, JavaScript, and React.js code to create the website. Secure Cloud Hosting services for efficient storage and improved user navigation experience. Publish the webpage using a domain compliant with international standards.
              </p>
            </div>
          </div>
        </div>

        <div className='container-button' >
          <a className='button-resume' href="#">
            <button className='button-resume'>Visit us soon</button>
          </a>
        </div>

      </body>
    </div>

  )
}

export default External1; 