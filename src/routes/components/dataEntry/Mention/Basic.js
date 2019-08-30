import React from "react";
import {Card, Mention} from "antd";

const {toString, toContentState} = Mention;

const Basic = () => {
  function onChange(contentState) {
    console.log(toString(contentState));
  }

  function onSelect(suggestion) {
    console.log('onSelect', suggestion);
  }

  return (
    <Card className="gx-card" title="Basic">
      <Mention
        style={{width: '100%'}}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
      />
    </Card>
  );
};

export default Basic;
