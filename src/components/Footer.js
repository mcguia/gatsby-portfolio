import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import { theme, mixins, media } from '@styles';
import { throttle } from '@utils';
const { fontSizes, fonts } = theme;


const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 4em 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: ${fonts.HKGrotesk};

    @media ${media.sm} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;


const FooterLinks = styled.div`
    align-items: center;
        display: flex;
`;

const FooterList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterListItem = styled.li`
    margin: 0 .8em 0 0;
    position: relative;
    font-size: ${fontSizes.sm};
    font-weight: 500;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.sm};
    font-weight: 600;
`;


const Footer = () => (
        <StaticQuery
            query={graphql`
                query SocialQuery {
                  allContentfulSocial {
                    edges {
                      node {
                        name
                        url
                        id
                      }
                    }
                  }
                }
            `}
            render={data => {
                const Socials = data.allContentfulSocial.edges;

                return (
                    <FooterContainer id="footer">
                        <Logo>
                            <Link to={'/'}>Austin McGuire</Link>
                        </Logo>
                        <FooterLinks>
                            <FooterList>
                                {
                                    Socials.map(({ node: social }) => (
                                    <FooterListItem key={social.id}>
                                        <a href={social.url} target="_blank" alt={social.name}>{social.name.toLowerCase()}</a>
                                    </FooterListItem>
                                ))}
                            </FooterList>
                        </FooterLinks>
                    </FooterContainer>
                );
            }}
        />
);

export default Footer;
