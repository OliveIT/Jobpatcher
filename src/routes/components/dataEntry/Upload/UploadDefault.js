import React from "react";
import {Button, Card, Icon, Upload} from "antd";

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({file, fileList}) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};

const UploadDefault = () => {
    return (
      <Card className="gx-card" title="Upload Default">
        <Upload {...props}>
          <Button>
            <Icon type="upload"/> Upload
          </Button>
        </Upload>
      </Card>
    );
  }
;

export default UploadDefault;
