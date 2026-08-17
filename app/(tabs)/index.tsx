import { MUA_DATA } from '@/data/muaData';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMUA = MUA_DATA.filter((mua) => {
    const matchesSearch =
      mua.name.toLowerCase().includes(search.toLowerCase()) ||
      mua.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === '' ||
      mua.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Beautiful! 👋</Text>

          <Text style={styles.headerSubtitle}>
            Find your perfect beauty service
          </Text>
        </View>

        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          placeholder="Search makeup artist..."
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* BANNER */}
      <View style={styles.banner}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerSmall}>
            BEAUTY FOR YOUR SPECIAL DAY
          </Text>

          <Text style={styles.bannerTitle}>
            Look Beautiful.{'\n'}Feel Confident.
          </Text>

          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>
              Explore Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CATEGORY */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <TouchableOpacity
          onPress={() => setSelectedCategory('')}
        >
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        <CategoryItem
          icon="💄"
          title="Makeup"
          selected={selectedCategory === 'Makeup'}
          onPress={() => handleCategoryPress('Makeup')}
        />

        <CategoryItem
          icon="💇‍♀️"
          title="Hair"
          selected={selectedCategory === 'Hair'}
          onPress={() => handleCategoryPress('Hair')}
        />

        <CategoryItem
          icon="💅"
          title="Nails"
          selected={selectedCategory === 'Nails'}
          onPress={() => handleCategoryPress('Nails')}
        />

        <CategoryItem
          icon="👰"
          title="Bridal"
          selected={selectedCategory === 'Bridal'}
          onPress={() => handleCategoryPress('Bridal')}
        />
      </ScrollView>

      {/* FILTER RESULT */}
      {(search.length > 0 || selectedCategory !== '') && (
        <View style={styles.searchResults}>
          <Text style={styles.searchResultTitle}>
            {selectedCategory
              ? `${selectedCategory} MUA`
              : 'Search Results'}
          </Text>

          {filteredMUA.length === 0 ? (
            <Text style={styles.noResult}>
              MUA tidak ditemukan
            </Text>
          ) : (
            filteredMUA.map((mua) => (
              <TouchableOpacity
                key={mua.id}
                style={styles.searchCard}
                activeOpacity={0.7}
                onPress={() => {
                  router.push(`/mua/${mua.id}` as any);
                }}
              >
                <View style={styles.searchImage}>
                  <Text style={styles.searchImageEmoji}>
                    💄
                  </Text>
                </View>

                <View style={styles.searchInfo}>
                  <Text style={styles.searchName}>
                    {mua.name}
                  </Text>

                  <Text style={styles.searchLocation}>
                    📍 {mua.location}
                  </Text>

                  <Text style={styles.searchRating}>
                    ⭐ {mua.rating} ({mua.reviews} reviews)
                  </Text>

                  <Text style={styles.searchPrice}>
                    Start from {mua.priceLabel}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      )}

      {/* POPULAR MUA */}
      {search.length === 0 && selectedCategory === '' && (
        <>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular MUA</Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* ALYA */}
          <TouchableOpacity
            style={styles.muaCard}
            activeOpacity={0.7}
            onPress={() => {
              router.push('/mua/alya' as any);
            }}
          >
            <View style={styles.muaImage}>
              <Text style={styles.muaImageEmoji}>💄</Text>
            </View>

            <View style={styles.muaInfo}>
              <Text style={styles.muaName}>
                Alya Makeup Artist
              </Text>

              <Text style={styles.muaLocation}>
                📍 Jakarta Selatan
              </Text>

              <View style={styles.ratingRow}>
                <Text style={styles.rating}>⭐ 4.9</Text>

                <Text style={styles.review}>
                  (128 reviews)
                </Text>
              </View>

              <Text style={styles.price}>
                Start from Rp350.000
              </Text>
            </View>

            <View style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>♡</Text>
            </View>
          </TouchableOpacity>

          {/* NADIA */}
          <TouchableOpacity
            style={styles.muaCard}
            activeOpacity={0.7}
            onPress={() => {
              router.push('/mua/nadia' as any);
            }}
          >
            <View style={styles.muaImage}>
              <Text style={styles.muaImageEmoji}>💋</Text>
            </View>

            <View style={styles.muaInfo}>
              <Text style={styles.muaName}>
                Nadia Beauty
              </Text>

              <Text style={styles.muaLocation}>
                📍 Tangerang
              </Text>

              <View style={styles.ratingRow}>
                <Text style={styles.rating}>⭐ 4.8</Text>

                <Text style={styles.review}>
                  (96 reviews)
                </Text>
              </View>

              <Text style={styles.price}>
                Start from Rp300.000
              </Text>
            </View>

            <View style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>♡</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

function CategoryItem({
  icon,
  title,
  selected,
  onPress,
}: {
  icon: string;
  title: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.categoryIcon,
          selected && styles.categoryIconSelected,
        ]}
      >
        <Text style={styles.categoryEmoji}>{icon}</Text>
      </View>

      <Text
        style={[
          styles.categoryTitle,
          selected && styles.categoryTitleSelected,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
  },

  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#292124',
  },

  headerSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },

  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationIcon: {
    fontSize: 21,
  },

  searchContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 24,
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

  searchResults: {
    marginTop: 20,
  },

  searchResultTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#292124',
    marginBottom: 15,
  },

  noResult: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  searchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    flexDirection: 'row',
  },

  searchImage: {
    width: 85,
    height: 85,
    borderRadius: 14,
    backgroundColor: '#F7DCE3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchImageEmoji: {
    fontSize: 32,
  },

  searchInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },

  searchName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#292124',
  },

  searchLocation: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },

  searchRating: {
    marginTop: 5,
    fontSize: 11,
    color: '#666',
  },

  searchPrice: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '700',
    color: '#B75B74',
  },

  banner: {
    backgroundColor: '#F2B8C6',
    borderRadius: 22,
    marginTop: 24,
    padding: 22,
    minHeight: 180,
    justifyContent: 'center',
  },

  bannerText: {
    width: '75%',
  },

  bannerSmall: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#7D4A59',
  },

  bannerTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    color: '#3D222A',
    marginTop: 8,
  },

  bannerButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  bannerButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9B5367',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#292124',
  },

  seeAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#B75B74',
  },

  categoryList: {
    gap: 14,
  },

  categoryItem: {
    alignItems: 'center',
    width: 75,
  },

  categoryIcon: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#FCE4EC',
  justifyContent: 'center',
  alignItems: 'center',
},

categoryIconSelected: {
  backgroundColor: '#F2B8C6',
  borderWidth: 2,
  borderColor: '#B75B74',
},

  categoryEmoji: {
    fontSize: 25,
  },

  categoryTitle: {
    marginTop: 8,
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
  },

  categoryTitleSelected: {
  color: '#B75B74',
  fontWeight: '700',
},

  muaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    flexDirection: 'row',
    position: 'relative',
  },

  muaImage: {
    width: 100,
    height: 110,
    borderRadius: 14,
    backgroundColor: '#F7DCE3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  muaImageEmoji: {
    fontSize: 40,
  },

  muaInfo: {
    flex: 1,
    marginLeft: 13,
    paddingTop: 5,
    paddingRight: 20,
  },

  muaName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#292124',
  },

  muaLocation: {
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

  review: {
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

  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

  favoriteIcon: {
    fontSize: 25,
    color: '#B75B74',
  },
});