import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";


const Post = ({ htmlString, data }) => {
  return (
    <>
  
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      
<Container>
 <div dangerouslySetInnerHTML={{ __html: htmlString }} />
</Container>
     
    
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data/_posts");
  console.log("files: " , files);
  const paths = files.map(filename => ({
    params: {
      title,
      slug: filename.replace(".md", ""),
    }
  }));
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("data/_posts", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  };
};

export default Post;