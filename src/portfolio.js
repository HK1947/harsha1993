/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsha Kumar K S",
  title: "Hi all, I'm Harsha",
  subTitle: emoji(
    "💻 Software Engineer in Test (SDET) | 9+ Years Experience | Test Automation | Java, Selenium, API & Performance Testing| CI/CD | Docker | AWS | Building Scalable Test Frameworks"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/harsha-gowda-9036402468/",
  gmail: "ksharshakumaranekal@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE AUTOMATION TESTER WHO ENSURES HIGH-QUALITY SOFTWARE",
  skills: [
    emoji(
      "⚡ Writing robust automation test scripts using Selenium with java"
    ),
    emoji(
      "⚡ Implementing API testing with Postman, RestAssured, and automated test frameworks"
    ),
    emoji(
      "⚡ Creating CI/CD pipelines for test automation using Jenkins & GitHub Actions"
    ),
    emoji("⚡ Performance & Load testing using JMeter and k6"),
    emoji(
      "⚡ Ensuring cross-browser compatibility and mobile automation using Appium"
    ),
    emoji(
      "⚡ Developing test strategies and frameworks for scalable automation solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-firefox"
    },

    {
      skillName: "Appium",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "RestAssured",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "JMeter",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "TestNG",
      fontAwesomeClassname: "fas fa-check-circle"
    },
    {
      skillName: "Cucumber",
      fontAwesomeClassname: "fas fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shirdi Sai Engineering College",
      logo: require("./assets/images/ssec.png"), // Add your college logo here
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      desc: "Focused on core electronics and communication engineering subjects along with software Testing.",
      descBullets: [
        "Studied Digital Electronics, Embedded Systems, and Communication Networks",
        "Worked on mini and major projects related to automation and signal processing",
        "Developed an interest in software testing and automation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer in Test 2 ",
      company: "Dutchview",
      companylogo: require("./assets/images/dutchview.png"),
      date: "Aug 2019 – Present",
      desc: "Led and executed manual and automation testing strategies, designed and maintained test plans and scripts, collaborated with developers and product managers to ensure test coverage, conducted functional, regression, and performance testing, automated tests using Selenium and Java, managed defects with JIRA/TestRail, and mentored junior testers to enhance testing processes.",
      descBullets: [
        "Led manual and automation testing using Selenium and Java for quality releases.",
        " Optimized defect tracking and mentored junior testers."
      ]
    },

    {
      role: "Senior Test Engineer",
      company: "Mobinius",
      companylogo: require("./assets/images/mobinius.png"),
      date: "Jul 2017 – Jul 2019",
       desc: "Managed end-to-end testing efforts, including manual and automation testing, to ensure high-quality software releases. Collaborated with developers and product teams to enhance test coverage and streamline defect management.",
                descBullets: [
                  "Test Automation & Quality Assurance – Designed and executed automated test scripts, improving testing efficiency.",
                  "Process Optimization & Mentorship – Enhanced defect tracking workflows and guided junior testers."
                ]
    },
     {
          role: "Programming Analyst",
          company: "Cognizant",
          companylogo: require("./assets/images/cognizant.png"),
          date: "Jul 2015 – Jun 2017",
          desc: "Assisted in manual and automation testing processes to ensure software quality. Worked with senior testers and developers to identify bugs, execute test cases, and improve testing coverage.",
          descBullets: [
            "Test Execution & Defect Reporting – Conducted functional and regression testing, documenting defects for resolution.",
            "Learning & Collaboration – Gained hands-on experience with testing tools and collaborated with teams to improve test processes."
          ]

          }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/flexwhere.png"),
      projectName: "Flexwhere",
      projectDesc: "We empower businesses and their people to connect and collaborate in the workplace through our easy to use hot desk booking software. Your team decides when and where they want to be in office and can reserve a desk, parking spot or company car in just 2 clicks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://flexwhere.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/edcontrols.png"),
      projectName: "Ed controls",
      projectDesc: "Leading construction companies use Ed Controls to make their work easier, faster, and better. All within one software.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://edcontrols.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/Travelers.png"),
      projectName: "The Travelers",
      projectDesc: "The Travelers Companies, Inc., commonly known as Travelers, is an American insurance company. It is the second-largest writer of U.S. commercial property casualty insurance, and the sixth-largest writer of U.S. personal insurance through independent agents.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.travelers.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "ksharshakumaranekal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
