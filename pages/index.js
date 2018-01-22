import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Next Lab</h1>
      <p>Checking the capabilities of Next.js</p>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
	return {
		page:"Home"
	}
}

export default Index;