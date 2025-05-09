import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Digital Signage Management
                </div>
                <h3 className="mt-0 mb-12">
                  Digital Signage Content Administration
                </h3>
                <p className="m-0 mb-8">
                  Independently managing digital signage deployments across Nottingham Trent University's City, Clifton, and Brackenhurst campuses. Using the centralised Four Winds Interactive (FWI) system, accessed remotely via virtual machines, I oversee scheduling, content deployment, and real-time issue resolution across all Students’ Union (NTSU) communications.
                </p>

                <div className="mt-12">
                  <strong>Key Technical Skills and Responsibilities:</strong>
                  <ul className="mt-4">
                    <li>Managing and monitoring digital signage content through FWI’s centralised platform.</li>
                    <li>Collaborating with various internal NTSU departments—including Marketing & Communications, Events, Democracy & Representation, Commercial Services, Opportunities & Engagement, and Business Development—to coordinate multimedia content.</li>
                    <li>Deploying a wide variety of promotional and informational content, covering commercial partnerships (e.g., Samsung, Domino’s), union elections, wellbeing initiatives, student advice and support services, clubs and societies, volunteering opportunities, entertainment events, retail promotions, and more.</li>
                    <li>Quickly identifying and resolving deployment, scheduling, and content-related technical issues to maintain consistent operation and accuracy.</li>
                  </ul>
                </div>

                <p className="m-0 mt-8">
                  This project demonstrates practical technical skills in content management, system administration, and collaboration across diverse organisational teams within a structured digital environment.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Digital Signage Management"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Varsity Website Relaunch
                </div>
                <h3 className="mt-0 mb-12">
                  Varsity Website Migration, Rebranding & Infrastructure Management
                </h3>
                <p className="m-0 mb-12">
                  Managed the technical infrastructure and deployment for the relaunch of the Notts Varsity Series website—an annual collaborative project between Nottingham Trent University (NTU) and the University of Nottingham (UoN). The site plays a central role in promoting a high-profile sports series and supports over £100,000 in revenue through sponsorships, ticketing, and branded engagement.
                </p>

                <div className="mt-12">
                  <strong>Key Deliverables:</strong>
                  <ul className="mt-4">
                    <li>Migrated the website from WordPress (OVH Cloud) to a static React architecture (Hostinger), significantly improving performance and reducing operational complexity.</li>
                    <li>Reduced hosting and infrastructure costs by 76%.</li>
                    <li>Implemented CI/CD pipelines to support streamlined collaboration between NTU and UoN contributors.</li>
                    <li>Configured 301 redirects via .htaccess from .co.uk to .com to retain SEO value and prevent domain spoofing.</li>
                    <li>Established a dual-domain setup, shifting primary traffic to nottsvarsity.com to enhance business credibility and global accessibility.</li>
                    <li>Contributed minor front-end updates to support the lead developer during deployment.</li>
                    <li>Participated in rebranding implementation, aligning content, assets, and design with updated organisational strategy.</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <strong>Measured Outcomes:</strong>
                  <ul className="mt-4">
                    <li><strong>SEO Performance Gains:</strong></li>
                    <ul>
                      <li>Clicks increased by 28%</li>
                      <li>CTR improved from 2% to 3.4% (+70%)</li>
                      <li>Average search position improved from 24.7 to 20.8 (+16%)</li>
                    </ul>
                    <li><strong>Site Traffic (Post-Migration):</strong></li>
                    <ul>
                      <li>147,157 total page views</li>
                      <li>55,467 unique visitors</li>
                      <li>131,930 views on the home page alone</li>
                    </ul>
                  </ul>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Live site</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://nottsvarsity.com" target="_blank" rel="noopener noreferrer">nottsvarsity.com</a>
                  </span>
                </div>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Varsity Website Migration"
                  width={528}
                  height={396} />
              </div>
            </div>

            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;