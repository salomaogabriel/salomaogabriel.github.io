import "../Styles/Home.css";
import Github from "../Assets/github.svg";
import GithubLight from "../Assets/githublight.svg";
import GithubDark from "../Assets/githubdark.svg";
import Plus from "../Assets/plus.svg";
import Demo from "../Assets/demo.svg";
import DemoDark from "../Assets/demodark.svg";
import Linkedin from "../Assets/linkedin.svg";
import Education from "../Assets/education.svg";
import Projects from "../Assets/projects.svg";
import AISC from "../Assets/aisc.png";
import UFBA from "../Assets/ufba.png";
import SALT from "../Assets/salt.png";
import Calendar from "../Assets/calendar.svg";
function Home() {
  return (
    <div className="home">
      <div className="introduction">
        <h1>Hi, I'm Gabriel</h1>
        <p>
          I’m a Full-Stack JavaScript Developer from Stockholm. I love creative
          problem solving, building websites and mobile applications. I am
          always looking to learn new skills and develop my abilities.
        </p>

        <img
          src={Github}
          alt="Gabriel's Picture"
          width={128}
          className="profile-pic"
        />
        <div className="contacts">
          <a href="https://github.com/salomaogabriel">
            <img src={Github} alt="Gabriel's Github" width={64} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-salomao-coelho-da-costa/">
            <img src={Linkedin} alt="Gabriel's Linkedin" width={64} />
          </a>
        </div>
      </div>
      <div className="languages-wrapper">
        <div className="languages">
          <img src={Github} alt="C#" width={64} className="language" />
          <img src={Github} alt=".NET" width={64} className="language" />
          <img src={Github} alt="SQL Server" width={64} className="language" />
          <img src={Github} alt="React" width={64} className="language" />
          <img src={Github} alt="Javascript" width={64} className="language" />
          <img src={Github} alt="PHP" width={64} className="language" />
          <img src={Github} alt="MySQL" width={64} className="language" />
          <img src={Github} alt="Python" width={64} className="language" />
        </div>
      </div>
      <div className="education-list">
        <h2 className="title">
          <img src={Education} alt="Education Icon" width={48} />
          Education
        </h2>
        <hr />
        <div className="education__card">
          <div className="education__header">
            <div className="education-img__wrapper">
              <a href="https://www.aischennai.org/">
                <img
                  src={AISC}
                  alt="AISC - American International School of Chennai"
                />
              </a>
            </div>
            <div className="education__info">
              <a href="https://www.aischennai.org/">
                <h3>AISC - American International School of Chennai</h3>
              </a>
              <div className="education__tags">
                <p className="education__tag">High School Exchange</p>
                <p className="education__tag">English</p>
                <p className="education__tag">India</p>
              </div>
            </div>
          </div>
          <h4>
            The American International School Chennai (AISC) is an international
            IB World School that offers the Advanced Placement program. During
            my time there, I improved my english and social skills. I also had
            the opportunity to take part in a Model United Nations Simulation.
          </h4>
          <div className="education__period">
            <img src={Calendar} alt="Calendar Icoon" width={20} />
            <h4>March 2017 - December 2017</h4>
          </div>
        </div>
        <div className="education__card">
          <div className="education__header">
            <div className="education-img__wrapper">
              <a href="https://www.ufba.br/">
                <img src={UFBA} alt="UFBA - Universidade Federal da Bahia" />
              </a>
            </div>
            <div className="education__info">
              <a href="https://www.ufba.br/">
                <h3>UFBA - Universidade Federal da Bahia</h3>
              </a>
              <div className="education__tags">
                <p className="education__tag">University</p>
                <p className="education__tag">Computer Engineering</p>
                <p className="education__tag">Brazil</p>
              </div>
            </div>
          </div>
          <h4>
            The Federal University of Bahia (UFBA) is a Brazilian public higher
            education institution considered the largest and most influential
            university in the state of Bahia and one of the most important in
            the country. The Computer Engineering course enables the person to
            work with the development and planning of software and hardware.
          </h4>
          <div className="education__period">
            <img src={Calendar} alt="Calendar Icon" width={20} />
            <h4> March 2021 - Current</h4>
          </div>
        </div>
        <div className="education__card">
          <div className="education__header">
            <div className="education-img__wrapper">
              <a href="https://www.salt.dev/">
                <img
                  src={SALT}
                  alt="&lt;&#x2F;salt&gt; - School of Applied Technology"
                />
              </a>
            </div>
            <div className="education__info">
              <a href="https://www.salt.dev/">
                <h3>&lt;&#x2F;salt&gt; - School of Applied Technology</h3>
              </a>
              <div className="education__tags">
                <p className="education__tag">Bootcamp</p>
                <p className="education__tag">C#</p>
                <p className="education__tag">React</p>
                <p className="education__tag">Microsoft SQL Server</p>
                <p className="education__tag">Azure</p>
                <p className="education__tag">Sweden</p>
              </div>
            </div>
          </div>
          <h4>
            From over 1500 applicants, I was one of ~30 students selected to
            partake in a high paced and very intensive Full Stack .NET Developer
            program. The training emphasises applied learning through Mob
            Programming, Agile work methods and consists of 500 coding hours
            with weekly demos and coding tests that are necessary to pass in
            order to graduate.
          </h4>
          <div className="education__period">
            <img src={Calendar} alt="Calendar Icon" width={20} />
            <h4> March 2022 - July 2022</h4>
          </div>
        </div>
        <div className="education__card">
          <div className="education__header">
            <div className="education-img__wrapper">
              <a href="https://www.salt.dev/">
                <img
                  src={SALT}
                  alt="&lt;&#x2F;salt&gt; - School of Applied Technology"
                />
              </a>
            </div>
            <div className="education__info">
              <a href="https://www.salt.dev/">
                <h3>&lt;&#x2F;salt&gt; - School of Applied Technology</h3>
              </a>
              <div className="education__tags">
                <p className="education__tag">Post Graduation Program</p>
                <p className="education__tag">SignalR</p>
                <p className="education__tag">Typescript</p>
                <p className="education__tag">Sweden</p>
              </div>
            </div>
          </div>
          <h4>
            After finishing the course, I joined &lt;&#x2F;salt&gt;'s post
            graduation program (PGP) where I had the opportunity to improve my
            knowledge even more while waiting for an assignment.
          </h4>
          <div className="education__period">
            <img src={Calendar} alt="Calendar Icon" width={20} />
            <h4> September 2022 - Current</h4>
          </div>
        </div>
      </div>
      <div className="projects-list-wrapper">
        <div className="projects-list">
          <h2 className="title projects-title">
            <img src={Projects} alt="Projects Icon" width={48} />
            Projects - Timeline
          </h2>
          <hr />

          <div className="project__card">
            <div className="project__info">
              <h3>Featfy</h3>
              <h4>
                A social media where music creators could meet up to create
                songs and partnerships. I saw that singers and producers were
                having a hard time finding a platform where they could talk
                between themselves and decided to fix that problem.
              </h4>
              <div className="project__tags">
                <div className="project__tag">PHP</div>
                <div className="project__tag">MariaDB</div>
                <div className="project__tag">React</div>
                <div className="project__tag">Digital Ocean</div>
              </div>
              <div className="project__links">
                <button className="project__button project__button--deactivated">
                  <img
                    src={GithubDark}
                    alt="Github Icon deactivated"
                    width={24}
                  />
                  Github Code
                </button>
                <button className="project__button project__button--deactivated">
                  <img
                    src={DemoDark}
                    alt="Live Demo Icon deactivated"
                    width={24}
                  />
                  Live demo
                </button>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img
              src={Github}
              alt="Project Picture"
              className="project_picture"
            />
          </div>
          <div className="divider">
            <span></span>
            <p>Joined UFBA</p>
            <span></span>
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Cryptocurrency Creator</h3>
              <h4>
                This website lets you create your own cryptocurrency in
                Javascript. It also looks pretty cool. After hearing a lot about
                blockchain and not having any idea about how it works. I decided
                to create a project to understand it better.
              </h4>
              <div className="project__tags">
                <div className="project__tag">Javascript</div>
                <div className="project__tag">CSS</div>
                <div className="project__tag">Github Pages</div>
              </div>
              <div className="project__links">
                <a
                  href="https://github.com/salomaogabriel/cryptocurrency-creator"
                  className="project__button"
                >
                  <img src={GithubLight} alt="Gabriel" width={24} />
                  Github Code
                </a>
                <a
                  className="project__button"
                  href="https://salomaogabriel.github.io/cryptocurrency-creator/"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Martian Summer League</h3>
              <h4>
                Martian Summer League is a football(Soccer) simulation where you
                play as a manager of a Martian team. This game was built in 2
                weeks for the Gamedev.js Game Jam 2022 and it was one of the
                winners. (MPL Challenge)
              </h4>
              <div className="project__tags">
                <div className="project__tag">C#</div>
                <div className="project__tag">Unity</div>
                <div className="project__tag">WebGL</div>
                <div className="project__tag">Game Dev</div>
              </div>
              <div className="project__links">
                <button className="project__button  project__button--deactivated">
                  <img src={GithubDark} alt="Github Code" width={24} />
                  Github Code
                </button>
                <a
                  className="project__button"
                  href="https://gabrielsalomao.itch.io/martian-summer-league"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="divider">
            <span></span>
            <p>Joined &lt;&#x2F;salt&gt; </p>
            <span></span>
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Water Consumed Logged</h3>
              <h4>
                This project was built during &lt;&#x2F;salt&gt;'s pre-course, I
                wanted to build this to see if I was improving and to track how
                much water I was drinking every day (Some days, 5 liters, some
                days less than 1).
              </h4>
              <div className="project__tags">
                <div className="project__tag">C#</div>
                <div className="project__tag">CLI</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/WaterConsumedLogger"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <button className="project__button  project__button--deactivated">
                  <img src={DemoDark} alt="Live Demo" width={24} />
                  Live demo
                </button>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Make SLN</h3>
              <h4>
                During our first weeks at &lt;&#x2F;salt&gt;, we had to
                constantly use the same commands over and over. Remembering
                those commands was difficult, so I decided to automate the
                process and make everyone's life easier. I had to learn bash. It
                was worthy.
              </h4>
              <div className="project__tags">
                <div className="project__tag">Bash</div>
                <div className="project__tag">Makefile</div>
                <div className="project__tag">Automation</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/makesln"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <button className="project__button  project__button--deactivated">
                  <img src={DemoDark} alt="Live Demo" width={24} />
                  Live demo
                </button>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Idea Ranking</h3>
              <h4>
                Idea Ranking is a website where you're prompted with two ideas,
                and you can vote on the best. You can also submit new ideas.
                This website was built in one day during my Personal hackday at
                &lt;&#x2F;salt&gt;
              </h4>
              <div className="project__tags">
                <div className="project__tag">C#</div>
                <div className="project__tag">React</div>
                <div className="project__tag">Entity Framework</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/idea-ranking"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <a
                  className="project__button "
                  href="https://salomaogabriel.github.io/idea-ranking/"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Page Rank Interactive</h3>
              <h4>
                An interactive website where you can learn how Google Search
                rank web pages (Or at least how they used to do it). This was
                created to a College Assignment. We had to create a video but I
                decided to take an extra step and create a place where anyone
                can see how it works. It was rewarded with an extra point.
              </h4>
              <div className="project__tags">
                <div className="project__tag">Javascript</div>
                <div className="project__tag">Algorithm</div>
                <div className="project__tag">College</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/page-rank-interactive"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <a
                  className="project__button "
                  href="https://salomaogabriel.github.io/page-rank-interactive/"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Salt Venture</h3>
              <h4>
                Salt Venture is a free gaming/gambling website where there is no
                real money involved, instead, you compete with your friends to
                see who can accumulate the most points.This is also great for
                gambling companies to try out their games. Where they can track
                earnings, popularity, betting amounts, players' ratings, and
                overall feedback. This was built as our final project at
                &lt;&#x2F;salt&gt;.
              </h4>
              <div className="project__tags">
                <div className="project__tag">React</div>
                <div className="project__tag">C#</div>
                <div className="project__tag">Microsoft SQL Server</div>
                <div className="project__tag">Azure</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/page-rank-interactive"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <a
                  className="project__button "
                  href="https://salomaogabriel.github.io/page-rank-interactive/"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
          <div className="project__card">
            <div className="project__info">
              <h3>Portfolio </h3>
              <h4>
                Also known as the website you're seeing right now, My portfolio
                was built to show projects that I've built
              </h4>
              <div className="project__tags">
                <div className="project__tag">React</div>
                <div className="project__tag">Typescript</div>
              </div>
              <div className="project__links">
                <a
                  className="project__button"
                  href="https://github.com/salomaogabriel/"
                >
                  <img src={GithubLight} alt="Github Code" width={24} />
                  Github Code
                </a>
                <a
                  className="project__button "
                  href="https://salomaogabriel.github.io/"
                >
                  <img src={Demo} alt="Live Demo" width={24} />
                  Live demo
                </a>
              </div>
              <button className="project__button project__button--main">
                <img src={Plus} alt="More Icon" width={24} />
                More...
              </button>
            </div>
            <img src={Github} alt="Gabriel" className="project_picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
