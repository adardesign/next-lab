import React, { Component } from 'react';
//import FeaturedBrands from "../components/FeaturedBrands"
//import CategoryFaqs from "../components/CategoryFaqs"
//import Breadcrumbs from "../components/Breadcrumbs"
//import DeviceType from "../utils/DeviceType"
import Link from 'next/link'
import "isomorphic-fetch";

  
// Stateless componants
const CatChildren = (props) => (
    [1, 2].map((childSub,j) => {
    return (
      <li key={j*4}>
        <a href="/" title="">{childSub}</a>
      </li>)
      })
  );


class CategoryPage extends Component {

  constructor(props) {
    super(props);
  }

    static async getInitialProps({ req }) {
        const res = await fetch("http://adardesign.com/codelab/api/categoryPages/catagory-page.json");
        const json = await res.json();
        return { pageData: json }
    }

    render() {
      return ( 
        <div className="Catagory">
          {/* <Breadcrumbs breadcrumbs={this.state.page.breadcrumbs} />*/}
          <div className="category-title">
              <h1>{this.props.pageData.currentCatagory.title}</h1>
              {/* {this.state.deviceType === "desktop" && <img className="cat-hero" src={this.state.currentCatagory.image}/>} */}
          </div>

          <div className="category-container layout-80-20 layout-reverse clear">
            <div className="col1">
              <div className="filter-description">
                {this.props.pageData.currentCatagory.description}
              </div> 

              <section className="category-index">
                {this.props.pageData.subCatagories.map((sub, i) => {
                  return (<div key={i*2} className="cat-item">
                            <Link href={"/l/"+i}>
                              <a>
                                <img src={sub.image}/>
                                <h2>{sub.title}</h2>
                              </a>
                            </Link>
                            <ul>
                              <CatChildren collection={sub.children}/>
                            </ul>
                    </div>
                  )
                })}
              </section>
             { /* {this.state.deviceType === "desktop" && <CategoryFaqs faqCollection={this.state.currentCatagory.categoryFaqs} />} */}
              </div>
            <div className="col2">
                <div className="category-aside-nav">
                  {this.props.pageData.subCatagories.map((sub, i) => {
                  return (
                      <Link href={"/l/"+i} key={i*2}>
                        <a>{sub.title}</a>
                      </Link>
                    )
                  })}

                </div>
                 { /*<FeaturedBrands brands={this.state.currentCatagory.featuredBrands} />*/}
                
            </div>

          </div>

        </div> 
      );
    }

}

export default CategoryPage;

