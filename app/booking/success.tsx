import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function BookingSuccessScreen() {
  const router = useRouter();

  const {
    muaName,
    date,
    time,
    customerName,
  } = useLocalSearchParams();

  useEffect(() => {
    saveBooking();
  }, []);

  const saveBooking = async () => {
    try {
      const existingBookings =
        await AsyncStorage.getItem('bookings');

      const bookings = existingBookings
        ? JSON.parse(existingBookings)
        : [];

      const newBooking = {
        id: Date.now().toString(),
        muaName,
        date,
        time,
        customerName,
        status: 'Confirmed',
      };

      bookings.push(newBooking);

      await AsyncStorage.setItem(
        'bookings',
        JSON.stringify(bookings)
      );
    } catch (error) {
      console.log('Failed to save booking:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>

      <Text style={styles.title}>
        Booking Successful!
      </Text>

      <Text style={styles.subtitle}>
        Your beauty appointment has been confirmed.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Makeup Artist
        </Text>

        <Text style={styles.value}>
          {muaName}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>
          Date
        </Text>

        <Text style={styles.value}>
          {date}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>
          Time
        </Text>

        <Text style={styles.value}>
          {time}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>
          Customer
        </Text>

        <Text style={styles.value}>
          {customerName}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() =>
          router.replace('/(tabs)' as any)
        }
      >
        <Text style={styles.homeButtonText}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  checkIcon: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '700',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },

  label: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 14,
  },

  homeButton: {
    width: '100%',
    backgroundColor: '#E91E63',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 25,
  },

  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});