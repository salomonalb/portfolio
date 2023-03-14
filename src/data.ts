import profilePicture from "./assets/profile-picture.png";
import htmlIcon from "./assets/html-icon.png"
import cssIcon from "./assets/css-icon.png"
import javascriptIcon from "./assets/javascript-icon.png"
import typescriptIcon from "./assets/typescript-icon.png"
import scssIcon from "./assets/sass-icon.png"
import reactIcon from "./assets/react-icon.svg.png"
import gitIcon from "./assets/git-icon.png"
import npmIcon from "./assets/npm-icon.png"
import linkedinIcon from "./assets/linkedin-icon.png"
import twitterIcon from "./assets/twitter-icon.svg.png"
import githubIcon from "./assets/github-icon.png"
import emailIcon from "./assets/email-icon.png"

export type skill = {
  name: string;
  icon: string;
};

export type project = {
  name: string;
  description: string;
  websiteLink: string;
  githubLink: string;
};

export type contact = {
  name: string;
  link: string;
  icon: string;
};

export type user = {
  name: string;
  lastName: string;
  description: string;
  profilePicture: string;
  skills: skill[];
  projects: project[];
  contactMethods: contact[];
};

export const userData: user = {
  name: "Salomón",
  lastName: "León",
  description:
    "I'm a Front End Web Developer from Venezuela, currently living in Santiago, Chile. My preferred tech stack includes React, TypeScript and SCSS but I'm always open to expand my skillset to meet the demands of any project. I'm fluent in English and a native Spanish speaker. I'm looking for a Developer position. I have a diverse portfolio with many practice projects to showcase my coding abilities and style to potential employers. Feel free to contact me for any question you may have.",
  profilePicture: profilePicture,
  skills: [
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
    },
    {
      name: "SCSS",
      icon: scssIcon,
    },
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "GIT",
      icon: gitIcon,
    },
    {
      name: "NPM",
      icon: npmIcon,
    },
  ],
  projects: [
    {
      name: "Interactive Comment Section",
      description:
        "Interactive Comment Section is a project built on the CRUD pattern, allowing users to perform standard operations such as creating new comments, replying to existing ones, and editing their own comments. In addition, users can upvote and downvote comments made by other users, and a sorting algorithm ensures that the most popular comments appear at the top of the main thread",
      websiteLink: "https://interactive-comment-section-react-sl.netlify.app",
      githubLink: "https://github.com/salomonalb/interactive-comment-section",
    },
    {
      name: "Crowdfunding Product Page",
      description:
        "This project allows you to select a reward for supporting a project, make pledges and input the amount to be billed. As you make pledges, the page keeps track of the changes of the total amount backed, the number of backers, the bookmarked state, and the quantity of rewards left.",
      websiteLink: "https://crowndfunding-productpage.netlify.app",
      githubLink:
        "https://github.com/salomonalb/crowdfunding-product-page-main",
    },
    {
      name: "Advice Generator App",
      description:
        "app that fetches a random advice from Advice Slip JSON API and updates the DOM with it whenever the button is clicked.",
      websiteLink: "https://advice-generator-app-project.netlify.app",
      githubLink: "https://github.com/salomonalb/advice-generator-app",
    },
    {
      name: "Tip Calculator App",
      description:
        "This calculator allows you to input the amount to be billed, the percentage to tip and the number of people to split the bill with. It outputs the tip amount for each person and the total amount for each person. Finally, it has a button that allows you to reset the app.",
      websiteLink: "https://tip-calculator-app-blas.netlify.app",
      githubLink: "https://github.com/salomonalb/tip-calculator-app",
    },
    {
      name: "Sunnyside Agency Landing Page",
      description:
        "This Project is a responsive landing page based on the design given by frontend mentor.It's made with HTML, SCSS and TypeScript. To make the page responsive I used CSS Grid, Flexbox and media Queries. To make the sizes more fluid I used the CSS min() function along with vw (viewport width) units. I also took advantage of SCSS specific features like Variables, Nested Selectors, Nested Media Queries and the Parent Selector '&'.This allowed me to Organize my styles with the BEM methodology.",
      websiteLink: "https://sunny-side-agency-project.netlify.app",
      githubLink:
        "https://github.com/salomonalb/sunnyside-agency-landing-page-main",
    },
    {
      name: "Notifications page",
      description:
        "Users are able to toggle notifications from unread to read and a counter shows the number of unread notifications",
      websiteLink: "https://notifications-page-project.netlify.app",
      githubLink: "https://github.com/salomonalb/notifications-page",
    },
    {
      name: "Social Media Dashboard With Theme Switcher",
      description:
        "A social media stats dashboard where users can toggle the theme from dark to light and viceversa",
      websiteLink: "https://dashboard-with-theme-switcher-b.netlify.app",
      githubLink:
        "https://github.com/salomonalb/social-media-dashboard-with-theme-switcher",
    },
    {
      name: "Coding Bootcamp Testimonial Slider",
      description: "Users can switch the slides by pressing the buttons",
      websiteLink: "https://coding-bootcamp-testimonials-slider-b.netlify.app",
      githubLink:
        "https://github.com/salomonalb/coding-bootcamp-testimonial-slider",
    },
    {
      name: "Interactive pricing component",
      description:
        "Users can use the slider and toggle to see different prices according to their needs",
      websiteLink:
        "https://salomonleon.online/interactive-pricing-component-main/index.html",
      githubLink:
        "https://github.com/salomonalb/online-page/tree/main/interactive-pricing-component-main",
    },
    {
      name: "Time Tracking Dashboard",
      description:
        "Users can switch between viewing Daily, Weekly, and Monthly stats",
      websiteLink:
        "https://salomonleon.online/time-tracking-dashboard-main/index.html",
      githubLink:
        "https://github.com/salomonalb/online-page/tree/main/time-tracking-dashboard-main",
    },
  ],
  contactMethods: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/salomon-leon-58765a23a/",
      icon: linkedinIcon,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/blasdev",
      icon: twitterIcon,
    },
    {
      name: "Github",
      link: "https://github.com/salomonalb",
      icon: githubIcon,
    },
    {
      name: "Email",
      link: "mailto:salomonleon197@gmail.com",
      icon: emailIcon,
    }
  ],
};
