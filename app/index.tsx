import { Text, View } from "react-native";
import { Account, Client } from "react-native-appwrite";
import "react-native-url-polyfill/auto";

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('project-id')
    .setPlatform('my-app');

const account = new Account(client);

async function main() {
  console.log(await account.get());
}

export default function Index() {
  main();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
