// components/CustomBottomSheet.js
import React, { useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({ isVisible, onClose }) => {
    const bottomSheetRef = useRef(null);

    const snapPoints = ['25%', '50%', '100%'];

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={isVisible ? 0 : -1}
            snapPoints={snapPoints}
            onClose={onClose}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.contentTitle}>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={onClose} style={styles.button}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#CE82FF',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default CustomBottomSheet;
