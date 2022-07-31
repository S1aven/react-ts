import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootState} from "../redux/redux-store";


export type MapStateToPropsType = {
  isAuth: boolean
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

  function RedirectComponent(props: MapStateToPropsType) {
    const {isAuth, ...restProps} = props;

    if (!isAuth) {
      return <Navigate to={'/login'}/>
    }
    return <Component {...restProps as T}/>
  }

  return connect(mapStateToProps)(RedirectComponent);
}