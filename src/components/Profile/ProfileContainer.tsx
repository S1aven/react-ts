import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/action";
import {ProfileType} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<ProfilePropsType, ProfilePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/23294`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div className={s.profile}>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

type MapStateToPropsType = {
  profile: null | ProfileType
};

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
};

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer)