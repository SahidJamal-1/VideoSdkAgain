/**
 * @format
 */

import { AppRegistry, StatusBar } from "react-native";
import { register } from "@videosdk.live/react-native-sdk";
import App from "./App";
import AnotherMeet from "./AnotherMeet";
import { name as appName } from "./app.json";
import colors from "./src/styles/colors";

StatusBar.setBackgroundColor(colors.primary[900]);

// Register the service
register();

AppRegistry.registerComponent(appName, () => App);
