import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();

  return <View style={styles.container}></View>;
};

export default Popularjobs;
