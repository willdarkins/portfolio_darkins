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

const portfolios = [
    {
        id: 1,
        category: 'Front-End',
        image: techBlog,
        link1: 'https://github.com/willdarkins/darkins_tech-blog_wk14.git',
        link2: 'https://darkins-tech-blog-wk14.herokuapp.com/',
        title: 'Tech-Blog',
        text: 'A full stack CMS style blog site that allows developers to publish articles, write blog posts and express general thoughts on the computer science industry, while using a simple and attractive UI.'
    },
    {
        id: 2,
        category: 'Front-End',
        image: budgetTracker,
        link1: 'https://github.com/willdarkins/budget-tracker-PWA.git',
        link2: 'https://budget-tracker-darkins-v2.herokuapp.com/',
        title: 'Budget Tracker PWA',
        text: 'A simple budget tracking application with PWA capabilities, allowing users to track withdrawals and deposits with or without a data/internet connection and maintain an accurate balance while traveling.'
    },
    {
        id: 3,
        category: 'Front-End',
        image: noteTaker,
        link1: 'https://github.com/willdarkins/Darkins_Note-Taker_WK-11.git',
        link2: 'https://agile-springs-22845.herokuapp.com/',
        title: 'Note Taker',
        text: 'An application geared towards helping small business owners write and save digital notes. The functionality allows users to better organize thoughts and keep track of daily tasks in a simple, easy to navigate UI.'
    },
    {
        id: 4,
        category: 'Front-End',
        image:  passwordGenerator,
        link1: 'https://github.com/willdarkins/Pass_Generate_WK3_Darkins.git',
        link2: 'https://willdarkins.github.io/Pass_Generate_WK3_Darkins/',
        title: 'Password Generator',
        text: 'Random password generator application that produces strong quality and high security.'
    },
    {
        id: 5,
        category: 'Front-End',
        image:  javascriptQuiz,
        link1: 'https://github.com/willdarkins/API-Code-Quiz_WK4_Darkins.git',
        link2: 'https://willdarkins.github.io/API-Code-Quiz_WK4_Darkins/',
        title: 'Javascript Quiz',
        text: 'A timed quiz that will test knowledge of basic vanilla JavaScript concepts, and track high scores to measure improvement against peers.'
    },
    {
        id: 6,
        category: 'Front-End',
        image:  weatherDashboard,
        link1: 'https://github.com/willdarkins/Server-Side-APIs_WK6_Darkins.git',
        link2: 'https://willdarkins.github.io/Server-Side-APIs_WK6_Darkins/',
        title: 'Weather Dashboard',
        text: 'A weather tracking application using Accuweather API to provide most updated forecasts to users. Also stores forecasts for various citites via localstorage.'
    },
    {
        id: 7,
        category: 'Back-End',
        image:  socialAPIShell,
        link1: 'https://github.com/willdarkins/Social-Network-API-Shell.git',
        title: 'Social Network API Shell',
        text: 'A versitile social media focused API utilizing the NoSQL database MongoDB to manage large amounts of unstructured data on a daily basis.'
    },
    {
        id: 8,
        category: 'Back-End',
        image:  eCommerceORM,
        link1: 'https://github.com/willdarkins/darkins_orm-e-commerce_wk13.git',
        title: 'E-Commerce ORM',
        text: 'Complete backend logic that utilizes latest technologies to improve performance and function of e-commerce applications in an increasingly competitve digital marketplace'
    },
    {
        id: 9,
        category: 'Back-End',
        image:  employeeTracker,
        link1: 'https://github.com/willdarkins/darkins_employee-tracker_wk12.git',
        title: 'Employee Tracker CMS',
        text: 'A content managment system geared towards helping small business owners view and manage employee data counter to departments, roles, id\'s and salaries.'
    },
    {
        id: 10,
        category: 'Back-End',
        image:  teamBuilder,
        link1: 'https://github.com/willdarkins/Darkins_OOP-Challenge.git',
        title: 'Team Builder CLI',
        text: 'A command line interface focused application that allows managers to easily display basic information about team members, including email and Github repositories, for quick reference on the job.'
    },
    {
        id: 11,
        category: 'Back-End',
        image:  readMeGenerator,
        link1: 'https://github.com/willdarkins/Darkins_README-Generator_WK-9.git',
        title: 'README Generator',
        text: 'A README generator that uses Javascript and node.js to quickly create a professional README for a new project.'
    },
]

export default portfolios