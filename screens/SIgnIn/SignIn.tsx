import { View, Text, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Button, Image, Input } from "react-native-elements";
import { Formik } from "formik";
import styles from "./style";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { SignupScreenProps } from "./types";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  const navigation = useNavigation<SignupScreenProps>();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.logincontainer}>
      <StatusBar style="light" />

      <Image
        source={require("../../assets/logo.png")}
        style={{ height: 100, width: 100 }}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={loginValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Input
                autoFocus
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <Input
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <Button
              /* onPress={handleSubmit} */ title="Login"
              containerStyle={styles.button}
            />

            <Button
              onPress={() => navigation.navigate("SignUp")}
              title="Register"
              containerStyle={styles.button}
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
