import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

import { Image, Platform, Pressable, StyleSheet } from "react-native";
import { Box } from "../../components";

interface AvartarUploadProps {
  setResultImage: (uri: any) => void;
}

const AvartarUpload = ({ setResultImage }: AvartarUploadProps) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setResultImage(result);
      setImage(result.uri);
    }
  };
  return (
    <Box alignItems="center" padding="m">
      <Pressable onPress={pickImage}>
        <Box
          padding="xl"
          width={150}
          height={150}
          borderRadius="xl"
          backgroundColor="primary"
          overflow="hidden"
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              }}
            />
          ) : (
            <Image
              source={require("./../../../assets/avatar.png")}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              }}
            />
          )}
        </Box>
      </Pressable>
      <Box
        padding="s"
        borderRadius="xl"
        alignItems="center"
        backgroundColor="lightGray"
        width={35}
        height={35}
        overflow="hidden"
        position="absolute"
        bottom={0}
      >
        <Feather name="camera" size={18} />
      </Box>
    </Box>
  );
};

export default AvartarUpload;
