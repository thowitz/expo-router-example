import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Inbox" }} />
      <Tabs.Screen name="lobby" options={{ title: "Lobby" }} />
    </Tabs>
  );
}
