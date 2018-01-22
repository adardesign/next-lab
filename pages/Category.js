import Layout from '../components/Layout';

const Category = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Next Lab Category page</h1>
      <p>Checking the capabilities of Next.js</p>
    </div>
  </Layout>
);

Category.getInitialProps = async function() {
	return {
		page:"Category"
	}
}

export default Category;