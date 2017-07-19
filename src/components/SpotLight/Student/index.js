import React from "react";

import { fullName } from "utils/name";

import SpotLight from "..";

export default props =>
  <SpotLight
    imgUrl={props.getAvatar(props.item)}
    label={fullName(props.item)}
  />;
