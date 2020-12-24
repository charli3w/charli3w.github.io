import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import license from '../private/license.js'
import resume from '../files/resume.pdf'
import { FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import { IconContext } from 'react-icons'
import '../styles/styles.css'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

class App extends React.Component {
  render() {
    const Menu = () => (
      <div id="menu">
        <ul className="actions">
          <IconContext.Provider value={{ size: '2em' }}>
            <li>
              <a href="https://linkedin.com/in/ccrwnn" rel="noreferrer noopener" target="_blank">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/charli3w" rel="noreferrer noopener" target="_blank">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href={resume} rel="noreferrer noopener" target="_blank">
                <FiFileText />
              </a>
            </li>
            <li>
              <a href="mailto:charliehuawang@gmail.com">
                <FiMail />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    );

    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Charlie Wang's personal website." />
          <meta name="author" content="Charlie Wang" />
          <title>Charlie Wang</title>
        </Helmet>
        <Menu />
        <ReactFullpage
          // debug /* Debug logging */

          // Required when using extensions
          pluginWrapper={pluginWrapper}

          // fullpage options
          licenseKey={license}
          navigation
          navigationTooltips={['', 'Portfolio']}
          anchors={['', 'portfolio']}

          render={comp => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <h3>Hi, I'm</h3>
                <h1>Charlie Wang.</h1>
              </div>
              <div className="section">
                <h2>Where I've worked</h2>
                <div className="portfolio">
                  <div>
                    <div className="portfolio-row">
                      <div className="portfolio-row-header">
                        Engineer <b>@ Google Workspace</b>
                      </div>
                      <div className="portfolio-row-subheader">
                        2019 - Present
                      </div>
                      <div>
                        Chat + Docs Editors in Gmail 
                      </div>
                    </div>
                    <div className="portfolio-row">
                      <div className="portfolio-row-header">
                        Engineer <b>@ Gmail</b>
                      </div>
                      <div className="portfolio-row-subheader">
                        2017 - 2019
                      </div>
                      <div>
                        New Gmail magic
                      </div>
                    </div>
                    <div className="portfolio-row">
                      <div className="portfolio-row-header">
                        Web Intern <b>@ Inbox</b>
                      </div>
                      <div className="portfolio-row-subheader">
                        2016
                      </div>
                    </div>
                    <div className="portfolio-row">
                      <div className="portfolio-row-header">
                        Intern <b>@ TrackRevenue</b>
                      </div>
                      <div className="portfolio-row-subheader">
                        2015
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
