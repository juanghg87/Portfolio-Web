import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import './external1.scss';
import ImageSlider from '../components/imageSlider/ImageSlider';
import { Helmet } from 'react-helmet';

const IMAGES = [
  `${process.env.PUBLIC_URL}/persona5.png`,
  `${process.env.PUBLIC_URL}/persona6.png`,
  `${process.env.PUBLIC_URL}/persona2.png`,
  `${process.env.PUBLIC_URL}/persona8.png`
];

const External3 = () => {
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
          <h1 id='external-tittle'>Leslie Nuñez</h1>
          <p className="p-presentation">
            The primary challenge in the UX design of the Leslie Nuñez Lymphotherapy Center website was to consolidate social media platforms and <strong>enhance its brand identity</strong>. Our goal was to craft a seamless user experience mirroring the center's values and ethos, while delivering transparent and user-friendly information about its services.
          </p>
          <p className="p-content">
            A strategic approach was implemented to seamlessly integrate the center's social networks into the website, enabling users to effortlessly access relevant content and share their experiences. A robust and cohesive visual identity was meticulously crafted and echoed across the website, from the logo to the color palette and typography, fostering a unified and memorable brand experience. Usability and accessibility were prioritized throughout the design process, with an emphasis on clarity and simplicity in navigation, ensuring users could readily find the information they sought.
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
            The integration of the home page into the brand's digital portfolio represents a key moment in the evolution and strengthening of its presence on online platforms. Market research reveals a trend of lagging among competitors in adopting new technologies, marketing tactics, and design approaches. This opens an opportunity to create innovative experiences based on extensive research into user needs, expectations and preferences. Implementing customer-centric strategies encourages unique and inclusive design. Usability tests optimize the interface, guaranteeing its adaptability to different devices, with reusable components that reflect the brand identity. Compliance with international accessibility standards ensures that users with different abilities can easily access, while the use of emerging technologies improves performance. These factors strengthen brand acceptance and facilitate its efficient distribution through various digital channels.
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
          <strong>Taking advantage of the unique appeal of the Leslie Nuñez brand</strong> to develop a novel interactive platform requires finding a delicate balance that is more challenging than expected: it must be attractive and entertaining, without losing the essence and authenticity of the brand in the field of cosmetology.
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
              The page is carefully designed so that people of all ages, whether digital natives or not, can easily understand the iconography and feel comfortable in each interaction. By presenting clear options, the design facilitates decision-making and improves the browsing experience, creating an intuitive environment that allows the user to establish their first contact in a closer and more accessible way, fostering a feeling of constant support during their journey on the platform.
            </p>
            <h3 className='h3-iframe'>
              High-Fidelity Prototype
            </h3>
            <p>
              The use of color contrasts is key to maintaining the identity of the professional, serving as a visual reference for inclusive navigation in accordance with international standards. As users explore the site, navigation becomes more fluid, based on their previous experiences. The elements are strategically located to optimize the navigation flow, allowing you to easily find what you are looking for. Although the design highlights important aspects of the practice, in some cases it can influence the location of options such as scheduling an appointment or accessing specific resources. However, navigation remains simple and focused on the content, prioritizing user well-being over structural complexity.
            </p>
          </div>
          {/* <iframe loading="lazy"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrYrcznV01nHXuyvRVOJ3i5%2FLeslie-Nu%25C3%25B1ez%3Ftype%3Ddesign%26node-id%3D1-3%26t%3DF3skMZo7TWf2BeHj-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
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

export default External3; 