import React, {Component} from 'react';
 import Swiper from 'react-id-swiper';
// import HomeAboutCMSWidget from '../components/HomeAboutCMSWidget'
// import LazyLoad from 'react-lazyload';
import fetch from "isomorphic-unfetch" 
import Link from 'next/link'


class HomePage extends Component {
    constructor(props){
        super(props)
    }


    static async getInitialProps({ req }) {
        const res = await fetch("http://adardesign.com/codelab/api/homePage/homepage.json");
        const json = await res.json();
        return { pageData: json }
    }
        
    render() {
       return (
            <div className="homePage">
                    <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166"/>
                <Swiper>
                    {this.props.pageData.heros.map((hero,i) => {
                        return  (<a key={i} className="trackEvent banner" data-trackdata="Home Page,hero|position {i}, {hero.text}"
                                href={hero.link}>
                                <h2>{hero.text}</h2>
                                <img src={hero.image} />
                            </a>)
                        })}
                    
                </Swiper>

                <div
                    className="homePageCatgoryWidget catagoryWidget widget section"
                    id="homePageCatgoryWidget">
                    <div className="tabsContainer">
                        {this.props.pageData.categories.map((cat, i) => {
                            return <a key={i} href="#categoryWidget/{cat.id}"  className={(i === 0 ? 'active' : ' ')} data-id="featuredTab">{cat.id}</a>

                        })}
                    </div>
                    <div className="catagoryWidgetContent">
                        <ul className="catagoryWidgetList">
                        {this.props.pageData.categories[0].list.map((cat, i) => {
                            return (<li key={i}>
                                <Link href={cat.link}>
                                    <a>
                                    <img src={cat.image} />
                                    <h3>{cat.text}</h3>
                                    </a>
                                </Link>
                            </li>)
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;