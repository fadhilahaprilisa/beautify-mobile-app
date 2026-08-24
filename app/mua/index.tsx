import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const muaData = [
  {
    id: 'alya',
    name: 'Alya Makeup Artist',
    location: 'Jakarta Selatan',
    rating: '4.9',
    reviews: '128',
    price: 'Rp350.000',
    category: 'Makeup',
    emoji: '💄',
  },
  {
    id: 'nadia',
    name: 'Nadia Beauty',
    location: 'Tangerang',
    rating: '4.8',
    reviews: '96',
    price: 'Rp300.000',
    category: 'Makeup',
    emoji: '💋',
  },
];

export default function MUAListScreen() {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const filteredMUA = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) {
      return muaData;
    }

    return muaData.filter(
      (mua) =>
        mua.name.toLowerCase().includes(keyword) ||
        mua.location.toLowerCase().includes(keyword) ||
        mua.category.toLowerCase().includes(keyword)
    );
  }, [search]);

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

          <Text style={styles.headerTitle}>
            Popular MUA
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* INTRO */}
        <Text style={styles.title}>
          Find Your Beauty Artist
        </Text>

        <Text style={styles.subtitle}>
          Discover makeup artists and beauty professionals
          for your special moment.
        </Text>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search makeup artist..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />

          {search.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearch('')}
            >
              <Text style={styles.clearText}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* RESULT */}
        <View style={styles.resultHeader}>
          <Text style={styles.sectionTitle}>
            Beauty Artists
          </Text>

          <Text style={styles.resultCount}>
            {filteredMUA.length} found
          </Text>
        </View>

        {/* MUA LIST */}
        {filteredMUA.length > 0 ? (
          filteredMUA.map((mua) => (
            <TouchableOpacity
              key={mua.id}
              style={styles.muaCard}
              activeOpacity={0.8}
              onPress={() =>
                router.push(`/mua/${mua.id}` as any)
              }
            >
              {/* IMAGE */}
              <View style={styles.muaImage}>
                <Text style={styles.muaEmoji}>
                  {mua.emoji}
                </Text>

                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>
                    ✓
                  </Text>
                </View>
              </View>

              {/* INFO */}
              <View style={styles.muaInfo}>
                <Text style={styles.muaName}>
                  {mua.name}
                </Text>

                <Text style={styles.location}>
                  📍 {mua.location}
                </Text>

                <View style={styles.ratingRow}>
                  <Text style={styles.rating}>
                    ⭐ {mua.rating}
                  </Text>

                  <Text style={styles.reviews}>
                    ({mua.reviews} reviews)
                  </Text>
                </View>

                <Text style={styles.price}>
                  Start from {mua.price}
                </Text>
              </View>

              {/* ARROW */}
              <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>›</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>
              🔍
            </Text>

            <Text style={styles.emptyTitle}>
              MUA not found
            </Text>

            <Text style={styles.emptyText}>
              Coba cari nama MUA atau lokasi lainnya.
            </Text>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setSearch('')}
            >
              <Text style={styles.resetButtonText}>
                Reset Search
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 40 }} />
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
    lineHeight: 20,
    color: '#777',
  },

  searchContainer: {
    height: 52,
    marginTop: 22,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  searchIcon: {
    fontSize: 19,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },

  clearText: {
    fontSize: 24,
    color: '#B75B74',
  },

  resultHeader: {
    marginTop: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#292124',
  },

  resultCount: {
    fontSize: 12,
    color: '#999',
  },

  muaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  muaImage: {
    width: 100,
    height: 110,
    borderRadius: 14,
    backgroundColor: '#F7DCE3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  muaEmoji: {
    fontSize: 40,
  },

  verifiedBadge: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifiedText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  muaInfo: {
    flex: 1,
    marginLeft: 13,
    paddingRight: 5,
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

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  rating: {
    fontSize: 12,
    fontWeight: '700',
    color: '#555',
  },

  reviews: {
    marginLeft: 5,
    fontSize: 11,
    color: '#999',
  },

  price: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    color: '#B75B74',
  },

  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFF0F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    fontSize: 25,
    color: '#B75B74',
    marginTop: -2,
  },

  emptyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 35,
    alignItems: 'center',
  },

  emptyIcon: {
    fontSize: 35,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
  },

  resetButton: {
    marginTop: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#E91E63',
  },

  resetButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});