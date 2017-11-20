import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";

export default (props) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator
                size="large"
                color="#1976D2" />
            <Text style={{ marginTop: 8 }}>読み込み中です・・・</Text>
        </View>
    );
};
