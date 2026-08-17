import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type MUA = {
  id: string;
  name: string;
  location: string;
  rating: string;
  reviews: string;
  price: string;
  image: string;
};

const MUA_DATA: MUA[] = [
  {
    id: 'alya',
    name: 'Alya Makeup Artist',
    location: 'Jakarta Selatan',
    rating: '4.9',
    reviews: '128 reviews',
    price: 'Rp350.000',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500',
  },
  {
    id: 'nadia',
    name: 'Nadia Beauty',
    location: 'Tangerang',
    rating: '4.8',
    reviews: '96 reviews',
    price: 'Rp300.000',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
  },
];

export default function FavoriteScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = async () => {
    try {
      const saved = await AsyncStorage.getItem('favorites');

      if (saved) {
        setFavorites(JSON.parse(saved));
      } else {
        setFavorites([]);
      }
    } catch (error) {
      console.log('Error loading favorites:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const favoriteMUA = MUA_DATA.filter((mua) =>
    favorites.includes(mua.id)
  );

  const removeFavorite = async (id: string) => {
    const updatedFavorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );

    setFavorites(updatedFavorites);

    await AsyncStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite</Text>

      <Text style={styles.subtitle}>
        MUA yang kamu simpan
      </Text>

      {favoriteMUA.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>♡</Text>

          <Text style={styles.emptyTitle}>
            Belum ada favorite
          </Text>

          <Text style={styles.emptyText}>
            Simpan MUA favoritmu untuk menemukannya
            dengan mudah nanti.
          </Text>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/(tabs)' as any)}
          >
            <Text style={styles.exploreButtonText}>
              Explore MUA
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        favoriteMUA.map((mua) => (
          <TouchableOpacity
            key={mua.id}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              router.push(`/mua/${mua.id}` as any)
            }
          >
            <Image
              source={{ uri: mua.image }}
              style={styles.image}
            />

            <View style={styles.cardContent}>
              <Text style={styles.name}>{mua.name}</Text>

              <Text style={styles.location}>
                📍 {mua.location}
              </Text>

              <Text style={styles.rating}>
                ⭐ {mua.rating} ({mua.reviews})
              </Text>

              <Text style={styles.price}>
                {mua.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.heartButton}
              onPress={() => removeFavorite(mua.id)}
            >
              <Text style={styles.heart}>♥</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 14,
    color: '#777',
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: -80,
  },

  emptyIcon: {
    fontSize: 70,
    color: '#E91E63',
  },

  emptyTitle: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },

  emptyText: {
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 21,
    fontSize: 14,
    color: '#888',
  },

  exploreButton: {
    marginTop: 25,
    paddingHorizontal: 25,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  card: {
    minHeight: 125,
    marginBottom: 15,
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 14,
  },

  cardContent: {
    flex: 1,
    marginLeft: 13,
    paddingTop: 2,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  location: {
    marginTop: 7,
    fontSize: 12,
    color: '#777',
  },

  rating: {
    marginTop: 6,
    fontSize: 12,
    color: '#555',
  },

  price: {
    marginTop: 7,
    fontSize: 14,
    fontWeight: '700',
    color: '#E91E63',
  },

  heartButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heart: {
    fontSize: 19,
    color: '#E91E63',
  },
});