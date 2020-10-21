import React, { useState, useEffect } from "react";
import { View, TextInput, KeyboardAvoidingView, Text } from "react-native";
import { container, headerAlignments, buttonSizes } from "@assets/styles";
import { saveNewUser } from "@utils/helpers.js";
import Header from "@components/atoms/login/header";

export default function FormScreen({ navigation, route }) {
  const { userData } = route.params;
  const [username, setUsername] = useState("");
  const [valid, setValid] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(userData.email);

  useEffect(() => {
    if (username !== "") {
      setDuplicate(false);
      setValid(true);
    } else {
      setValid(false);
    }
  });

  return (
    <KeyboardAvoidingView
      style={[container, { backgroundColor: "#100D38" }]}
      behavior="padding"
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Header
          headerText="Create"
          subheadline="Fill out your account details"
          alignment={headerAlignments.center}
        ></Header>
      </View>

      <View style={{ flex: 2, justifyContent: "space-evenly" }}>
        <View>
          {duplicate && (
            <Text style={{ color: "red", fontSize: 15 }}>
              This username is already taken
            </Text>
          )}
          <TextInput
            style={{
              height: 40,
              color: "white",
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              width: 300,
            }}
            placeholder="Username - required"
            placeholderTextColor="white"
            value={username}
            onChangeText={(username) => {
              setUsername(username);
            }}
            label="Username"
          />
        </View>
        <TextInput
          style={{
            height: 40,
            color: "white",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: 300,
          }}
          placeholder="First Name - optional"
          placeholderTextColor="white"
          onChangeText={(firstName) => {
            setFirstName(firstName);
          }}
          label="First Name"
          autoCompleteType="name"
          value={firstName}
        />

        <TextInput
          style={{
            height: 40,
            color: "white",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: 300,
          }}
          placeholder="Last Name - optional"
          placeholderTextColor="white"
          onChangeText={(lastName) => {
            setLastName(lastName);
          }}
          label="Last Name"
          autoCompleteType="name"
          value={lastName}
        />

        <TextInput
          style={{
            height: 40,
            color: "white",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: 300,
          }}
          placeholder="Email - optional"
          placeholderTextColor="white"
          onChangeText={(email) => {
            setEmail(email);
          }}
          label="Email"
          autoCompleteType="email"
        />
      </View>

      {valid && (
        <View style={{ flex: 1 }}>
          <TouchButton
            _onPress={async () => {
              try {
                await saveNewUser(
                  username,
                  email,
                  firstName,
                  lastName,
                  userData.authId
                );
                navigation.navigate("Tabs", { screen: "Home" });
              } catch (error) {
                console.log(error);
                if (error === 409) {
                  setDuplicate(true);
                }
              }
            }}
            title={"Done"}
            color={"blue"}
            size={buttonSizes.medium}
            radius={10}
            textColor={"white"}
          />
        </View>
      )}

      {!valid && (
        <View style={{ flex: 1 }}>
          <TouchButton
            _onPress={async () => {}}
            title={"Done"}
            color={"grey"}
            size={buttonSizes.medium}
            radius={10}
            textColor={"white"}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
