import pethsapp1Light from '../img/mockups/pethsapp-1-light.png';
import pethsapp1Dark from '../img/mockups/pethsapp-1-dark.png';
import pethsapp2Light from '../img/mockups/pethsapp-2-light.png';
import pethsapp2Dark from '../img/mockups/pethsapp-2-dark.png';
import tsac1Light from '../img/mockups/tsac-1-light.png';
import tsac1Dark from '../img/mockups/tsac-1-dark.png';
import tsac2Light from '../img/mockups/tsac-2-light.png';
import tsac2Dark from '../img/mockups/tsac-2-dark.png';
import create1 from '../img/mockups/create-1.png';
import create2 from '../img/mockups/create-2.png';
import paradise1 from '../img/mockups/paradise-1.png';
import paradise2 from '../img/mockups/paradise-2.png';
import portrait from '../img/other/andrew.png';
import githubIcon from '../img/icons/github-icon.svg';
import linkedinIcon from '../img/icons/linkedin-icon.svg';
import instagramIcon from '../img/icons/instagram-icon.svg';

export const projects = [
  {
    name: 'Pethsapp',
    cardName: 'Pethsapp',
    type: 'Mobile App',
    overview:
      'Pethsapp is the official mobile application of Pierre Elliott Trudeau High School.',
    route: '/pethsapp',
    about:
      'Pethsapp was designed in Figma and developed using a Flutter front-end as well as a Firebase backend.',
    motivation:
      'The app was designed as an educational hub for the Pierre Elliott Trudeau High School community.',
    roles:
      "Throughout the app's revamping, my roles included project lead, developer, and UI/UX designer.",
    description: [
      'Pethsapp provides its users with vital scholastic information including daily announcements, essential links, and more.',
      'It is available on both the App Store and Google Play, and is currently used by over 1200 school community members.',
      "Earlier this year, I led the app's revamping, working alongside a team of developers and designers to modernize its user interface and functionalities.",
    ],
    buttonText: 'Download →',
    buttonLink: 'http://onelink.to/gvjacz',
    hasDark: true,
    mockups: [pethsapp1Light, pethsapp1Dark, pethsapp2Light, pethsapp2Dark],
    mockupClasses: [
      'pethsapp-1-mockup',
      'pethsapp-2-mockup',
      'pethsapp-3-mockup',
    ],
  },
  {
    name: 'CREATE Website',
    cardName: 'CREATE Markham',
    type: 'Website',
    overview:
      'Revampled website built for CREATE, a non-profit in Markham, Ontario.',
    route: '/create-website',
    about:
      'The website was designed using Figma and developed through HTML, CSS, and Javascript.',
    motivation:
      'It was built to help the CREATE organization in expanding its digital presence in the community.',
    roles:
      'Thorughout the creation process, my roles included designing and developing the website.',
    description: [
      'CREATE Markham is a youth-led non-profit organization that holds annual leadership conferences to promote student wellness within the Markham community.',
      "As this year's Technology Chairperson, I collaborated with fellow council members in organizing the conference.",
    ],
    buttonText: 'Visit Website →',
    buttonLink: 'https://createmarkham.ca/',
    hasDark: false,
    mockups: [create1, create2],
    mockupClasses: ['create-1-mockup', 'create-2-mockup', 'create-3-mockup'],
  },
  {
    name: 'TSAC Website',
    cardName: 'TSAC',
    type: 'Website',
    overview:
      "Revamped website for Pierre Elliott Trudeau High School's Student Council.",
    route: '/tsac-website',
    about:
      'The website was designed using Figma and developed through HTML, CSS, and Javascript.',
    motivation:
      'It was designed for the student council to relay information and resources to the student body.',
    roles:
      'Throughout the creation process, my roles included designing and developing the website.',
    description: [
      "TSAC is a student organization that represents the school's student body and makes decisions on its behalf.",
      'Together, we plan inclusive school-wide events and activities to boost student experience.',
      "As the current Technology Chairperson, my role is to enhance the school's technologies such as our app and website.",
    ],
    buttonText: 'Visit Website →',
    buttonLink: 'https://tsac.ca/',
    hasDark: true,
    mockups: [tsac1Light, tsac1Dark, tsac2Light, tsac2Dark],
    mockupClasses: ['tsac-1-mockup', 'tsac-2-mockup', 'tsac-3-mockup'],
  },
  {
    name: 'Paradise Tower Defense',
    cardName: 'Paradise Tower Defense',
    type: 'Game',
    overview:
      'A tower defense game created using the Greenfoot Java framework.',
    route: '/paradise-tower-defense',
    about:
      'Paradise Tower Defense was developed using Java in addition to Greenfoot, a Java framework.',
    motivation:
      'The game was create and submitted as the final project for my grade 12 computer science class.',
    roles:
      'Thorughout the development process, my roles included developing the game and designing its assets.',
    description: [
      'The game is a take of the classic tower defense genre, complete with six different levels, as well as a wide array of towers and enemies the player comes into contact with.',
      'It also boasts various sound tracks and sound effects, as well as a global leaderboard.',
      "Various data structures and algorithms were implemented to facilitate the game's interactions. Additionally, the game also incorporates modular code, using of OOP concepts.",
    ],
    buttonText: 'Play Game →',
    buttonLink: 'https://www.greenfoot.org/scenarios/28182',
    hasDark: false,
    mockups: [paradise1, paradise2],
    mockupClasses: [
      'paradise-1-mockup',
      'paradise-2-mockup',
      'paradise-3-mockup',
    ],
  },
];

export const experiences = [
  {
    title: 'Technology Chairperson',
    company: 'Pierre Elliott Trudeau High School Student Activities Council',
    date: 'September 2021 — Present',
    location: 'Markham, ON',
    description: [
      'Collaborating with council members in organizing events for the student body and school community',
      'Coding technological games and activities for student council events using HTML, CSS, and JavaScript',
      'Teaching students at other high schools in the region to develop their own Flutter mobile apps',
    ],
  },
  {
    title: 'President and Founder',
    company: 'Pierre Elliott Trudeau High School App Development Council',
    date: 'July 2021 — Present',
    location: 'Markham, ON',
    description: [
      "Leading a team of designers and developers in enhancing Pethsapp, my high school's mobile app",
      "Developing the app's front-end using Flutter and Dart, utilizing Firebase for its back-end",
      "Instructing other designers developers on how to use and update Pethsapp's various technologies",
    ],
  },
  {
    title: 'Tennis Coach',
    company: 'Unionville Tennis Club',
    date: 'June 2020 — October 2021',
    location: 'Markham, ON',
    description: [
      'Taught over 500 hours of tennis professionally to dozens of students of various ages and skill levels',
      'Implemented COVID protocols to ensure the safety of clients alongside other club staff',
      'Obtained quintessential professional workplace experience in addition to vital leadership capabilities',
    ],
  },
  {
    title: 'Technology Chairperson',
    company: 'CREATE Markham Council',
    date: 'August 2021 — Present',
    location: 'Markham, ON',
    description: [
      'Promoting student leadership and wellness through the annual conference and its following events',
      'Working alongside council members in planning and carrying events for the enjoyment of participants',
      "Developed the organization's website using HTML, CSS, and Javascript, designed it using Figma",
    ],
  },
];

export const about = {
  portrait: portrait,
  socials: [
    {
      icon: githubIcon,
      link: 'https://github.com/qiaoandrew',
      alt: 'Github icon',
    },
    {
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/andrewqiao/',
      alt: 'LinkedIn icon',
    },
    {
      icon: instagramIcon,
      link: 'https://www.instagram.com/andrew.qiao/',
      alt: 'Instagram icon',
    },
  ],
  description: [
    'Hey there! My name is Andrew Qiao, and I am currently a grade 12 student at Pierre Elliott Trudeau High School, in Markham, Ontario. ',
    'I have an immense passion for various Computer Science topics, including artificial intelligence, data science, as well as web development.',
    'In the future, I plan on becoming a software engineer and implementing my skills to bring equitable opportunities to all global citizens.',
    "Feel free to send me a message on any of my socials and say hi! I'd love to get to know you!",
  ],
};
