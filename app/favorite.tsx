import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const favorites = [
  {
    id: 'alya',
    name: 'Alya Makeup Artist',
    location: 'Jakarta Selatan',
    rating: '4.9',
    price: 'Rp350.000',
    emoji: '💄',
  },
  {
    id: 'nadia',
    name: 'Nadia Beauty',
    location: 'Tangerang',
    rating: '4.8',
    price: 'Rp300.000',
    emoji: '💋',
  },
];

export default function FavoriteScreen() {
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
            Favorite MUA
          </Text>

          <View style={styles.headerSpace} />
        </View>

        <Text style={styles.title}>
          Your Favorite Artists
        </Text>

        {favorites.map((mua) => (
          <TouchableOpacity
            key={mua.id}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              router.push(`/mua/${mua.id}` as any)
            }
          >
            <View style={styles.image}>
              <Text style={styles.emoji}>{mua.emoji}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{mua.name}</Text>

              <Text style={styles.location}>
                📍 {mua.location}
              </Text>

              <Text style={styles.rating}>
                ⭐ {mua.rating}
              </Text>

              <Text style={styles.price}>
                Start from {mua.price}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 20,
    fontSize: 25,
    fontWeight: '800',
    color: '#292124',
  },

  card: {
    marginBottom: 15,
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 90,
    height: 95,
    borderRadius: 14,
    backgroundColor: '#F7DCE3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 35,
  },

  info: {
    flex: 1,
    marginLeft: 13,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#292124',
  },

  location: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
  },

  rating: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    color: '#555',
  },

  price: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '700',
    color: '#B75B74',
  },

  arrow: {
    fontSize: 30,
    color: '#B75B74',
  },
});