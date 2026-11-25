import React from 'react'
import Helmet from 'react-helmet'
import { defaultDescription, defaultTitle } from 'Data'

export const SEO = ({ title = defaultTitle, description = defaultDescription }) => (
	<Helmet>
		<html lang="en" dir="ltr" />
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta name="twitter:card" content="summary" />
	</Helmet>
)
