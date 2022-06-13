import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/action";
import {initialStateType} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";
import {authMeAPI} from "../../api/api";

class HeaderContainer extends React.Component<PropsType, PropsType> {
  componentDidMount() {

    authMeAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data)
        }
      });
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

type MapStateToPropsType = ReturnType<typeof MapStateToProps>
type MapDispatchToProps = {
  setAuthUserData: (data: initialStateType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToProps

const MapStateToProps = (state: AppRootState) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)
