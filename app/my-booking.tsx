import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MyBookingScreen() {
  const router = useRouter();

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

          <Text style={styles.headerTitle}>My Booking</Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.title}>Your Bookings</Text>

        <View style={styles.bookingCard}>
          <View style={styles.image}>
            <Text style={styles.imageEmoji}>💄</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.muaName}>
              Alya Makeup Artist
            </Text>

            <Text style={styles.location}>
              📍 Jakarta Selatan
            </Text>

            <Text style={styles.date}>
              📅 24 August 2026
            </Text>

            <Text style={styles.status}>
              Confirmed
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Booking Details
        </Text>

        <View style={styles.detailCard}>
          <Text style={styles.detailRow}>
            Service: Makeup
          </Text>

          <Text style={styles.detailRow}>
            Starting price: Rp350.000
          </Text>

          <Text style={styles.detailRow}>
            Status: Confirmed
          </Text>
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
    fontSize: 25,
    fontWeight: '800',
    color: '#292124',
  },

  bookingCard: {
    marginTop: 20,
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },

  image: {
    width: 90,
    height: 95,
    borderRadius: 14,
    backgroundColor: '#F7DCE3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageEmoji: {
    fontSize: 35,
  },

  info: {
    flex: 1,
    marginLeft: 13,
    paddingTop: 4,
  },

  muaName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#292124',
  },

  location: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
  },

  date: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
  },

  status: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFE5EF',
    color: '#E91E63',
    fontSize: 11,
    fontWeight: '700',
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 19,
    fontWeight: '700',
    color: '#292124',
  },

  detailCard: {
    padding: 17,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
  },

  detailRow: {
    marginBottom: 10,
    fontSize: 13,
    color: '#666',
  },
});