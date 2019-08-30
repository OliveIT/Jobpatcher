import React from "react";
import {Layout} from "antd";
import {
  ClearRefinements,
  HierarchicalMenu,
  Panel,
  RangeInput,
  RatingMenu,
  RefinementList,
} from "react-instantsearch-dom";

const {Sider} = Layout;
const Sidebar = () => (
  <Sider className="gx-algolia-sidebar">
    <div className="gx-algolia-sidebar-content">
      <ClearRefinements
        translations={{
          reset: 'Clear all filters',
        }}
      />

      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">Show results for</div>
        <HierarchicalMenu
          attributes={['category', 'sub_category', 'sub_sub_category']}
        />
      </div>

      <div className="gx-algolia-category-item">
        <div className="gx-algolia-category-title">Refine By</div>

        <Panel header={<span>Type</span>}>
          <RefinementList className="gx-algolia-refinementList" attribute="type" operator="or" limit={5} searchable/>
        </Panel>

        <Panel header={<span>Materials</span>}>
          <RefinementList className="gx-algolia-refinementList"
                          attribute="materials"
                          operator="or"
                          limit={5}
                          searchable
          />
        </Panel>


        <Panel header={<span>Rating</span>}>
          <RatingMenu className="gx-algolia-refinementList" attribute="rating" max={5}/>
        </Panel>

        <Panel header={<span>Price</span>}>
          <RangeInput className="gx-algolia-refinementList" attribute="price"/>
        </Panel>
      </div>

      <div className="thank-you">
        Data courtesy of <a href="http://www.ikea.com/">ikea.com</a>
      </div>
    </div>
  </Sider>
);


export default Sidebar;

