import React from 'react'
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'

const Main = ({
    children
}) => {
    return (
        <div>
            <MainHeader />
            {children}
            <MainFooter />
        </div>
    )
}
export default Main