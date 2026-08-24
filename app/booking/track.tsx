import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TrackMUAScreen() {
  const router = useRouter();

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

          <Text style={styles.headerTitle}>Track MUA</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* STATUS */}
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Text style={styles.statusEmoji}>🚗</Text>
          </View>

          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>
              MUA is on the way
            </Text>

            <Text style={styles.statusSubtitle}>
              Alya Makeup Artist sedang menuju lokasi kamu.
            </Text>
          </View>
        </View>

        {/* ETA */}
        <View style={styles.etaCard}>
          <Text style={styles.etaLabel}>Estimated Arrival</Text>

          <Text style={styles.etaTime}>15–20 min</Text>

          <Text style={styles.etaDescription}>
            Perkiraan waktu kedatangan MUA
          </Text>
        </View>

        {/* PROGRESS */}
        <Text style={styles.sectionTitle}>Booking Status</Text>

        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={styles.dotActive}>
                <Text style={styles.check}>✓</Text>
              </View>

              <View style={styles.line} />
            </View>

            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>
                Booking Confirmed
              </Text>

              <Text style={styles.timelineText}>
                Booking kamu sudah dikonfirmasi.
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={styles.dotActive}>
                <Text style={styles.check}>✓</Text>
              </View>

              <View style={styles.line} />
            </View>

            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>
                MUA On The Way
              </Text>

              <Text style={styles.timelineText}>
                MUA sedang menuju lokasi.
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={styles.dotInactive} />
            </View>

            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitleInactive}>
                Arrived
              </Text>

              <Text style={styles.timelineText}>
                MUA akan memberi tahu saat sudah tiba.
              </Text>
            </View>
          </View>
        </View>

        {/* MUA INFO */}
        <Text style={styles.sectionTitle}>Your MUA</Text>

        <View style={styles.muaCard}>
          <View style={styles.muaAvatar}>
            <Text style={styles.muaEmoji}>💄</Text>
          </View>

          <View style={styles.muaInfo}>
            <Text style={styles.muaName}>
              Alya Makeup Artist
            </Text>

            <Text style={styles.muaLocation}>
              📍 Jakarta Selatan
            </Text>

            <Text style={styles.muaRating}>
              ⭐ 4.9 · 128 reviews
            </Text>
          </View>
        </View>

        {/* DESTINATION */}
        <Text style={styles.sectionTitle}>Destination</Text>

        <View style={styles.destinationCard}>
          <Text style={styles.destinationIcon}>📍</Text>

          <View style={styles.destinationInfo}>
            <Text style={styles.destinationTitle}>
              Your Location
            </Text>

            <Text style={styles.destinationText}>
              Booking location
            </Text>
          </View>
        </View>

        {/* CONTACT */}
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactIcon}>💬</Text>
          <Text style={styles.contactText}>
            Contact MUA
          </Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
  },

  content: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },

  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },

  headerSpace: {
    width: 42,
  },

  statusCard: {
    backgroundColor: '#FFE5EF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusEmoji: {
    fontSize: 27,
  },

  statusInfo: {
    flex: 1,
    marginLeft: 14,
  },

  statusTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E91E63',
  },

  statusSubtitle: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#777',
  },

  etaCard: {
    marginTop: 15,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  etaLabel: {
    fontSize: 12,
    color: '#888',
  },

  etaTime: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: '#E91E63',
  },

  etaDescription: {
    marginTop: 3,
    fontSize: 11,
    color: '#999',
  },

  sectionTitle: {
    marginTop: 25,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  timeline: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },

  timelineItem: {
    flexDirection: 'row',
    minHeight: 70,
  },

  timelineLeft: {
    width: 30,
    alignItems: 'center',
  },

  dotActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotInactive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E5E5E5',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#F4B7CC',
    marginVertical: 3,
  },

  timelineContent: {
    flex: 1,
    marginLeft: 12,
  },

  timelineTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  timelineTitleInactive: {
    fontSize: 14,
    fontWeight: '700',
    color: '#999',
  },

  timelineText: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 17,
    color: '#999',
  },

  muaCard: {
    padding: 15,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  muaAvatar: {
    width: 65,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#F7DCE3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  muaEmoji: {
    fontSize: 30,
  },

  muaInfo: {
    marginLeft: 13,
  },

  muaName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
  },

  muaLocation: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },

  muaRating: {
    marginTop: 5,
    fontSize: 11,
    color: '#999',
  },

  destinationCard: {
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  destinationIcon: {
    fontSize: 25,
  },

  destinationInfo: {
    marginLeft: 12,
  },

  destinationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  destinationText: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },

  contactButton: {
    height: 52,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactIcon: {
    fontSize: 18,
  },

  contactText: {
    marginLeft: 8,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});