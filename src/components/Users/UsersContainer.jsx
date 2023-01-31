import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow, toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/Preloader";
import {userApi} from "../../api/api";


export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow}
                      users={this.props.users} onPageChanged={this.onPageChanged} followingInProgress={this.props.followingInProgress} toggleFollowingProgress={this.props.toggleFollowingProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer);