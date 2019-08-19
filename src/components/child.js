import React from "react";
import { Input, Tooltip, Icon } from "antd";

export const Child = props => {
  const { test, onChange } = props;

  return (
    <React.Fragment>
      <Input
        name="test"
        value={test}
        onChange={onChange}
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        suffix={
          <Tooltip title="Extra information">
            <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
    </React.Fragment>
  );
};
