import Head from 'next/head';
import Breadcrumbs from './Breadcrumbs';

const Layout = (props) => ( 
	<div>
    <Head>
      <title>Next lab</title>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
 	</Head>
    <Breadcrumbs data={props.breadcrumbs}/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;