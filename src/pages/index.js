import React from 'react'
import { Layout, SEO } from 'Common'
import { author, contact, socialLinks } from 'Data'

export default () => (
	<Layout>
		<SEO />
		<h1>{author}</h1>
		<p className="muted">Frontend engineer at Amazon</p>

		<p>
			Passionate about web products and infrastructure. Right now that
			means support tools for Amazon sellers. Before that, Buy with Prime
			and the AWS CloudFormation console.
		</p>

		<ul className="links">
			<li><a href={`mailto:${contact.email}`}>Email</a></li>
			<li><a href={socialLinks.github}>GitHub</a></li>
			<li><a href={socialLinks.linkedin}>LinkedIn</a></li>
		</ul>
	</Layout>
)
