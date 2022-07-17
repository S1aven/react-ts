import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthMe} from "../../redux/action-thunk";
import {AppRootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType, PropsType> {
  componentDidMount() {
    this.props.getAuthMe();
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

type MapStateToPropsType = ReturnType<typeof MapStateToProps>
type MapDispatchToProps = {
  getAuthMe: () => void;
}

type PropsType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: AppRootState) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(MapStateToProps, {getAuthMe})(HeaderContainer)
