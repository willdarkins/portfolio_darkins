import budgetTracker from '../Images/portfolio/budgetTracker.jpg'
import eCommerceORM from '../Images/portfolio/eCommerceORM.jpg'
import employeeTracker from '../Images/portfolio/employeeTracker.jpg'
import javascriptQuiz from '../Images/portfolio/javascriptQuiz.jpg'
import noteTaker from '../Images/portfolio/noteTaker.jpg'
import passwordGenerator from '../Images/portfolio/passwordGenerator.jpg'
import readMeGenerator from '../Images/portfolio/readMeGenerator.jpg'
import socialAPIShell from '../Images/portfolio/socialAPIShell.jpg'
import teamBuilder from '../Images/portfolio/teamBuilder.jpg'
import techBlog from '../Images/portfolio/techBlog.jpg'
import weatherDashboard from '../Images/portfolio/weatherDashboard.jpg'
import scrollDown from '../Images/portfolio/scrollDown.jpg'
import fileShare from '../Images/portfolio/fileShare.jpg'
import stickyQuips from '../Images/portfolio/stickyQuips.jpg'

const portfolios = [
    {
        id: 1,
        category: 'Front-End',
        image: fileShare,
        link1: 'https://github.com/willdarkins/file-share',
        link2: 'https://file-share-darkins.vercel.app/',
        title: 'file-share',
        text: 'A file sharing application built with NEXT.js allowing users to download & send files to friends via links'
    },
    {
        id: 2,
        category: 'Front-End',
        image: stickyQuips,
        link1: 'https://github.com/willdarkins/sticky-quips-frontend',
        link2: 'https://willdarkins.github.io/sticky-quips-frontend/',
        title: 'stikcy-quips',
        text: 'Note taking application that resembles a sticky note format attaching links and short reminders'
    },
    {
        id: 3,
        category: 'Front-End',
        image: scrollDown,
        link1: 'https://github.com/willdarkins/the_scroll_down.git',
        link2: 'https://the-scroll-down.herokuapp.com/',
        title: 'The Scroll Down',
        text: 'A simple React news application utilizing Material UI and Framer motion on the front end, while ApolloGraphQL is the structural basis of the backend'
    },
    {
        id: 4,
        category: 'Front-End',
        image: techBlog,
        link1: 'https://github.com/willdarkins/darkins_tech-blog_wk14.git',
        link2: 'https://darkins-tech-blog-wk14.herokuapp.com/',
        title: 'Tech-Blog',
        text: 'A full stack CMS style blog site that allows developers to publish articles, write blog posts and express general thoughts on the computer science industry, while using a simple and attractive UI.'
    },
    {
        id: 5,
        category: 'Front-End',
        image: budgetTracker,
        link1: 'https://github.com/willdarkins/budget-tracker-PWA.git',
        link2: 'https://budget-tracker-darkins-v2.herokuapp.com/',
        title: 'Budget Tracker PWA',
        text: 'A simple budget tracking application with PWA capabilities, allowing users to track withdrawals and deposits with or without a data/internet connection and maintain an accurate balance while traveling.'
    },
    {
        id: 6,
        category: 'Front-End',
        image: noteTaker,
        link1: 'https://github.com/willdarkins/Darkins_Note-Taker_WK-11.git',
        link2: 'https://agile-springs-22845.herokuapp.com/',
        title: 'Note Taker',
        text: 'An application geared towards helping small business owners write and save digital notes. Functionality allows users to organize thoughts and keep track of daily tasks.'
    },
    {
        id: 7,
        category: 'Front-End',
        image:  passwordGenerator,
        link1: 'https://github.com/willdarkins/Pass_Generate_WK3_Darkins.git',
        link2: 'https://willdarkins.github.io/Pass_Generate_WK3_Darkins/',
        title: 'Password Generator',
        text: 'Random password generator application that produces strong quality and high security.'
    },
    // {
    //     id: 8,
    //     category: 'Front-End',
    //     image:  javascriptQuiz,
    //     link1: 'https://github.com/willdarkins/API-Code-Quiz_WK4_Darkins.git',
    //     link2: 'https://willdarkins.github.io/API-Code-Quiz_WK4_Darkins/',
    //     title: 'Javascript Quiz',
    //     text: 'A timed quiz that testing knowledge of basic vanilla JavaScript concepts, and tracks high scores .'
    // },
    // {
    //     id: 9,
    //     category: 'Front-End',
    //     image:  weatherDashboard,
    //     link1: 'https://github.com/willdarkins/Server-Side-APIs_WK6_Darkins.git',
    //     link2: 'https://willdarkins.github.io/Server-Side-APIs_WK6_Darkins/',
    //     title: 'Weather Dashboard',
    //     text: 'A weather tracking application using Accuweather API providing updated forecasts. Stores forecasts via localstorage.'
    // },
    {
        id: 10,
        category: 'Back-End',
        image:  socialAPIShell,
        link1: 'https://github.com/willdarkins/Social-Network-API-Shell.git',
        title: 'Social Network API Shell',
        text: 'A versitile social media focused API utilizing the NoSQL database MongoDB to manage large amounts of unstructured data on a daily basis.'
    },
    {
        id: 11,
        category: 'Back-End',
        image:  eCommerceORM,
        link1: 'https://github.com/willdarkins/darkins_orm-e-commerce_wk13.git',
        title: 'E-Commerce ORM',
        text: 'Complete backend logic that utilizes latest technologies to improve performance and function of e-commerce applications in an increasingly competitve digital marketplace'
    },
    {
        id: 12,
        category: 'Back-End',
        image:  employeeTracker,
        link1: 'https://github.com/willdarkins/darkins_employee-tracker_wk12.git',
        title: 'Employee Tracker CMS',
        text: 'A content managment system geared towards helping small business owners view and manage employee data counter to departments, roles, id\'s and salaries.'
    },
    {
        id: 13,
        category: 'Back-End',
        image:  teamBuilder,
        link1: 'https://github.com/willdarkins/Darkins_OOP-Challenge.git',
        title: 'Team Builder CLI',
        text: 'A command line interface focused application allows managers to display basic information about team members.'
    },
    {
        id: 14,
        category: 'Back-End',
        image:  readMeGenerator,
        link1: 'https://github.com/willdarkins/Darkins_README-Generator_WK-9.git',
        title: 'README Generator',
        text: 'A README generator that uses Javascript and node.js to quickly create a professional README for a new project.'
    },
]

export default portfolios