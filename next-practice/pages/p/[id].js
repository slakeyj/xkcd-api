import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>Things</p>
    </Layout>
  );
}
