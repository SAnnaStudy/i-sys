import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoutes = () => {
    const thatUser = useSelector(state => state.user.loggedInUser)
    return(
        thatUser ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes