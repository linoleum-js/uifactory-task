import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'react-flexbox-layout';

import { fullName } from 'utils/name';

class DashboardLeftBar extends React.Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    getAvatar: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {

    const {list, title, redirect}= this.props;
    const renderer = redirect ? this._renderItem : this._renderItemNoRedirect;
    return (
      <div>
        <h3 style={titleStyle}>{title}</h3>
        {list.map(renderer.bind(this))}
      </div>
    )
  }

  _renderItem(item) {
    return (
      <NavLink
        key={item._id}
        to={`/students/${item._id}`}
        style={entryStyle}
        activeStyle={selectedEntryStyle}
      >
        {this._renderItemContent(item)}
      </NavLink>
    );
  }

  _renderItemNoRedirect(item) {
    let style = Object.assign({}, entryStyle);
    if (this.props.selectedItem === item._id) {
      Object.assign(style, selectedEntryStyle);
    }

    return (
      <span
        key={item._id}
        style={style}
        onClick={() => { this.props.onSelect(item._id); }}
      >
        {this._renderItemContent(item)}
      </span>
    );
  }

  _renderItemContent(item) {
    const label = "";
    return (
      <HLayout key={item._id} height="100%" alignItems="middle" gutter={7}>
        <div
          style={{
              ...studentAvatarStyle,
              backgroundImage: `url(${this.props.getAvatar(item)})`,
            }}
        />
        <HLayoutItem flexGrow style={studentNameStyle}>
          <span>{fullName(item)}</span>
        </HLayoutItem>
        <span>{label}</span>
      </HLayout>
    );
  }
}

const BORDER = '1px solid #e3e9e8';

const titleStyle = {
  fontWeight: "normal",
  fontSize: "17px",
  marginLeft: "1.1rem",
  color: "#8d8d8d",
};

const entryStyle = {
  borderBottom: BORDER,
  padding: "0.3rem 0.5rem",
  height: "4rem",
  fontSize: "1.1rem",
  display: "block",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
  cursor: "pointer"
};

const selectedEntryStyle = {
  backgroundColor: "#f6fafb",
  backgroundImage: "linear-gradient(108deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
  cursor: "default",
};

const studentNameStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const studentAvatarStyle = {
  height: "3rem",
  width: "3rem",
  margin: "0 0.6rem",
  borderRadius: "50%",
  backgroundSize: "cover",
};

export default DashboardLeftBar;
