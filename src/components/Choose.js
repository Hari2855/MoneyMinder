import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "../screens/Styles";
import DropDownPicker from 'react-native-dropdown-picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Choose({ items, setItems, source, placeholder }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    return (
        <TouchableOpacity style={styles.scontainer}>
            <Image source={source} style={styles.cimg} />
            <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={placeholder}
                    placeholderStyle={{color: '#989899'}}
                    showTickIcon={false}
                    dropDownContainerStyle={{
                        backgroundColor: "#ffffff",
                        right: hp(5),
                        borderColor: '#989899',
                      }}
                    style={{
                        width: wp(80),
                        borderColor: '#ededed',
                        borderLeftWidth: 0
                    }}
                />
        </TouchableOpacity>
    )
}