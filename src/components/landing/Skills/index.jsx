import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'


const SKILLS_GOOD_AT_DATA = [
	{
		name: 'Appian',
		snippet: 'a great BPM platform'
	},
	{
		name: 'React',
		snippet: 'building interactive apps at scale'
	},
	{
		name: 'React Native',
		snippet: 'why not make a mobile app?'
	},
	{
		name: 'SQL',
		snippet: 'relational database management'
	},
	{
		name: 'HTML',
		snippet: 'strong fundamentals'
	},
	{
		name: 'Python',
		snippet: "lets solve our problems with scripting"
	},
	{
		name: 'REST APIs',
		snippet: 'make your app play nice with other apps'
	},
];

const SKILLS_LEARNING_DATA = [
	{
		name: 'Amplify/Appsync/DynamoDB',
		snippet: 'define our app centrally'
	},
	{
		name: 'Vanilla JS',
		snippet: 'give your app a solid foundation with good design practices'
	},
	{
		name: 'CSS',
		snippet: 'make your app neat and tidy around the edges'
	},
	{
		name: 'Java',
		snippet: "don't forget about your backend services"
	},
	{
		name: 'UX Design',
		snippet: 'let UX drive your success'
	},
	{
		name: 'HTTP',
		snippet: "It IS how the Internet works, after all"
	},
];

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Brad" />
			</Thumbnail>
			<Details>
				<h1>Skills</h1>
				<h2>What I'm Good At</h2>
				<p>
				{
					SKILLS_GOOD_AT_DATA.map(
						(item,index) => <>
							<strong>{item.name}: </strong>{item.snippet}<br/>
						</>
					)
				}
				</p>
				<h2>What I'm Learning</h2>
				<p>
				{
					SKILLS_LEARNING_DATA.map(
						(item,index) => <>
							<strong>{item.name}: </strong>{item.snippet}<br/>
						</>
					)
				}
				</p>
				
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
