// screens/MiddleScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomBottomSheet from '../components/CustomBottomSheet';

const MiddleScreen = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const handleOpenSheet = () => {
        setBottomSheetVisible(true);
    };

    const handleCloseSheet = () => {
        setBottomSheetVisible(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Open Bottom Sheet" onPress={handleOpenSheet} />
            {isBottomSheetVisible && <CustomBottomSheet isVisible={isBottomSheetVisible} onClose={handleCloseSheet} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MiddleScreen;
