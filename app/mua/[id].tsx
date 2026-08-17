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

export default function MUADetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [isFavorite, setIsFavorite] = useState(false);

  const mua = {
    id: id || 'alya',
    name: id === 'alya' ? 'Alya Makeup Artist' : 'Nadia Beauty',
    location: id === 'alya' ? 'Jakarta Selatan' : 'Tangerang',
    rating: id === 'alya' ? '4.9' : '4.8',
    reviews: id === 'alya' ? '128' : '96',
    price: id === 'alya' ? 'Rp350.000' : 'Rp300.000',
    description:
      'Professional makeup artist yang siap membantu kamu tampil lebih cantik dan percaya diri untuk berbagai kebutuhan acara.',
  };

  // Cek apakah MUA sudah menjadi favorite
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const saved = await AsyncStorage.getItem('favorites');

        if (saved) {
          const favorites: string[] = JSON.parse(saved);

          setIsFavorite(favorites.includes(mua.id));
        }
      } catch (error) {
        console.log('Error checking favorite:', error);
      }
    };

    checkFavorite();
  }, [mua.id]);

  // Tambah / hapus favorite
  const toggleFavorite = async () => {
    try {
      const saved = await AsyncStorage.getItem('favorites');

      let favorites: string[] = saved ? JSON.parse(saved) : [];

      if (favorites.includes(mua.id)) {
        // Hapus dari favorite
        favorites = favorites.filter(
          (favoriteId) => favoriteId !== mua.id
        );

        setIsFavorite(false);
      } else {
        // Tambahkan ke favorite
        favorites.push(mua.id);

        setIsFavorite(true);
      }

      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify(favorites)
      );
    } catch (error) {
      console.log('Error updating favorite:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>MUA Detail</Text>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Text
              style={[
                styles.favoriteIcon,
                isFavorite && styles.favoriteActive,
              ]}
            >
              {isFavorite ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
            }}
            style={styles.profileImage}
          />
        </View>

        {/* Main Info */}
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{mua.name}</Text>

              <Text style={styles.location}>
                📍 {mua.location}
              </Text>
            </View>

            <View style={styles.ratingBox}>
              <Text style={styles.rating}>
                ★ {mua.rating}
              </Text>

              <Text style={styles.reviewCount}>
                {mua.reviews} reviews
              </Text>
            </View>
          </View>

          {/* Price */}
          <View style={styles.priceCard}>
            <Text style={styles.priceLabel}>
              Starting from
            </Text>

            <Text style={styles.price}>
              {mua.price}
            </Text>
          </View>

          {/* About */}
          <Text style={styles.sectionTitle}>About</Text>

          <Text style={styles.description}>
            {mua.description}
          </Text>

          {/* Services */}
          <Text style={styles.sectionTitle}>Services</Text>

          <View style={styles.services}>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>💄</Text>

              <Text style={styles.serviceName}>
                Makeup
              </Text>

              <Text style={styles.servicePrice}>
                {mua.price}
              </Text>
            </View>

            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>👰</Text>

              <Text style={styles.serviceName}>
                Bridal
              </Text>

              <Text style={styles.servicePrice}>
                Rp1.500.000
              </Text>
            </View>

            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>✨</Text>

              <Text style={styles.serviceName}>
                Party
              </Text>

              <Text style={styles.servicePrice}>
                Rp500.000
              </Text>
            </View>
          </View>

          {/* Reviews */}
          <Text style={styles.sectionTitle}>Reviews</Text>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>

              <View>
                <Text style={styles.reviewer}>
                  Amanda
                </Text>

                <Text style={styles.reviewStars}>
                  ★★★★★
                </Text>
              </View>
            </View>

            <Text style={styles.reviewText}>
              Makeup-nya bagus banget dan MUA-nya ramah.
              Hasilnya sesuai dengan request aku!
            </Text>
          </View>

          <View style={{ height: 110 }} />
        </View>
      </ScrollView>

      {/* Bottom Booking */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>
            Starting from
          </Text>

          <Text style={styles.bottomPrice}>
            {mua.price}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            router.push({
              pathname: '/booking' as any,
              params: {
                mua: mua.name,
                price: mua.price,
              },
            })
          }
        >
          <Text style={styles.bookButtonText}>
            Book Now
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
    backgroundColor: '#FFF8FB',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
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

  favoriteButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favoriteIcon: {
    fontSize: 27,
    color: '#E91E63',
  },

  favoriteActive: {
    color: '#E91E63',
  },

  imageContainer: {
    paddingHorizontal: 20,
  },

  profileImage: {
    width: '100%',
    height: 280,
    borderRadius: 24,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  nameContainer: {
    flex: 1,
    paddingRight: 10,
  },

  name: {
    fontSize: 23,
    fontWeight: '700',
    color: '#222',
  },

  location: {
    marginTop: 7,
    fontSize: 14,
    color: '#777',
  },

  ratingBox: {
    alignItems: 'flex-end',
  },

  rating: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E91E63',
  },

  reviewCount: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },

  priceCard: {
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFE5EF',
  },

  priceLabel: {
    fontSize: 12,
    color: '#888',
  },

  price: {
    marginTop: 4,
    fontSize: 22,
    fontWeight: '700',
    color: '#E91E63',
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },

  services: {
    flexDirection: 'row',
    gap: 10,
  },

  serviceCard: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },

  serviceIcon: {
    fontSize: 24,
  },

  serviceName: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
  },

  servicePrice: {
    marginTop: 5,
    fontSize: 11,
    color: '#888',
  },

  reviewCard: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },

  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFD3E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E91E63',
  },

  reviewer: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  reviewStars: {
    marginTop: 3,
    fontSize: 12,
    color: '#E91E63',
  },

  reviewText: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 20,
    color: '#666',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },

  bottomLabel: {
    fontSize: 11,
    color: '#888',
  },

  bottomPrice: {
    marginTop: 3,
    fontSize: 17,
    fontWeight: '700',
    color: '#E91E63',
  },

  bookButton: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#E91E63',
  },

  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});