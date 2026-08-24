import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Settings</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.title}>App Settings</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>
                Notifications
              </Text>

              <Text style={styles.rowSubtitle}>
                Receive booking and beauty updates
              </Text>
            </View>

            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{
                false: '#DDD',
                true: '#F2B8C6',
              }}
              thumbColor={
                notifications ? '#E91E63' : '#FFFFFF'
              }
            />
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>
                Account
              </Text>

              <Text style={styles.rowSubtitle}>
                Manage your profile information
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <View>
              <Text style={styles.rowTitle}>
                Privacy
              </Text>

              <Text style={styles.rowSubtitle}>
                Manage privacy preferences
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 34,
    color: '#333',
    marginTop: -4,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  headerSpace: {
    width: 42,
  },

  title: {
    marginTop: 25,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: '800',
    color: '#292124',
  },

  card: {
    paddingHorizontal: 17,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
  },

  row: {
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  rowSubtitle: {
    marginTop: 5,
    fontSize: 11,
    color: '#999',
  },

  divider: {
    height: 1,
    backgroundColor: '#F3F3F3',
  },

  arrow: {
    fontSize: 28,
    color: '#B75B74',
  },
});