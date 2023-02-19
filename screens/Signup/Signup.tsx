import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Button, Input, Text } from "react-native-elements";
import styles from "./style";
import * as yup from "yup";

const Signup = () => {
  const SignUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, ({ min }) => `Name must be at least ${min} characters`)
      .required("Name is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.logincontainer}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>
      <Formik
        initialValues={{ name: "", email: "", password: "", imageUrl: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignUpValidationSchema}
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
                placeholder="Full Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.name}
                </Text>
              )}
              <Input
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
              <Input
                placeholder="Profile Picture Image Url (optional)"
                onChangeText={handleChange("imageUrl")}
                value={values.imageUrl}
              />
            </View>

            <Button
              // onPress={() => navigation.navigate("SignUp")}
              title="Register"
              containerStyle={styles.button}
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Signup;
