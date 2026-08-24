import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const initialNotifications = [
  {
    id: 1,
    icon: '💄',
    title: 'Booking Confirmed',
    message:
      'Your booking with Alya Makeup Artist has been confirmed.',
    time: '10 minutes ago',
    unread: true,
  },
  {
    id: 2,
    icon: '💗',
    title: 'New Favorite',
    message:
      'Alya Makeup Artist is now saved to your favorites.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    icon: '🎉',
    title: 'Special Offer',
    message:
      'Get special beauty deals for your upcoming event.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Review Reminder',
    message:
      'How was your beauty experience? Leave a review.',
    time: '2 days ago',
    unread: false,
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, unread: false }
          : item
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              Notifications
            </Text>

            {unreadCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {unreadCount}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.headerSpace} />
        </View>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.title}>
            Stay Updated ✨
          </Text>

          <Text style={styles.subtitle}>
            Keep track of your bookings, offers, and beauty
            updates.
          </Text>
        </View>

        {/* MARK ALL */}
        {unreadCount > 0 && (
          <TouchableOpacity
            style={styles.markAllButton}
            onPress={markAllAsRead}
          >
            <Text style={styles.markAllText}>
              Mark all as read
            </Text>
          </TouchableOpacity>
        )}

        {/* NOTIFICATIONS */}
        <View style={styles.list}>
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                notification.unread &&
                  styles.notificationUnread,
              ]}
              activeOpacity={0.8}
              onPress={() =>
                markAsRead(notification.id)
              }
            >
              {/* ICON */}
              <View style={styles.iconContainer}>
                <Text style={styles.notificationIcon}>
                  {notification.icon}
                </Text>
              </View>

              {/* CONTENT */}
              <View style={styles.notificationContent}>
                <View style={styles.titleRow}>
                  <Text style={styles.notificationTitle}>
                    {notification.title}
                  </Text>

                  {notification.unread && (
                    <View style={styles.unreadDot} />
                  )}
                </View>

                <Text style={styles.message}>
                  {notification.message}
                </Text>

                <Text style={styles.time}>
                  {notification.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* EMPTY STATE */}
        {notifications.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔔</Text>

            <Text style={styles.emptyTitle}>
              No notifications
            </Text>

            <Text style={styles.emptyTitle}>
  You&apos;re all caught up!
</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
  },

  content: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },

  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 34,
    color: '#333',
    marginTop: -4,
  },

  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    marginLeft: 7,
    paddingHorizontal: 6,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  headerSpace: {
    width: 42,
  },

  intro: {
    marginTop: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#292124',
  },

  subtitle: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 20,
    color: '#777',
  },

  markAllButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: '#FFE5EF',
  },

  markAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B75B74',
  },

  list: {
    marginTop: 15,
  },

  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
  },

  notificationUnread: {
    backgroundColor: '#FFF0F5',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFE5EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationIcon: {
    fontSize: 22,
  },

  notificationContent: {
    flex: 1,
    marginLeft: 13,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#292124',
    flex: 1,
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E91E63',
    marginLeft: 8,
  },

  message: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#777',
  },

  time: {
    marginTop: 7,
    fontSize: 10,
    color: '#AAAAAA',
  },

  emptyContainer: {
    marginTop: 40,
    padding: 35,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 40,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },

  emptyText: {
    marginTop: 5,
    fontSize: 13,
    color: '#999',
  },
});