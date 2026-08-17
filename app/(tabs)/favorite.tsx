import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MUA_DATA } from '@/data/muaData';

export default function FavoriteScreen() {
  const router = useRouter();

  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');

      if (favorites) {
        setFavoriteIds(JSON.parse(favorites));
      } else {
        setFavoriteIds([]);
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
    favoriteIds.includes(mua.id)
  );

  const removeFavorite = async (id: string) => {
    try {
      const updatedFavorites = favoriteIds.filter(
        (favoriteId) => favoriteId !== id
      );

      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify(updatedFavorites)
      );

      setFavoriteIds(updatedFavorites);
    } catch (error) {
      console.log('Error removing favorite:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Favorites ❤️</Text>

        <Text style={styles.subtitle}>
          Your favorite beauty artists
        </Text>
      </View>

      {favoriteMUA.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>♡</Text>

          <Text style={styles.emptyTitle}>
            No Favorites Yet
          </Text>

          <Text style={styles.emptyText}>
            Kamu belum memiliki MUA favorit.
          </Text>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.exploreButtonText}>
              Explore MUA
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.listContainer}>
          {favoriteMUA.map((mua) => (
            <TouchableOpacity
              key={mua.id}
              style={styles.card}
              onPress={() =>
                router.push(`/mua/${mua.id}` as any)
              }
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: mua.image }}
                style={styles.image}
              />

              <View style={styles.cardContent}>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>
                    {mua.name}
                  </Text>

                  <TouchableOpacity
                    onPress={() => removeFavorite(mua.id)}
                  >
                    <Text style={styles.heart}>
                      ♥
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.location}>
                  📍 {mua.location}
                </Text>

                <View style={styles.infoRow}>
                  <Text style={styles.rating}>
                    ⭐ {mua.rating}
                  </Text>

                  <Text style={styles.reviews}>
                    ({mua.reviews} reviews)
                  </Text>
                </View>

                <Text style={styles.price}>
                  {mua.priceLabel}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginTop: 5,
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    padding: 10,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  image: {
    width: 105,
    height: 120,
    borderRadius: 12,
  },

  cardContent: {
    flex: 1,
    paddingLeft: 12,
    paddingVertical: 5,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
    marginRight: 8,
  },

  heart: {
    fontSize: 24,
    color: '#E91E63',
  },

  location: {
    fontSize: 13,
    color: '#777777',
    marginTop: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },

  reviews: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 5,
  },

  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E91E63',
    marginTop: 8,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 100,
  },

  emptyIcon: {
    fontSize: 70,
    color: '#E91E63',
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginTop: 15,
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    marginTop: 8,
    textAlign: 'center',
  },

  exploreButton: {
    backgroundColor: '#E91E63',
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 25,
  },

  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});