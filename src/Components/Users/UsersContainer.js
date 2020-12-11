import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress,  getUsers
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {

    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector,
} from "../../Redux/usersSelectors";


class UsersContainer extends React.Component {


    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }


    render() {
        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users totalItemsCount={this.props.totalItemsCount}
                   Users={this.props.Users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        Users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose (
    connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)
