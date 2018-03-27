import { html, render } from 'lit-html';
import AOS from 'aos';
import Parallax from 'parallax-js';
import 'bootstrap/dist/js/bootstrap.js';
import '../scripts/text-scramble';

import aboutMeHTML from '../components/about-me.html';
import navbarHTML from '../components/navbar.html';
import skillsHTML from '../components/skills.html';
import experienceHTML from '../components/experience.html';
import projectsHTML from '../components/projects.html';
import contactHTML from '../components/contact.html';
import footerHTML from '../components/footer.html';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../../node_modules/aos/dist/aos.css';
import '../styles/layout.css';
import '../styles/about-me.css';
import '../styles/scroll-down-button.css';
import '../styles/navbar.css';
import '../styles/skills.css';
import '../styles/footer.css';

const AboutMe = html([aboutMeHTML]);
const Navbar = html([navbarHTML]);
const Skills = html([skillsHTML]);
const Experience = html([experienceHTML]);
const Projects = html([projectsHTML]);
const Contact = html([contactHTML]);
const Footer = html([footerHTML]);

export default class App {
  constructor() {
    AOS.init();
    this.smoothScrolling();

    const el = document.querySelector('#app');
    render(this.Layout(), el);

    var scene = document.getElementById('scene');
    new Parallax(scene);
  }

  smoothScrolling() {
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  Layout = () => {
    return html`
    <div>
      <div id="about-me" class="section-padding-top full-height aos-scrollbar-fix">
        ${AboutMe}
      </div>
      ${Navbar}
      <div id="skills" class="section-padding-top aos-scrollbar-fix">
        ${Skills}
      </div>
      <div id="experience" class="section-padding-top aos-scrollbar-fix">
        ${Experience}
      </div>
      <div id="projects" class="section-padding-top aos-scrollbar-fix">
        ${Projects}
      </div>
      <div id="contact" class="section-padding-top aos-scrollbar-fix pb-5">
        ${Contact}
      </div>
      <div id="footer">
        ${Footer}
      </div>
    </div>
  `;
  };
}
