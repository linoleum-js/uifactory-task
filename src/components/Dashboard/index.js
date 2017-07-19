import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem } from "react-flexbox-layout";

import SimpleLeftBar from "components/Dashboard/LeftBar/";
import StudentSpotLight from "components/SpotLight/Student";

const Dashboard = props => {
  let spotlight;
  let selectedStudentid;
  if (props.match.params && props.match.params.studentId) {
    selectedStudentid = props.match.params.studentId;
  } else {
    // if we select item without routing
    selectedStudentid = props.selectedItem;
  }
  if (selectedStudentid) {
    const spotlightedStudent = props.list.find(
      student => student._id == selectedStudentid
    );
    spotlight = <StudentSpotLight item={spotlightedStudent} getAvatar={props.getAvatar} />;
  }
  return (
    <HLayout width="100%" gutter={7}>
      <HLayoutItem flexGrow={1}>
        <SimpleLeftBar
          list={props.list}
          getAvatar={props.getAvatar}
          title={props.title}
          redirect={props.redirect}
          onSelect={props.onSelect}
          selectedItem={props.selectedItem}
        />
      </HLayoutItem>
      <HLayoutItem flexGrow={1}>
        {selectedStudentid &&
          <div style={spotLightContainerStyle}>
            {spotlight}
          </div>
        }
      </HLayoutItem>
    </HLayout>
  );
};

export default withRouter(Dashboard);

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
