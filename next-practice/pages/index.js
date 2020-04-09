import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = (props) => {
  return (
    <Layout>
      <h1>XKCD API</h1>
      <ul>
        <img src={props.comic} />
        <PostLink id="foo" />
        <PostLink id="bar" />
        <PostLink id="baz" />
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const response = await axios.get("https://xkcd.com/info.0.json");
  console.log("response", response.data);
  return {
    comic: response.data.img,
  };
};

export default Index;
