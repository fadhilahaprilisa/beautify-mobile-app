import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* PROFILE HEADER */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>B</Text>
        </View>

        <View>
          <Text style={styles.title}>My Profile</Text>

          <Text style={styles.subtitle}>
            Kelola akun Beautify kamu
          </Text>
        </View>
      </View>

      {/* LOGIN CARD */}
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>
          Kamu belum login
        </Text>

        <Text style={styles.loginDescription}>
          Login untuk menyimpan favorite MUA dan
          melakukan booking dengan lebih mudah.
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/auth/login' as any)}
        >
          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push('/auth/register' as any)}
        >
          <Text style={styles.registerButtonText}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* MENU */}
      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📋</Text>
          <Text style={styles.menuText}>My Booking</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❤️</Text>
          <Text style={styles.menuText}>Favorite MUA</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <Text style={styles.menuText}>Settings</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuText}>Help & Support</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
    padding: 20,
    paddingTop: 60,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFE0EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#E91E63',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: '#777',
  },

  loginCard: {
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFE5EF',
  },

  loginTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#333',
  },

  loginDescription: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 20,
    color: '#777',
  },

  loginButton: {
    height: 48,
    marginTop: 18,
    borderRadius: 13,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  registerButton: {
    height: 48,
    marginTop: 10,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonText: {
    color: '#E91E63',
    fontSize: 15,
    fontWeight: '700',
  },

  menuCard: {
    marginTop: 20,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
  },

  menuItem: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },

  menuIcon: {
    width: 35,
    fontSize: 20,
  },

  menuText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  arrow: {
    fontSize: 25,
    color: '#999',
  },
});