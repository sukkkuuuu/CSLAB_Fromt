import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Mypage from "./components/Mypage";
import PasswordScreen from "./components/PasswordScreen";
import FindEmail from "./components/FindEmail";

// ... import all other pages

const Routes = [
    {
        name: "home",
        component: Home,
    },
    {
        name: "login",
        component: Login,
    },
    {
        name: "signup",
        component: Signup,
    },
    {
        name: "mypage",
        component: Mypage,
    },
    {
        name: "passwordscreen",
        component: PasswordScreen,
    },
    {
        name: "findemail",
        component: FindEmail,
    },
];

export default Routes;
