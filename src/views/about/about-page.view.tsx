import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { PageLayout } from '../../components';
import SEO from '../../components/seo';
import './about-page.styles.scss';
import { RecommendationsComponent, SkillComponent } from './components';




export const AboutComponent = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allImageSharp(filter: {fixed: {originalName: {eq: "profile-img.jpg"}}}) {
        nodes {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <PageLayout>
      <SEO title="About" />
      <div className="main">
        <div className="about_wrapper">
          <div className="profile_img">
            <Img 
              fixed={data.allImageSharp.nodes[0].fixed} 
              alt="bolajahmad picture" 
              imgStyle={{ borderRadius: "50%", height: "100%" }} 
            />
          </div>
          <div className="about_notes">
            <h1>Bolaji Ahmad</h1>
            <p>I am a motivated front-end developer, with experience building impactful products.</p>
            <p>I am able to provide a high level of committment and also an impressive output. I have worked
              in different companies in different countries, contact me!
            </p>
          </div>
        </div>
        
        <div className="skill_wrapper">
          <SkillComponent />
        </div>
        
        <div className="recommendations_wrapper">
          <h3 className="center">what others have said</h3>
          <RecommendationsComponent />
        </div>
      </div>
    </PageLayout>
  )
}