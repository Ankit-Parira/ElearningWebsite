import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './About.css'
import aboutimg from '../assets/aboutus.jpg';import './Service.css';

const services = [
  {
    title: 'Online Courses ',
    description: 'Diverse online courses on e-learning app, accessible anytime, anywhere. Upgrade skills and explore new subjects effortlessly. Enroll today.',
    imageUrl: 'https://source.unsplash.com/400x300/?courses',
   
  },
  {
    title: 'Live Webinars ',
    description: 'Interactive live webinars on the e-learning app, enhancing knowledge with experts and engaging discussions. Join now for dynamic learning. ',
    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
  },
  {
    title: 'Learning Experience',
    description: 'Engaging, interactive learning experiences on the e-learning app. Access courses, quizzes, and resources for a rewarding educational journey.',
    imageUrl: 'https://source.unsplash.com/400x300/?personalized',
  },
];



const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to E-Learning App (Celebal Technology) </h1>
      <center><h3><b>Welcome to our dynamic eLearning website, offering an extensive range of domains including web development, machine learning, and more. Discover the art of creating captivating websites, delve into the intricacies of machine learning algorithms, and explore other exciting fields.</b></h3></center>  <br></br>
      <button className="button">
        <Link to="/course" className="link">
          Explore
          </Link>
      </button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


      <div className="About-section"><br></br>
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">About The E-Learning App</h1>
                    
                    <p>
                    The eLearning app offers a wide range of interactive courses, fostering convenient and engaging learning experiences.
                    </p>
                    <p>
                    Users can access diverse subjects and learn at their own pace, making education accessible and flexible anytime, anywhere.
                    </p></div>
                <div className="About-image">
                    <img src={aboutimg}
                        alt="About Us" />
                </div><br></br><br></br>
            </div>
        </div><br></br><br></br><br></br>

        <div>
      {services.map((service, index) => (
        <div className={`Service-section-${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="Service-container">
            <div className="Service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="Service-text">
              <h1 className="title">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
