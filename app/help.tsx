import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const questions = [
  {
    question: 'How do I book a makeup artist?',
    answer:
      'Choose a beauty artist, open their profile, then tap Book Now.',
  },
  {
    question: 'How do I save a favorite MUA?',
    answer:
      'Open an MUA profile and tap the favorite button.',
  },
  {
    question: 'Where can I see my booking?',
    answer:
      'Open your Profile and choose My Booking.',
  },
  {
    question: 'Can I change my booking?',
    answer:
      'For this prototype, booking information is displayed as dummy data.',
  },
];

export default function HelpScreen() {
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

          <Text style={styles.headerTitle}>
            Help & Support
          </Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.title}>
          How can we help? 💗
        </Text>

        <Text style={styles.subtitle}>
          Find answers to common questions about Beautify.
        </Text>

        <View style={styles.list}>
          {questions.map((item, index) => (
            <View
              key={index}
              style={styles.questionCard}
            >
              <Text style={styles.question}>
                {item.question}
              </Text>

              <Text style={styles.answer}>
                {item.answer}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactIcon}>💬</Text>

          <Text style={styles.contactTitle}>
            Need more help?
          </Text>

          <Text style={styles.contactText}>
            Contact Beautify support for further assistance.
          </Text>

          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>
              Contact Support
            </Text>
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

  subtitle: {
    marginTop: 7,
    fontSize: 13,
    color: '#777',
  },

  list: {
    marginTop: 22,
  },

  questionCard: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
  },

  question: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  answer: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 19,
    color: '#777',
  },

  contactCard: {
    marginTop: 15,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#FFE5EF',
    alignItems: 'center',
  },

  contactIcon: {
    fontSize: 30,
  },

  contactTitle: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },

  contactText: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: '#777',
    textAlign: 'center',
  },

  contactButton: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#E91E63',
  },

  contactButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});