import { StyleSheet, Text, View } from 'react-native';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite</Text>
      <Text style={styles.subtitle}>
        MUA favorit kamu akan muncul di sini.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#777',
  },
});