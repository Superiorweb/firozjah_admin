import './admin/Css/bootstrap-rtl.css';
import './admin/Css/bootstrap.min.css';
import Dashboard from "./admin/Dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Index from "./admin/index";
import Setting from "./admin/Setting/Setting";
import React from "react";
import AddAdmin from "./admin/AddAdmin/AddAdmin";
import AdminWork from "./admin/AddAdmin/AdminWork";
import Users from "./admin/AddAdmin/Users";
import UserSetting from "./admin/AddAdmin/UserSetting";
import Catgoryes from "./admin/Catgoryes/Catgoryes";
import Customer from "./admin/Customer/Customer";
import Suppliers from "./admin/Customer/Suppliers";
import Productlist from "./admin/products/Productlist";
import AddProduct from "./admin/Catgoryes/AddProduct";
import Sells from "./admin/products/Sells";
import Reference from "./admin/products/Reference";
import Transaction from "./admin/products/transaction";
import Support from "./admin/Support/Support";
import ConnectUs from "./admin/Support/ConnectUs";
import Photography from "./admin/Support/Photography";
import Questions from "./admin/Support/Questions";
import AddPage from "./admin/Sheets/AddPage";
import Footer from "./admin/Footer/Footer";
import AddSheets from "./admin/Sheets/AddSheets";
import Item from "./admin/Catgoryes/Item";
import Subcategory from "./admin/Catgoryes/Subcategory";
import Tickets from "./admin/Support/Tickets";
import Daryafti from "./admin/products/daryafti";
import Success from "./admin/products/success";
import Failed from "./admin/products/failed";
import History from "./admin/Customer/History";
import IndexBase from "./Component/index";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/adminpanel">
                    <Index/>
                </Route>

                <Route path="/firojahadmin/setting">
                  <Setting/>
                </Route>

                <Route path="/firojahadmin/addadmin">
                    <AddAdmin/>
                </Route>

                <Route path="/firojahadmin/adminwork">
                    <AdminWork/>
                </Route>

                <Route path="/firojahadmin/Users">
                    <Users/>
                </Route>

                <Route path="/firojahadmin/Customer">
                    <Customer/>
                </Route>

                <Route path="/firojahadmin/Suppliers">
                    <Suppliers/>
                </Route>

                <Route path="/firojahadmin/History">
                   <History/>
                </Route>

                <Route path="/firojahadmin/Catgoryes">
                    <Catgoryes/>
                </Route>

                <Route path="/firojahadmin/Productlist">
                    <Productlist/>
                </Route>

                <Route path="/firojahadmin/AddProduct">
                    <AddProduct/>
                </Route>

                <Route path="/firojahadmin/Sells">
                    <Sells/>
                </Route>

                <Route path="/firojahadmin/Reference">
                    <Reference/>
                </Route>

                <Route path="/firojahadmin/Transaction">
                    <Transaction/>
                </Route>

                <Route path="/firojahadmin/Daryafti">
                    <Daryafti/>
                </Route>

                <Route path="/firojahadmin/Success">
                   <Success/>
                </Route>

                <Route path="/firojahadmin/Failed">
                    <Failed/>
                </Route>

                <Route path="/firojahadmin/Support">
                    <Support/>
                </Route>

                <Route path="/firojahadmin/ConnectUs">
                    <ConnectUs/>
                </Route>

                <Route path="/firojahadmin/Photography">
                    <Photography/>
                </Route>

                <Route path="/firojahadmin/Questions">
                    <Questions/>
                </Route>

                <Route path="/firojahadmin/AddPage">
                    <AddPage/>
                </Route>

                <Route path="/firojahadmin/Footer">
                    <Footer/>
                </Route>

                <Route path="/firojahadmin/UserSetting">
                    <UserSetting/>
                </Route>

                <Route path="/firojahadmin/Subcategory">
                    <Subcategory/>
                </Route>

                <Route path="/firojahadmin/Item">
                    <Item/>
                </Route>

                <Route path="/firojahadmin/AddSheets">
                    <AddSheets/>
                </Route>

                <Route path="/firojahadmin/Tickets">
                    <Tickets/>
                </Route>

                {/*<Route path="/">*/}
                {/*    <IndexBase/>*/}
                {/*</Route>*/}

            </Switch>










            {/*<Route exact path="/admin" component={Dashboard}/>*/}
        </Router>
    );
}

export default App;
