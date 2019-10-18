import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => {
	
	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
		</Wrapper>
	)
}
