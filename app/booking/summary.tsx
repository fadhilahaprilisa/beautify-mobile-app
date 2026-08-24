import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BookingSummaryScreen() {
  const router = useRouter();

  const {
    muaName,
    date,
    time,
    customerName,
    phone,
    note,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Booking Summary
        </Text>

        <View style={{ width: 42 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Review Your Booking
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

          <View style={styles.divider} />

          <Text style={styles.label}>
            Phone
          </Text>
          <Text style={styles.value}>
            {phone}
          </Text>

          {note ? (
            <>
              <View style={styles.divider} />

              <Text style={styles.label}>
                Notes
              </Text>

              <Text style={styles.value}>
                {note}
              </Text>
            </>
          ) : null}
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            router.push({
              pathname: '/booking/success',
              params: {
                muaName: muaName as string,
                date: date as string,
                time: time as string,
                customerName: customerName as string,
              },
            } as any)
          }
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    fontSize: 32,
    color: '#333',
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
    fontSize: 23,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
  },

  card: {
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

  confirmButton: {
    backgroundColor: '#E91E63',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 25,
  },

  confirmText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});