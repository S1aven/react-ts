import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/action-thunk";
import {ProfileType} from "../../redux/profile-reducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    // @ts-ignore
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2
    }

    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
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

type PathParamsType = {
  userId?: string
}

type MapStateToPropsType = {
  profile: null | ProfileType
};

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
};

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
// export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: ProfilePropsType) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams<PathParamsType>();
    return (
      <Component
        {...props}
        router={{
          location,
          navigate,
          params
        }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(MapStateToProps, {setUserProfile})(withRouter(ProfileContainer));