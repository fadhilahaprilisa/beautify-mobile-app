import { useRouter } from 'expo-router';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Login</Text>

        <View style={{ width: 42 }} />
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.logo}>Beautify</Text>

        <Text style={styles.title}>
          Welcome Back! 👋
        </Text>

        <Text style={styles.subtitle}>
          Login untuk melanjutkan ke Beautify
        </Text>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* PASSWORD */}
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* FORGOT PASSWORD */}
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* LOGIN */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace('/(tabs)/profile')}
        >
          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        {/* REGISTER */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>
            Belum punya akun?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/auth/register' as any)}
          >
            <Text style={styles.registerLink}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
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

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#E91E63',
  },

  title: {
    marginTop: 25,
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 35,
    fontSize: 14,
    color: '#777',
  },

  label: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  input: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    color: '#333',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },

  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E91E63',
  },

  loginButton: {
    height: 54,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  registerRow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    fontSize: 14,
    color: '#777',
  },

  registerLink: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '700',
    color: '#E91E63',
  },
});