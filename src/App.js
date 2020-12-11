import React, {Component} from "react";
import {Provider} from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter, BrowserRouter, Redirect} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import store from "./Redux/ReduxStore"

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))

class App extends Component {

    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     alert('Some error occured')
    // }
    componentDidMount() {
        this.props.initializeApp();
        //window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    // componentWillUnmount() {
    //     window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='wrapper'>

                <div className='header'>
                    <HeaderContainer/>
                </div>

                <div className='nav'>
                    <Navbar/>
                </div>

                <div className='appWrapperContent'>
                    <switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/login' render={() => <Login/>}/>

                        {/*<Route path = '/music' component={Music}/>*/}

                        {/*<Route path = '/settings' component={Settings}/>*/}

                        <Route path='*'
                               render={() => <div> 404 PAGE NOT FOUND</div>}/>
                    </switch>
                </div>


                <div className='rightSide'>
                    right
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appPage.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const AppJS = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppJS
