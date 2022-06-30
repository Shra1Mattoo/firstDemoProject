import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const prop = (props) => {
    return (
        <SafeAreaView>
            <Text>{props.data}</Text>
        </SafeAreaView>
    );
}
export default prop;