import React, {Component} from 'react';
import Aux from "../../Components/Aux/Aux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Layout extends Component {
    render() {
        let {children} = this.props;
        return (
            <Aux>
                <Header/>
                {children}
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;
