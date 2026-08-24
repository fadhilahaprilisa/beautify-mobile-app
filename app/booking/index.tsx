import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function BookingScreen() {
  const router = useRouter();

  const { muaId, muaName } = useLocalSearchParams();

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const generateDates = () => {
    const dates = [];

    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      dates.push({
        day: date.toLocaleDateString('en-US', {
          weekday: 'short',
        }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', {
          month: 'short',
        }),
        value: date.toISOString().split('T')[0],
      });
    }

    return dates;
  };

  const dates = generateDates();

  const times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const isFormComplete =
    selectedDate &&
    selectedTime &&
    customerName.trim() &&
    phone.trim();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Booking</Text>

        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        {/* MUA */}
        <Text style={styles.sectionTitle}>
          Makeup Artist
        </Text>

        <View style={styles.muaCard}>
          <Text style={styles.muaName}>
            {muaName}
          </Text>

          <Text style={styles.muaId}>
            MUA ID: {muaId}
          </Text>
        </View>

        {/* DATE */}
        <Text style={styles.sectionTitle}>
          Select Date
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dateScroll}
        >
          {dates.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.dateCard,
                selectedDate === item.value &&
                  styles.dateCardSelected,
              ]}
              onPress={() =>
                setSelectedDate(item.value)
              }
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDate === item.value &&
                    styles.selectedText,
                ]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.dateText,
                  selectedDate === item.value &&
                    styles.selectedText,
                ]}
              >
                {item.date}
              </Text>

              <Text
                style={[
                  styles.monthText,
                  selectedDate === item.value &&
                    styles.selectedText,
                ]}
              >
                {item.month}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* TIME */}
        <Text style={styles.sectionTitle}>
          Select Time
        </Text>

        <View style={styles.timeGrid}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeCard,
                selectedTime === time &&
                  styles.timeCardSelected,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time &&
                    styles.selectedText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CUSTOMER */}
        <Text style={styles.sectionTitle}>
          Customer Information
        </Text>

        <Text style={styles.inputLabel}>
          Full Name *
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={customerName}
          onChangeText={setCustomerName}
        />

        <Text style={styles.inputLabel}>
          Phone Number *
        </Text>

        <TextInput
          style={styles.input}
          placeholder="08xxxxxxxxxx"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.inputLabel}>
          Notes
        </Text>

        <TextInput
          style={[styles.input, styles.noteInput]}
          placeholder="Add notes for the MUA (optional)"
          placeholderTextColor="#999"
          multiline
          value={note}
          onChangeText={setNote}
        />

        {/* CONTINUE */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !isFormComplete &&
              styles.continueButtonDisabled,
          ]}
          disabled={!isFormComplete}
          onPress={() =>
            router.push({
              pathname: '/booking/summary',
              params: {
                muaId: muaId as string,
                muaName: muaName as string,
                date: selectedDate,
                time: selectedTime,
                customerName,
                phone,
                note,
              },
            } as any)
          }
        >
          <Text style={styles.continueButtonText}>
            Continue
          </Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
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
    backgroundColor: '#FFF8FB',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonText: {
    fontSize: 32,
    color: '#333',
    marginTop: -4,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },

  headerSpacer: {
    width: 42,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 14,
    marginTop: 8,
  },

  muaCard: {
    backgroundColor: '#FFE5EF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
  },

  muaName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E91E63',
  },

  muaId: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },

  dateScroll: {
    marginBottom: 10,
  },

  dateCard: {
    width: 72,
    height: 95,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  dateCardSelected: {
    backgroundColor: '#E91E63',
    borderColor: '#E91E63',
  },

  dayText: {
    fontSize: 12,
    color: '#777',
  },

  dateText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginVertical: 3,
  },

  monthText: {
    fontSize: 11,
    color: '#777',
  },

  selectedText: {
    color: '#FFFFFF',
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },

  timeCard: {
    width: '22%',
    minWidth: 70,
    paddingVertical: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  timeCardSelected: {
    backgroundColor: '#E91E63',
    borderColor: '#E91E63',
  },

  timeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    marginBottom: 7,
    marginTop: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: '#333',
  },

  noteInput: {
    height: 90,
    textAlignVertical: 'top',
  },

  continueButton: {
    backgroundColor: '#E91E63',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 25,
  },

  continueButtonDisabled: {
    backgroundColor: '#D9D9D9',
  },

  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});