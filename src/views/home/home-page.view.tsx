import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import { Command, Bold } from 'react-feather';

import { PageLayout } from '../../components';
import SEO from '../../components/seo';
import './home-page.styles.scss';


export const HomePage: React.FC = () => {
    const { site } = useStaticQuery(graphql`
        query UserNameQuery {
        site {
            siteMetadata {
            firstName,
            middleName,
            lastName
            }
        }
        }
    `)

    return (
        (
            <PageLayout>
                <SEO title="Home" />
                <div className='main'>
                    <div className="hero_wrapper">
                        <div className='hero_skill_wrapper'>
                            <div>
                                <Command size={30} />
                                <span>Highly committed</span>
                            </div>
                            <div>
                                <Bold size={30} />
                                <span>Seamlessly collaborative</span>
                            </div>
                            <div>
                                <Command size={30} />
                                <span>Highly committed</span>
                            </div>
                            <div>
                                <Bold size={30} />
                                <span>Seamlessly collaborative</span>
                            </div>
                        </div>
                        <div className='hero_about'>
                            <h2>
                                Hi, I'm {site.siteMetadata.firstName}. Great to meet you.
                                Take a look around, please!
                            </h2>
                            <p>I build amazing websites that are of value to the community. Are you a 
                                startup, or a big establishment? i am sure you will find my services 
                                essential.
                            </p>
                        </div>
                    </div>

                    <section className='overview'>
                        <h3>Projects</h3>

                        <div className='projects_wrapper'>
                            <div className='project'>
                                <img className='project_img' src={''} alt='' />
                                <h4 className='project_title'>Talos cryptocurrency</h4>
                                <p className='project_author'>internship at Eleos technlogy</p>
                            </div>
                            <div className='project'>
                                <img src='' alt='' className='project_img' />
                                <h4 className='project_title'>bolajahmad portfolio</h4>
                                <p className='project_author'>personal project</p>
                            </div>
                            <div className='project'>
                                <img src='' alt='' className='project_img' />
                                <h4 className='project_title'>Nirsal AGSMEIS loan</h4>
                                <p className='project_author'>Contract with needle tech.</p>
                            </div>
                        </div>
                    </section>

                    <section className='footer'>
                        <div className='footer_link_wrapper'>
                            <Link to='/about' className='btn'>
                                <span>more projects..</span>
                            </Link>
                        </div>
                        <div className='footer_link_wrapper'>
                            <button className='btn'>
                                <span>download my resume</span>
                            </button>
                        </div>
                    </section>
                </div>
            </PageLayout>
        )
    )
}