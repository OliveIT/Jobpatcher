import React from "react";
import {Button, Card, Icon, message, Upload} from "antd";

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadClick = () => {
    return (
      <Card className="gx-card" title="Upload Click">
        <Upload {...props}>
          <Button>
            <Icon type="upload"/> Click to Upload
          </Button>
        </Upload>
      </Card>
    );
  }
;

export default UploadClick;
