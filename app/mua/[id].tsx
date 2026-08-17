import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MUA_DATA } from '@/data/muaData';

export default function MUADetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  const mua = MUA_DATA.find((item) => item.id === id);

  useEffect(() => {
    checkFavorite();
  }, [id]);

  const checkFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');

      if (favorites) {
        const favoriteIds: string[] = JSON.parse(favorites);
        setIsFavorite(favoriteIds.includes(String(id)));
      }
    } catch (error) {
      console.log('Error checking favorite:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');

      let favoriteIds: string[] = favorites
        ? JSON.parse(favorites)
        : [];

      if (favoriteIds.includes(String(id))) {
        favoriteIds = favoriteIds.filter(
          (favoriteId) => favoriteId !== String(id)
        );
        setIsFavorite(false);
      } else {
        favoriteIds.push(String(id));
        setIsFavorite(true);
      }

      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify(favoriteIds)
      );
    } catch (error) {
      console.log('Error updating favorite:', error);
    }
  };

  if (!mua) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTitle}>
          MUA tidak ditemukan
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <Text style={styles.headerButtonText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>MUA Detail</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={toggleFavorite}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={{ uri: mua.image }}
        style={styles.image}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{mua.name}</Text>

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

        {/* Category */}
        <View style={styles.categoryContainer}>
          {mua.category.map((category) => (
            <View
              key={category}
              style={styles.categoryBadge}
            >
              <Text style={styles.categoryText}>
                {category}
              </Text>
            </View>
          ))}
        </View>

        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>
            Starting from
          </Text>

          <Text style={styles.price}>
            {mua.priceLabel}
          </Text>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>
          About
        </Text>

        <Text style={styles.description}>
          {mua.description}
        </Text>

        {/* Book Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            router.push({
              pathname: '/booking',
              params: {
                muaId: mua.id,
                muaName: mua.name,
              },
            } as any)
          }
        >
          <Text style={styles.bookButtonText}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerButtonText: {
    fontSize: 32,
    color: '#333333',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },

  favoriteIcon: {
    fontSize: 28,
    color: '#E91E63',
  },

  image: {
    width: '100%',
    height: 300,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
  },

  location: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 12,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  rating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },

  reviews: {
    fontSize: 14,
    color: '#777777',
    marginLeft: 6,
  },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  categoryBadge: {
    backgroundColor: '#FCE4EC',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  categoryText: {
    color: '#B75B74',
    fontSize: 13,
    fontWeight: '600',
  },

  priceContainer: {
    backgroundColor: '#FFF5F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },

  priceLabel: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },

  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#E91E63',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#666666',
    marginBottom: 30,
  },

  bookButton: {
    backgroundColor: '#E91E63',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
  },

  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  notFoundTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: '#E91E63',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});