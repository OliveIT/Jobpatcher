import React from 'react';
import {Layout} from "antd";
import {Configure, connectHits, connectStateResults, InstantSearch, Pagination, Stats,} from 'react-instantsearch-dom';
import {withUrlSync} from './urlSync';
import 'instantsearch.css/themes/algolia.css';
//import './style.css'
import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import ProductList from "./ProductList";

const {Content} = Layout;

const App = props => (
  <InstantSearch className="gx-main-content"
                 appId="latency"// use your key here
                 apiKey="6be0576ff61c053d5f9a3225e2a90f76"// use your key here
                 indexName="ikea"
                 searchState={props.searchState}
                 createURL={props.createURL}
                 onSearchStateChange={props.onSearchStateChange}>

    <Configure hitsPerPage={16}/>

    <Layout className="gx-algolia-layout-has-sider">
      <Sidebar/>
      <div className="gx-algolia-main">
        <Header/>
        <Content className="gx-algolia-content">
          <CustomResults/>
        </Content>
        <Footer>
          <Pagination showLast={true}/>
        </Footer>
      </div>
    </Layout>
  </InstantSearch>
);


const CustomResults = connectStateResults(({searchState, searchResult}) => {
  if (searchResult && searchResult.nbHits === 0) {
    return (
      <div className="gx-algolia-content-inner">
        <div className="gx-algolia-no-results">
          No results found matching{' '}
          <span className="gx-algolia-query">{searchState.query}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="gx-algolia-content-inner">
        <Stats/>
        <ConnectedProducts/>
      </div>
    );
  }
});

const ConnectedProducts = connectHits(ProductList);

export default withUrlSync(App);
