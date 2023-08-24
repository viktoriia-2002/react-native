import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const CustomInput = ({
  onChange,
  value,
  secureTextEntry,
  placeholder,
  autoComplete,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputWrapper, isFocused && styles.focusedInput]}>
      <TextInput
        style={[styles.input, isFocused && styles.focusedInputText]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !passwordVisible}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={autoComplete}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={togglePasswordVisibility}
        >
          <Text style={styles.toggleButtonText}>
            {passwordVisible ? "Скрити" : "Показати"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 2,
    marginBottom: 16,
    position: "relative",
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    fontSize: 16,
  },
  focusedInputText: {
    backgroundColor: "white",
    borderColor: "#FF6C00",
  },
  toggleButton: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  toggleButtonText: {
    color: "#1B4371",
    fontSize: 16,
  },
});

export default CustomInput;
