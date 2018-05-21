import React from 'react'
import Link from 'gatsby-link'
import { Container, Title, Card, Icon, CardHeader, CardContent, CardHeaderIcon } from 'bloomer'

const cvPath = require('../assets/cv.pdf');

export default class CV extends React.Component {
  render() {
    return (
      <Container id="cv">
        <Card>
          <CardHeader>
            <CardHeaderIcon href={cvPath}>
              <Icon className="fa fa-save" />
              Download a copy
            </CardHeaderIcon>
          </CardHeader>
          <CardContent>
            <main>
              <header>
                <h1>Ashley <span style={{ color: '#C00000' }}>Sykes</span></h1>
                <span className="label">Senior Software Engineer</span>
                <p id="contact"> <span className="email"><a href="mailto:ashleysykes01@gmail.com">ashleysykes01@gmail.com</a></span>
                  <span className="phone">07975 732 684</span> <span className="website"><a href="https://sykomaniac.github.io"><a href="https://sykomaniac.github.io">https://sykomaniac.github.io</a></a></span>
                </p>
              </header>
              <section id="summary">
                <center><strong>&quot;</strong>A proud dad, passionate Software Engineer, Android
                    enthusiast and football fanatic.<strong>&quot;</strong>
                </center>
              </section>
              <hr />
              <section id="skills">
                <header>
                  <Icon className='fa fa-lg fa-code' />
                  <h2>skills</h2>
                </header>
                <table>
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Keywords</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "25%" }}>Programming Languages</td>
                      <td className="keywords">C# Python Java Node.js</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>JavaScript Frameworks</td>
                      <td className="keywords">Vue.js Angular AngularJS React Backbone.js Knockout.js Ember.js</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>Web Technologies</td>
                      <td className="keywords">HTML 5 CSS Sass LESS Stylus</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>Database</td>
                      <td className="keywords">RRDBMS (MSSQL, MaraiaDB, SQLite etc) MongoDB Apache Cassandra</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>CI tools</td>
                      <td className="keywords">GitLab Jenkins Team City Docker Kubernetes Nexus Vagrant</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>SDLC</td>
                      <td className="keywords">SCRUM Lean Prince 2 XP</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <hr />
              <section id="employment">
                <header>
                  <Icon className='fa fa-lg fa-building' />
                  <h2>employment</h2>
                </header>
                <div>
                  <h3><em>Senior Software Engineer</em>,
                  <a href="http://www.edgetic.com/" target="_blank">Edgetic Ltd</a>, Leeds, UK
                  </h3>
                  <span className="tenure">2018-01 — Present</span>
                  <p>
                    <p><strong>Senior software engineer</strong> at a start-up organisation that
                            is building AI based data centre scheduling.</p>
                  </p>
                  <ul>
                    <li>Designed and built an interactive graph based dashboard leveraging Vue.js
                            and Chart.js.</li>
                    <li>Built tooling (developed in Python) to be utilised in Data Science experiments.</li>
                    <li>Built several micro-services joined via and API gateway using Nancy and
                            .NET core</li>
                    <li>Started to learn about machine learning and the tools and techniques involved
                            in the development process of an ML algorithm.</li>
                  </ul>
                </div>
                <div>
                  <h3><em>Software Development Manager/Senior Software Engineer</em>,
                  <a href="https://www.asda.com/">Asda Stores Limited</a>, Leeds, UK
                  </h3>
                  <span className="tenure">2016-06 — 2017-12</span>
                  <p>
                    <p><strong>Software Development Lead</strong> for any potential Asda software
                            development project.</p>
                  </p>
                  <ul>
                    <li>Promoted due to performance of the Mobility development team. Similar
                            responsibilities to previous role but included a wider remit of projects.</li>
                    <li>Senior developer for several Asda applications. The most high profile
                        being the rebuilding of Asda&#39;s Scan&amp;GO customer registration portal
                            which was developed using C# .NET MVC and JavaScript.</li>
                    <li>Lead developer on building the replacement George Paxar application which
                            used Angular and node NodeJS services to talk to a MongoDB back-end.</li>
                    <li>Engagement with Wal-Mart US to ensure Asda adheres to defined standards
                            and is utilising the latest development tooling/practices.</li>
                  </ul>
                </div>
                <div>
                  <h3><em>Mobility Software Development Manager/Senior Software Engineer</em>,
                  <a href="https://www.asda.com/">Asda Stores Limited</a>, Leeds, UK
                  </h3>
                  <span className="tenure">2015-11 — 2016-06</span>
                  <p>
                    <p><strong>Lead developer</strong> for Asda&#39;s internal Mobile Application
                            Development team building applications for Asda colleagues.</p>
                  </p>
                  <ul>
                    <li>Provide development expertise and guidance in Angular.JS and Ionic for
                            multiple business customer focused applications.</li>
                    <li>Lead developer of back-end services leveraging C# or NodeJS to provide
                        supplementary data from an Asda data source (REST API, MSSQL, MariaDB,
                            Oracle DB etc) to front-end applications.</li>
                    <li>Define and implement development standards and practices e.g.introduction
                        to Git, IDE’s, Code reviews, SCRUM, CI/CD tooling &amp; unit testing throughout
                            the team.</li>
                    <li>General team management, including but not limited to, defining and enhancing
                        ways of working with wider teams e.g. QA, BA &amp; PMO, off-shore resource
                            management, staff recruitment and appraisals.</li>
                  </ul>
                </div>
                <div>
                  <h3><em>Senior Software Engineer</em>,
              <a href="https://www.x-labsystems.co.uk/">X-Lab Ltd</a>, Leeds,UK
              </h3>
                  <span className="tenure">2009-06 — 2015-11</span>
                  <p>
                    <p><strong>Lead Developer</strong> on a number of health-care focused software
                            development projects.</p>
                  </p>
                  <ul>
                    <li>Developed and maintained a national C# .NET MVC application (NPEx) for
                            the health sector utilised in over 60 NHS trusts.</li>
                    <li>Presented and demonstrated NPEx to potential customers throughout the
                            UK and Europe.</li>
                    <li>Development Lead for the re-development of Yorkshire and Humber Oncology
                        System Patient Pathway Manager (PPM) as a SPA (using Backbone.js) working
                            with The Leeds Teaching Hospital NHS Trust.</li>
                    <li>Responsible for the management and personal/professional development of
                            a small team of developers.</li>
                  </ul>
                </div>
              </section>
              <hr />
              <section id="education">
                <header>
                  <Icon className='fa fa-lg fa-mortar-board' />
                  <h2>education</h2>
                </header>
                <div>
                  <h3><em>BSC</em>, University of Leeds</h3>
                  <span className="tenure">2006-09 — 2009-06</span>
                  <p>Graduated with a First className with honours BSC in Computing</p>
                </div>
                <div>
                  <h3><em>A-Level&#39;s</em>, West Leeds Sixth Form College</h3>
                  <span className="tenure">2004-09 — 2006-06</span>
                  <p>Three Grade B&#39;s in English Languages, English Literature and Sports
                        Science.</p> <span className="keywords">A/S-Level Grade B in ICT and Grade C in Biochemistry Cisco IT Essentials 1 and 2 </span>
                </div>
                <div>
                  <h3><em>GCSE&#39;s</em>, West Leeds High School</h3>
                  <span className="tenure">1999-09 — 2004-06</span>
                  <p>Four Grade A&#39;s and 6 Grade B&#39;s</p>
                </div>
              </section>
              <hr />
              <section id="recognition">
                <header>
                  <Icon className='fa fa-lg fa-trophy' />
                  <h2>recognition</h2>
                </header>
                <div>
                  <h3><em>Certified Scrum Master</em></h3>
                  <span className="tenure">2016</span>
                </div>
                <div>
                  <h3><em>Certified Lean Practitioner</em></h3>
                  <span className="tenure">2016</span>
                </div>
                <div>
                  <h3><em>Certified Prince 2 Practitioner</em></h3>
                  <span className="tenure">2013</span>
                </div>
              </section>
              <section id="references">
                <p><a href="mailto:ashleysykes01@gmail.com">References available on request</a>
                </p>
              </section>
            </main>
          </CardContent>
        </Card>
      </Container>
    )
  }
}
