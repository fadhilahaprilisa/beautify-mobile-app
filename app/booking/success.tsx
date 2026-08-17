import { useRouter } from 'expo-router';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BookingSuccessScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.title}>
        Booking Successful!
      </Text>

      <Text style={styles.description}>
        Booking kamu berhasil dibuat. Makeup artist akan
        menghubungi kamu untuk konfirmasi.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.buttonText}>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFE5EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 48,
    fontWeight: '700',
    color: '#E91E63',
  },

  title: {
    marginTop: 25,
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
  },

  description: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 22,
    color: '#777',
    textAlign: 'center',
  },

  button: {
    marginTop: 35,
    width: '100%',
    height: 54,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});