import React from 'react';

const Form = _ => {
  return (
    <form>
      <input type='text' placeholder='Name' required />
      <input type='text' placeholder='Topic' required />
      <button type='submit'>Go!</button>
    </form>
  );
};

const Course = _ => (
  <li className='course media group'>
    <img className='course-img' src='SRC_OF_COURSE_HERE' alt='course' />
    <div>
      <h3>TITLE OF COURSE HERE</h3>
      <p>DESCRIPTION OF COURSE HERE</p>
    </div>
  </li>
);

const Navigation = _ => (
  <header>
    <span className='icn-logo'>
      <i className='material-icons'>code</i>
    </span>
    <ul className='main-nav'>
      <li>Home</li>
      <li>About</li>
      <li>Teachers</li>
      <li>Courses</li>
    </ul>
  </header>
);

const SectionWrapper = ({ children }) => <div className='main-content'>{children}</div>;

const Topic = _ => {
  return (
    <li>
      <button>LABEL_HERE</button>
    </li>
  );
};

const About = _ => (
  <div className='main-content'>
    <h2>About</h2>
    <p>
      The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and
      more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit
      the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
      courses.
    </p>
  </div>
);

const TOPICS = [
  { id: '1', topic: 'HTML' },
  { id: '2', topic: 'CSS' },
  { id: '3', topic: 'JavaScript' },
];

const Courses = _ => {
  return (
    <div className='main-content courses'>
      <div className='course-header group'>
        <h2>Courses</h2>
        <List className='course-nav' type='topic' item={TOPICS} />
      </div>
      <List type='course' />
    </div>
  );
};

const Featured = _ => {
  return (
    <div className='main-content'>
      <h2>Featured:</h2>
      <p>
        Introducing <strong>FEATURRED NAME</strong>, a teacher who loves teaching courses about
        <strong>FEATURED TOPIC</strong>!
      </p>
    </div>
  );
};

const Home = _ => {
  return (
    <div className='main-content home'>
      <h2>Multi Page React App Example</h2>
      <p>
        Learn front end web development and much more! This simple directory app offers a preview of
        our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn
        to code and get the skills you need to launch a new career in front end web development.
      </p>
      <p>
        We have thousands of videos created by expert teachers on web design and front end
        development. Our library is continually refreshed with the latest on web technology so you
        will never fall behind.
      </p>
      <hr />
    </div>
  );
};

const NotFound = _ => (
  <div className='main-content not-found'>
    <i className='material-icons icn-error'>error_outline</i>
    <h2>Page Not Found</h2>
  </div>
);

const Teachers = _ => {
  return (
    <div className='main-content'>
      <h2>Teachers</h2>
      <List type='teacher' className='group' />
    </div>
  );
};

const SelectedTeacher = _ => {
  return <div className='main-content teacher'>{/* teacher component here */}</div>;
};
