import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import './external1.scss';
import ImageSlider from '../components/imageSlider/ImageSlider';
import { Helmet } from 'react-helmet';

const IMAGES = [
  `${process.env.PUBLIC_URL}/persona9.png`,
  `${process.env.PUBLIC_URL}/persona10.png`,
  `${process.env.PUBLIC_URL}/persona13.png`,
  `${process.env.PUBLIC_URL}/persona8.png`
];

const External2 = () => {
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
          <h1 id='external-tittle'>Eduardo Ospina</h1>
          <p className="p-presentation">
            Responsive website that acts as a <strong>comprehensive platform for mental and emotional well-being</strong>, offering personalized services that cover a wide range of users, including adults of different ages.
          </p>
          <p className="p-content">
            <strong>This digital platform</strong> provides specialized care in psychological therapies adapted to individual needs, from early stimulation to intervention in cases of special abilities and specific needs. In addition, it offers guidance on stress management, personal development and emotional well-being, promoting a healthy lifestyle that promotes mental and emotional balance at all stages of life.
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
            The integration of the home page into the digital presence of the psychology professional is a meeting point, development and strengthening of their brand on digital platforms. Research shows a general lack of competence when applying new technologies, therapeutic techniques and digital tools. This allows the patient experience to be innovative, based on a deep understanding of their emotional needs, abilities, expectations and preferences. An exclusive and inclusive design focused on the patient, through strategies focused on their well-being. Usability evaluations ensure that the platform is adaptable and scalable, with a flexible interface that adapts to different devices, guaranteeing access to therapy and resources from anywhere. In addition, it complies with international accessibility standards for people with various abilities, optimizing the patient experience with emerging technologies. These elements strengthen the acceptance of psychological practice, facilitating its distribution on multiple digital platforms.
          </p>
        </article>

        <div className="div-features">
          <h3 className="features">
            Proposed Features
          </h3>
          <p className="features">
            Brand integration with application on all digital platforms.
            <br />
            Show users previous experiences with a brand focus.
            <br />
            Intuitive, easy and aesthetic landing page.
            <br />
            Focus on user experience.
          </p>
          <h3 className="design">
            Design Approach
          </h3>
          <p className="design">
            Humanize the patient's experience through the projection of therapeutic work.
            <br />
            A lightweight design that allows for an authentic connection to psychological practice.
            <br />
            Highlight the achievements made by previous patients that inspire others to begin their personal growth process.
            <br />
            Facilitate fluid navigation within the page and on other digital platforms, providing easy access to information and therapeutic resources.
          </p>
        </div>

        <article className='description'>
          Creating an <strong>interactive platform</strong> that connects with patients effectively requires finding a delicate balance, more challenging than it seems: it must be welcoming and accessible, while maintaining the essence and seriousness of the therapeutic approach. The experience should be pleasant, without losing the commitment to mental and emotional well-being.
        </article>

        <div className="empathy">
          <h3 className="empathy">Empathy</h3>
          <p className="empathy">
            A deeper understanding of clients' feelings and expectations regarding psychological services has been achieved through person-centered research. This research allows us to effectively guide future design decisions and therapeutic approaches. Clarifies qualitative differences between those seeking support for themselves or their children, addressing individual emotional and psychological needs. Psychological practice aims to provide peace of mind to its users about the quality of services, professionalism and training of specialists, providing the necessary support to achieve well-being and personal growth in each session.
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
            The use of rapid prototyping and multiple iterations highlighted the challenge of maintaining simplicity across all essential tasks consistently. This process was essential to identify cohesive design patterns and to understand users' navigation flows on the platform, ensuring a fluid and effective experience in each interaction.
          </p>
          <div className="img-integration">
            <img src="./wireframe4.jpg" alt="" className="integration" />
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
                Improvements based on usability studies refined the initial design of the professional page. Findings revealed that integrating therapeutic goals, professional image, and offered services seamlessly allows patients to navigate with ease and purpose, decreasing dropout rates.
              </p>
            </div>
            <div className="lessons">
              <h3 className="lessons">
                Lessons Learned
              </h3>
              <p className="lessons">
                It is essential that the page is centered on the patient, since they are the ones who determine whether navigation is intuitive or frustrating. A smooth browsing experience is as important as the quality of the psychological support provided.
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

export default External2; 