import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {getProfile} from "../../redux/action-thunk";
import {ProfileType} from "../../redux/profile-reducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    // @ts-ignore
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2
    }

    this.props.getProfile(userId);
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
  getProfile: (userId: number) => void
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

export default connect(MapStateToProps, {getProfile})(withRouter(ProfileContainer));