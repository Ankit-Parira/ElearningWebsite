import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/cloud-computing.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Full-stack development of an e-learning website includes front-end design, interactive features, back-end functionalities, database management, user authentication, and payment integration for a seamless, multimedia-rich learning experience.',
      image: WebDevImage,
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Machine learning of an e-learning website involves using algorithms to analyze user behavior, preferences, and performance data. It personalizes content, recommends courses, and optimizes learning paths. It enhances the platforms efficiency, adaptability, and effectiveness, providing users with a tailored and enriching educational experience.',
      image: MLImage,
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Cloud computing of an e-learning website enables seamless scalability and accessibility. It hosts course content, databases, and applications on remote servers, reducing infrastructure costs. Learners can access resources from any device, while educators can collaborate efficiently. High reliability, data security, and easy updates enhance the platforms overall performance and user experience.',
      image: CloudImage,
    },
  ];

  return (
    <div className="course-section">
      <div className="course-container">
        {courses.map((course, index) => (
          <div className={`course-card ${index % 2 === 0 ? 'course-section-even' : 'course-section-odd'}`} key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Go To Course
              </Link>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
