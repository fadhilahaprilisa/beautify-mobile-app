import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BookingScreen() {
  const router = useRouter();

  const { mua, price } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Booking</Text>

        <View style={{ width: 42 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Book Your Makeup</Text>

        <Text style={styles.subtitle}>
          Lengkapi detail booking kamu
        </Text>

        <View style={styles.muaCard}>
          <Text style={styles.label}>Makeup Artist</Text>

          <Text style={styles.muaName}>
            {mua || 'Alya Makeup Artist'}
          </Text>

          <Text style={styles.price}>
            {price || 'Rp350.000'}
          </Text>
        </View>

        <Text style={styles.inputLabel}>Your Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan nama"
          placeholderTextColor="#999"
        />

        <Text style={styles.inputLabel}>Date</Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: 20 Agustus 2026"
          placeholderTextColor="#999"
        />

        <Text style={styles.inputLabel}>Location</Text>

        <TextInput
          style={[styles.input, styles.locationInput]}
          placeholder="Masukkan alamat acara"
          placeholderTextColor="#999"
          multiline
        />

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push('/booking/success')}
        >
          <Text style={styles.confirmText}>
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
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

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#777',
  },

  muaCard: {
    marginTop: 24,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#FFE5EF',
  },

  label: {
    fontSize: 12,
    color: '#888',
  },

  muaName: {
    marginTop: 6,
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },

  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#E91E63',
  },

  inputLabel: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  input: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    color: '#333',
  },

  locationInput: {
    height: 90,
    paddingTop: 15,
    textAlignVertical: 'top',
  },

  confirmButton: {
    marginTop: 30,
    height: 54,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});