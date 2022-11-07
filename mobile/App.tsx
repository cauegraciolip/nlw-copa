// STYLE
import { THEME } from "./src/styles/theme";

//LIBRARIES
import { NativeBaseProvider, StatusBar } from "native-base";
import { AuthContextProvider } from "./src/context/AuthContext";

//NATIVE-BASE
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//COMPONENTS
import { Loading } from "./src/components/Loading";

import { SignIn } from "./src/screens/SignIn";
import { New } from "./src/screens/New";
import { Find } from "./src/screens/Find";
import { Pools } from "./src/screens/Pools";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
