import { StyleSheet, View, type ImageSourcePropType } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import { ImageViewer } from "@/components/image-viewer";

const PlaceholderImage =
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("@/assets/images/background-image.png") as ImageSourcePropType;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});

registerRootComponent(App);
