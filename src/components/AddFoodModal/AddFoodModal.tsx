import { Button, Icon } from "@rneui/themed";
import React, { FC } from "react";
import { Modal, View, StyleSheet } from "react-native";

type AddFoodModalProps = {
    onClose: () => void;
    visible: boolean;
}

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {
    return (
        <Modal visible={visible} onRequestClose={onClose} transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Button
                        icon={<Icon name="close-circle-outline" />}
                        radius='lg'
                        color='#77dd77'
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    content: {

    },
});

export default AddFoodModal;