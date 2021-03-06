export const projects = [
  {
    title: "AS Find Your Fit",
    textColor: "#7AAFDB",
    backgroundColor: "#101F3E",
    base: "/images/as/",
    images: ["as.webp", "as-quiz.webp", "as-results.webp", "as-mobile.webp"],
    descriptions: [
      "AS Find Your Fit is a Buzzfeed-style sorting quiz aimed to fit students into one of UCSD's student government offices & services where they can learn more about applying for a position.", 
      
      "My role in this project was developing the logic behind sorting users into various offices and realizing that vision into a successful algorithm while translating Figma mockups into the frontend.", 
      
      "I had free reign of this website so I wanted to experiment with fluid transitions between pages. For this, I opted for gsap/barba.js for its intuitive syntax and digestable documentation. I also dynamically positioned stickers as background images that would not interfere with the visibility of the website content.",
    ],
    tools: "HTML, CSS, JavaScript, Figma",
    date: "September 2020",
    url: "https://as.ucsd.edu/findyourfit/",
    code: "https://github.com/andrewzhen/AS-Find-Your-Fit"
  },
  {
    title: "Tritonfest – Fall 2020",
    textColor: "#E2829E",
    backgroundColor: "#6A378D",
    base: "/images/tf-fall2020/",
    images: ["tf-fall2020.webp", "tf-fall2020-event.webp", "tf-fall2020-mobile.webp"],
    descriptions: [
      "Triton Fest is UC San Diego’s late night, weekend event series held at the beginning of the fall & winter quarters.",

      "My role was developing the frontend of this website by referencing Figma mockups and contributing to pivotal design choices such as the specifics of the grid-layout and the quarterly-brand colors.",

      "A challenge I faced was dealing with the color accuracy of the images and videos that played on-hover. Ultimately, it was a matter of filesize so I had to compromise one for the other to some extent.",

      "This website updates on a quarterly-bases so the web design may have changed by the time you visit it. However, I was responsible for implementing a flexibile grid-system that allows for easy manipulation for future iterations."
    ],
    tools: "HTML, CSS, JavaScript, Figma",
    date: "August 2020",
    url: "https://tritonfest.ucsd.edu/",
    code: "https://github.com/andrewzhen/Tritonfest-Fall-2020"
  },
  {
    title: "AS Concerts & Events",
    textColor: "#D6C6F6",
    backgroundColor: "#5980B6",
    base: "/images/asce/",
    images: ["asce.webp", "asce-about.webp", "asce-archive.webp", "asce-mobile.webp"],
    descriptions: [
      "ASCE, Associated Students office of Concerts & Events, is UC San Diego's student programming board responsible for some of the longest standing campus traditions. My teammate, Leo Cooperband, and I were tasked with revamping ASCE's website for a more event-driven experience by giving them a new visual identity.",

      "This website reflects the complete overhaul of the Wordpress-based website and my role was to translate Figma mockups into a Wordpress theme written in PHP. I had no prior experience with either Wordpress or PHP and was the sole developer for this project.",

      "As a concert and events page, the ASCE website needed to be updated regularly with new events. As a solution, I created an array of JSON objects that contained event information such as title, date, location, and image, which I used to dynamically populate the DOM with elements."
    ],
    tools: "PHP, HTML, CSS, JavaScript, Figma",
    date: "September 2020",
    url: "https://asce.ucsd.edu/",
    code: "https://github.com/andrewzhen/AS-Concerts-Events"
  },
  {
    title: "Sungod Festival 2020",
    textColor: "#E1CB0E",
    backgroundColor: "#4E9BC9",
    base: "/images/sgf/",
    images: ["sgf.webp", "sgf-safety.webp", "sgf-mobile.webp"],
    descriptions: [
      "The Sun God Festival is an annual music and arts festival presented by UCSD Associated Students Concerts & Events (ASCE). Of humble origins, the festival began in 1983 as a small, student-organized event that aimed to provide UCSD with a spring festival. Over the past 30 years, the festival has added student booths, vendor booths, three stages, art installations, and a campus-halting student atmosphere that is the envy of every college festival this side of the Rockies.",

      "My role was developing the frontend of the website by referencing Figma mockups and regularly consulting with the lead designer on branding and visual design. We also worked to deliver the website with tranditionally less time than previous years.",

      "The theme for this year was 'Sunflowers and Bubbles' so the original plan for creative interactions featured bubbles that could be manipulated by users."
    ],
    tools: "HTML, SASS, JavaScript, Figma",
    date: "February 2020",
    url: "http://sgf.ucsd.edu/",
    code: "https://github.com/andrewzhen/Sungod-Festival-2020"
  },
  {
    title: "Design Co – Level Up",
    textColor: "#BEDDAA",
    backgroundColor: "#000000",
    base: "/images/dco-levelup/",
    images: ["dco-levelup.webp", "dco-levelup-mobile.webp"],
    descriptions: [
      "Level Up is a 10-week design program by Design Co that provides students with the opportunity to tackle a real-world challenge and network with experienced industry professionals. Participants will work in teams of four to produce a website showcase of project deliverables with the guidance of industry mentors.",

      "My role was developing the frontend of the website by referencing Figma mockups and delivering the finished site within a week.",

      "The difficulty of implementation for this website was surrounding certain creative hover states, cursor interactions, and the floating navigation menu."
    ],
    tools: "React, SASS, Git, Figma",
    date: "May 2020",
    url: "https://levelup.ucsddesign.co/",
    code: "https://github.com/ucsddesignco/levelup"
  },
  {
    title: "Design Co – Join Our Team",
    textColor: "#FFCDD2",
    backgroundColor: "#006064",
    base: "/images/dco-joinourteam/",
    images: ["dco-joinourteam.webp", "dco-joinourteam-role.webp", "dco-joinourteam-mobile.webp"],
    descriptions: [
      "Design Co is a student-run, pre-professional design organization at UC San Diego. Our goal is to help our community prepare for an industry setting by supplementing their learning with weekly events that include industry speakers, information sessions, and workshops. Each week, we consistently see a turnout of between 50 and 100 people.",

      "My role was developing the frontend of the website by referencing Figma mockups and delivering the finished site over the span of a weekend.",

      "Time constraint was the main challenge for implementing this website. I was also fortunate enough that some of the related React components were already in production so I simply had to integrate them. However, the slide-out job description component was one that I had to create."
    ],
    tools: "React, SASS, Git, Figma",
    date: "February 2020",
    url: "http://www.ucsddesign.co/join-our-team",
    code: "https://github.com/ucsddesignco/designco/blob/master/src/pages/JoinOurTeam.js"
  },
  {
    title: "Tritonfest – Good Clean Fun",
    textColor: "#EFA6C9",
    backgroundColor: "#317BB7",
    base: "/images/tf-goodcleanfun/",
    images: ["tf-goodcleanfun.webp", "tf-goodcleanfun-archive.webp"],
    descriptions: [
      "Triton Fest is UC San Diego’s late night, weekend event series held at the beginning of the fall & winter quarters. However, given the ongoing COVID-19 pandemic, Triton Fest has instead focused on delivering remote resources through a link-tree-style website aptly named Good Clean Fun.",

      "My role was developing the frontend of the website by referencing Figma mockups and collaborating with the lead designer on this new initiative.",

      "An interesting design-scalability problem we had was how to deal with all the links that were accumulating week after week. Ultimately, we decided to store them in a folder labeled 'Archive' disguised as a typical link."
    ],
    tools: "HTML, CSS, JavaScript, Figma",
    date: "April 2020",
    url: "https://tritonfest.ucsd.edu/goodcleanfun/",
    code: "https://github.com/andrewzhen/Tritonfest-Goodcleanfun"
  }
]