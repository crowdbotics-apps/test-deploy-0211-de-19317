import { createStackNavigator } from "react-navigation-stack";

import LoginSignup from "./screens";
import PasswordReset from "./screens/reset";
import UserDemo from "./screens/redirect-demo";

export default LoginSignupBlueprintNavigator = createStackNavigator(
  {
    LoginSignup: {
      screen: LoginSignup.navigator
    },
    PasswordReset,
    UserDemo,
  },
  {
    initialRouteName: "LoginSignup",
    defaultNavigationOptions: ({ navigation }) => ({ header: null }),
  }
);
