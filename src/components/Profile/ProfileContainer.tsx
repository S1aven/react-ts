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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

//=======================================

// let AuthRedirectComponent = (props: ProfilePropsType) => {
//   if (!props.isAuth) {
//     return <Navigate to={'/login'}/>
//   }
//   return <ProfileContainer {...props}/>
// }

type PathParamsType = {
  userId?: string
}

type MapStateToPropsType = {
  profile: null | ProfileType
  // isAuth: boolean
};

type MapDispatchToPropsType = {
  getProfile: (userId: number) => void
};

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
// export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
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
    )
  }

  return ComponentWithRouterProp;
}

const WithUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer));

export default connect(mapStateToProps,
  {getProfile})(WithUrlDataContainerComponent);