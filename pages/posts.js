import Link from "next/link";
import fs from "fs";
import Layout from "../components/layout";

const Posts = ({ slugs }) => (

    <Layout>
  <div>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/posts/" + slug}>
            <a>{"/posts/" + slug}</a>
          </Link>
        </div>
      );
    })}
  </div>
  </Layout>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("data/_posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Posts;