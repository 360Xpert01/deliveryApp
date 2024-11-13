// NotificationScreen.js
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNotifications } from '../../api/notificationAPI';

const NotificationScreen = () => {
  const { data: notifications, isLoading, error } = useNotifications();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading notifications</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.message}</Text>}
    />
  );
};

export default NotificationScreen;
