import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/action";
import {initialStateType} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType, PropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data)
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
