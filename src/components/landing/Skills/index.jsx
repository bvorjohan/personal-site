import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>Skills</h1>
				<p>
					What I'm good at:<br/>
					Appian -- a great BPM platform<br/>
					React -- building interactive apps at scale<br/>
					React Native -- why not make a mobile app?<br/>
					SQL -- relational database management<br/>
					HTML -- strong fundamentals<br/>
					Python -- let's solve our problems with scripting<br/>
					REST APIs -- make your app play nice with other apps<br/>
					<br/>
					What I'm learning:<br/>
					Amplify/Appsync/DynamoDB -- define our app centrally<br/>
					Vanilla JS -- give your app a solid foundation with good design practices<br/>
					CSS -- make your app neat and tidy around the edges<br/>
					Java -- don't forget about your backend services<br/>
					UX Design -- let UX drive your success<br/>
					HTTP -- It IS how the Internet works, after all

				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
