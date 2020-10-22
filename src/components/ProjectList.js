import Tic from '../assets/images/tic.png';
import Comp from '../assets/images/comp.png';
import Poll from '../assets/images/poll.png';
import Task from '../assets/images/task.png';
import SAM from '../assets/images/SAM.png';

const projects = [
  {
    id: 1,
    name: 'Tic-Tac-Toe',
    type: 'Personal',
    desc: 'Placeholder',
    imgPath: Tic,
    tech: ['JavaScript', 'CSS', 'HTML', 'AJAX', 'jQuery', 'Bootstrap'],
  },
  {
    id: 2,
    name: 'Compounding Tracker',
    type: 'Personal',
    desc: 'Placeholder',
    imgPath: Comp,
    stack: [
      'JavaScript',
      'CSS',
      'HTML',
      'AJAX',
      'jQuery',
      'Bootstrap',
      'Ruby on Rails',
      'PostgreSQL',
      'Heroku',
    ],
  },
  {
    id: 3,
    name: 'Survey App',
    type: 'Team',
    desc: 'Placeholder',
    imgPath: Poll,
    stack: [
      'JavaScript',
      'CSS',
      'HTML',
      'AJAX',
      'jQuery',
      'Bootstrap',
      'Express',
      'Node.js',
      'Chart.js',
      'Handlebars.js',
      'MongoDB',
      'Heroku',
    ],
  },
  {
    id: 4,
    name: 'Task Scheduler',
    type: 'Personal',
    desc: 'Placeholder',
    imgPath: Task,
    stack: [
      'React.js',
      'JSX',
      'Bootstrap',
      'Ruby On Rails',
      'PostgreSQL',
      'Heroku',
    ],
  },
  {
    id: 5,
    name: 'Smart Audit Master 4 (SAM4)',
    type: 'Business',
    desc: 'Placeholder',
    imgPath: SAM,
    stack: ['.NET', 'C#', 'SQL Server', 'JavaScript', 'CSS', 'SSIS'],
  },
];

export default projects;
