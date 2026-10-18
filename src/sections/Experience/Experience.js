import './Experience.css';

const companies = [
  {
    name: 'TeamWeb/Tour Amigo',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'May 2025 - Present',
        summary: 'Reporting to the Head of Engineering, I am responsible for large developments and complex refactors.  As a senior engineer, I mentor junior engineers and provide technical guidance to the team.',
        responsibilities: [
          'Large development and complex refactors, including architecture and product decisions.',
          'Mentoring junior engineers and providing technical guidance to the team.',
          'On call support for production issues, including triaging and resolving incidents.',
        ],
      },
      {
        title: 'Mid-level Software Engineer',
        dates: 'February 2024 - May 2025',
        summary: 'Reporting to engineering leads, I was responsible for large developments and complex refactors, with input into architecture and product decisions.  I worked across multiple projects, and gained experience in mentoring junior engineers and providing technical guidance to the team.',
        responsibilities: [
        ],
      },
            {
        title: 'Junior Software Engineer',
        dates: 'September 2022 - February 2024',
        summary: 'I was hired by TeamWeb to build a support management platform from the ground up, and to work on other projects as needed.  I gained experience in full-stack development, including front-end and back-end development, database design and management, and cloud deployment.',
        responsibilities: [
        ],
      },
    ],
  },
  {
    name: 'MS All Trades',
    roles: [
      {
        title: 'IoT and Embedded Systems Developer',
        dates: 'November 2018 - May 2022',
        summary: 'Designing and building IoT solutions for ventilation control and monitoring, including embedded systems, electrical engineering and cloud integration.  I was solely responsible for the design, manufacture, rollout and maintenance of the whole project, including embedded systems, electrical engineering and cloud integration.  I gained experience in IoT solution design and implementation, cloud integration and data management, embedded systems development, electrical engineering and PCB design, and hardware design.',
        responsibilities: [
            'IoT Solution Design and Implementation',
            'Cloud Integration and Data Management',
            'Embedded Systems Development',
            'Electrical engineering and PCB design',
            'Hardware Design',
        ],
      },
      {
        title: 'Web Developer and Network Assistant',
        dates: 'February 2017 - November 2018',
        summary: 'Building and maintaining websites for clients and within the company, as well as assisting with network administration and troubleshooting.  I developed and maintained informational and E-commerce websites, for clients and within the company.  I gained experience in web development, network administration, and client communication.',
        responsibilities: [
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="Experience-Section">
      <header className="Experience-Header">
        <h2>Experience</h2>
      </header>
      <div className="Experience-List">
        {companies.map((company) => (
          <article className="Experience-CompanyGroup" key={company.name}>
            <header className="Experience-CompanyHeading">
              <h3>{company.name}</h3>
            </header>
            <div className="Experience-Roles">
              {company.roles.map((role) => (
                <article className="Experience-Role" key={`${role.title}-${role.dates}`}>
                  <div className="Experience-RoleHeading">
                    <h4>{role.title}</h4>
                    <p className="Experience-Dates">{role.dates}</p>
                  </div>
                  <p className="Experience-Summary">{role.summary}</p>
                  <ul className="Experience-Responsibilities">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;