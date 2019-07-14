import React from 'react';
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const blog = () => (
    <Layout>
        <SEO title="blog" />
        <h1>This is my blog</h1>
        <p>Welcome to my blog</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)
  
export default blog