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
            
          <div className="container">
            <div className={innerClasses}>
              <SectionHeader data={sectionHeader} className="center-content" />
              <div className={splitClasses}>

                <div className="split-item">
                  <div
                    className="split-item-content center-content-mobile reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                      Trent Freshers & Trent Events Website Migration
                    </div>
                    <h3 className="mt-0 mb-12">
                      Infrastructure Overhaul & Performance Optimisation
                    </h3>
                    <p className="m-0 mb-12">
                      Led the migration of two high-traffic, student-facing websites—trentfreshers.org and trentevents.co.uk—from IONOS shared hosting to Kinsta’s advanced, container-based infrastructure. The previous environment presented reliability issues, poor backend performance, and limited scalability. This project modernised both sites, delivering improved stability, speed, and long-term infrastructure value.
                    </p>

                    <div className="mt-12">
                      <strong>Key Deliverables:</strong>
                      <ul className="mt-4">
                        <li>Migrated both websites from IONOS shared hosting to Kinsta, leveraging isolated container-based architecture to eliminate shared-resource bottlenecks.</li>
                        <li>Achieved a 14% cost reduction per site while enabling scalable infrastructure built for traffic surges.</li>
                        <li>Upgraded site architecture to PHP 8.x+, improving runtime execution and memory efficiency.</li>
                        <li>Integrated Cloudflare CDN, reducing latency and optimising content delivery for distributed users.</li>
                        <li>Enabled automatic daily backups with isolated file systems, eliminating cross-site contamination risk.</li>
                        <li>Enforced HTTPS across all environments via SSL certificates.</li>
                        <li>Activated HTTP/3 support, Kinsta-native malware scanning, and DDoS protection for improved security posture.</li>
                      </ul>
                    </div>

                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">Live sites</span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">
                        <a href="https://trentevents.co.uk" target="_blank" rel="noopener noreferrer">trentevents.co.uk (Events)</a>
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">
                        <a href="https://trentfreshers.org" target="_blank" rel="noopener noreferrer">trentfreshers.org (Freshers)</a>
                      </span>
                    </div>
                  </div>

                  <div
                    className={classNames(
                      'split-item-image center-content-mobile reveal-from-bottom',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item"
                  >
                      {/* 
                      <Image
                        src={require('./../../assets/images/features-split-image-01.png')}
                        alt="Image 1"
                        width={528}
                        height={396}
                      /> 
                      */}
                      <p className="m-0 mb-12">‎ ‎ ‎</p>

                      <Image
                        src={require('./../../assets/images/trentVoutcomes.png')}
                        alt="Image 2"
                        width={528}
                        height={396}
                      />
                      <p className="m-0 mb-12">‎ ‎ ‎</p>

                      {/*
                      <Image
                        src={require('./../../assets/images/voutcomes.png')}
                        alt="Image 3"
                        width={528}
                        height={396}
                      />
                      */}
                      <p className="m-0 mb-12">‎ ‎ ‎</p>

                      <Image
                        src={require('./../../assets/images/trentFoutcomes.png')}
                        alt="Image 4"
                        width={528}
                        height={396}
                      />

                  </div>
                </div>

              </div>
            </div>
          </div>


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
                    <li>Collaborating with various internal NTSU departments including Marketing & Communications, Events, Democracy & Representation, Commercial Services, Opportunities & Engagement, and Business Development to coordinate multimedia content.</li>
                    <li>Deploying a wide variety of promotional and informational content, covering commercial partnerships , union elections, wellbeing initiatives, student advice and support services, clubs and societies, volunteering opportunities, entertainment events, retail promotions, and more.</li>
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
                  Managed the technical infrastructure and deployment for the relaunch of the Notts Varsity Series website, an annual collaborative project between Nottingham Trent University (NTU) and the University of Nottingham (UoN). The site plays a central role in promoting a high-profile sports series and supports significant revenue through sponsorships, ticketing, and branded engagement.
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
                 <p className="m-0 mb-12">
                  ‎ ‎ ‎ 
                 </p>
                  <Image
                  src={require('./../../assets/images/voutcomes.png')}
                  alt="Digital Signage Management"
                  width={528}
                  height={396} />
              </div>
            </div>

            
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Bitwarden Password Vault Implementation
                </div>
                <h3 className="mt-0 mb-12">
                  Secure Credential Management
                </h3>
                <p className="m-0 mb-12">
                  Implemented a centralised, enterprise-grade password management system using Bitwarden to replace legacy storage practices and enhance operational security across departments.
                </p>
                <div className="mt-12">
                  <strong>Key Deliverables:</strong>
                  <ul className="mt-4">
                    <li>Deployed a zero-knowledge, AES-256 encrypted vault to secure credentials used in NTSU's digital platforms and internal systems.</li>
                    <li>Enabled multi-factor authentication (MFA) to meet internal access control policies and reduce unauthorised access risk.</li>
                    <li>Configured role-based access to restrict visibility of credentials to authorised users only, improving privilege segmentation.</li>
                    <li>Replaced insecure practices such as email, spreadsheets, and browser-based storage with a policy-controlled, auditable platform.</li>
                    <li>Integrated Bitwarden into onboarding and offboarding workflows, enabling instant access revocation and streamlined permission assignment.</li>
                    <li>Ensured compliance with relevant standards, including ISO 27001, SOC 2, GDPR, and HIPAA, and enabled full audit logging for internal and external reviews.</li>
                  </ul>
                </div>
                <div className="mt-12">
                  <strong>Measured Outcomes:</strong>
                  <ul className="mt-4">
                    <li>Significantly reduced credential exposure risk and mitigated attack surfaces by eliminating non-secure sharing methods.</li>
                    <li>Improved cross-team collaboration with secure, permissioned credential sharing.</li>
                    <li>Enhanced compliance posture and internal accountability through system-wide visibility and traceable access logs.</li>
                    <li>Aligned with cloud and enterprise security principles covered in MSc modules, particularly in Network and Cloud Security and Enterprise Systems Management.</li>
                  </ul>
                </div>
              </div>

              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item"
            >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                MachForm Platform Management
              </div>
              <h3 className="mt-0 mb-12">
                Secure Form Infrastructure for Organisational Operations
              </h3>
              <p className="m-0 mb-12">
                Responsible for the deployment, maintenance, and administration of a self-hosted MachForm system used across the organisation for form-based workflows and data collection. The platform underpins internal operations in HR, Finance, Compliance, Events, and more.
              </p>
              <div className="mt-12">
                <strong>Key Deliverables:</strong>
                <ul className="mt-4">
                  <li>Managed server-side hosting, including version upgrades, backups, and patching for MachForm.</li>
                  <li>Administered user roles and access control policies across departments to ensure data segregation and security.</li>
                  <li>Maintained a secure backup process with off-server redundancy and restricted access.</li>
                  <li>Configured form behaviour using logic rules and permissions, enabling teams to independently manage content while enforcing standardised structures.</li>
                  <li>Coordinated with departments to deploy new workflows for internal surveys, service requests, compliance forms, and staff feedback mechanisms.</li>
                </ul>
              </div>
              <div className="mt-12">
                <strong>Measured Outcomes:</strong>
                <ul className="mt-4">
                  <li>Centralised and secured all organisational form processes, reducing reliance on emails and spreadsheets.</li>
                  <li>Reduced risk of data exposure through strict access control and encryption of stored submissions.</li>
                  <li>Enabled rapid deployment of department-specific workflows without external development.</li>
                  <li>Improved data quality, response rates, and compliance tracking across multiple functions.</li>
                </ul>
              </div>
            </div>

            <div
              className={classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item"
            >
              <Image
                src={require('./../../assets/images/features-split-image-01.png')}
                alt="MachForm System Management"
                width={528}
                height={396}
              />
            </div>
          </div>


          <div className="split-item">
            <div
              className="split-item-content center-content-mobile reveal-from-left"
              data-reveal-container=".split-item"
            >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Security Incident Reporting System
              </div>
              <h3 className="mt-0 mb-12">
                Venue Safety & Case Management Workflow
              </h3>
              <p className="m-0 mb-12">
                Designed and implemented a structured incident reporting system for all NTSU-managed venues, including bars, cafes, licensed event spaces, and social areas across City, Clifton, and Brackenhurst campuses. The system enables secure, logic-based submission and review of incidents ranging from refusals and ejections to retail-related risks and safeguarding concerns.
              </p>

              <div className="mt-12">
                <strong>Key Deliverables:</strong>
                <ul className="mt-4">
                  <li>Built and deployed a dedicated reporting platform within MachForm to support venue-specific incidents including:
                    <ul>
                      <li>Refusals</li>
                      <li>Ejections</li>
                      <li>Security risks</li>
                      <li>Retail/shop incidents</li>
                    </ul>
                  </li>
                  <li>Applied conditional logic to dynamically adapt forms based on user role and incident type, reducing errors and standardising reporting.</li>
                  <li>Integrated evidence capture, CCTV/body cam confirmation fields, and review flags for operational management sign-off.</li>
                  <li>Enabled structured escalation workflows involving SIA, PM, SUP, and relevant compliance officers.</li>
                  <li>Configured submission logging and access control to meet internal security and data handling standards.</li>
                </ul>
              </div>

              <div className="mt-12">
                <strong>Measured Outcomes:</strong>
                <ul className="mt-4">
                  <li>Improved traceability and accountability for venue-related incidents through consistent data capture and role-based sign-off.</li>
                  <li>Replaced ad-hoc, paper-based or verbal reporting methods with a digitally auditable system.</li>
                  <li>Reduced follow-up delays with built-in review triggers and response prompts.</li>
                  <li>Strengthened risk management and compliance reporting across NTSU-operated venues.</li>
                </ul>
              </div>
            </div>

            <div
              className={classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item"
            >
              <Image
                src={require('./../../assets/images/features-split-image-01.png')}
                alt="Security Incident Reporting System"
                width={528}
                height={396}
              />
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