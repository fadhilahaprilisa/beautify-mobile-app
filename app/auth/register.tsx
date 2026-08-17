import { useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Register</Text>

        <View style={{ width: 42 }} />
      </View>

      {/* CONTENT */}
      <View style={styles.form}>
        <Text style={styles.logo}>Beautify</Text>

        <Text style={styles.title}>
          Create Your Account ✨
        </Text>

        <Text style={styles.subtitle}>
          Daftar untuk mulai menggunakan Beautify
        </Text>

        {/* NAME */}
        <Text style={styles.label}>Full Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap"
          placeholderTextColor="#999"
        />

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* PHONE */}
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan nomor HP"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />

        {/* PASSWORD */}
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Buat password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* CONFIRM PASSWORD */}
        <Text style={styles.label}>
          Confirm Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ulangi password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* REGISTER */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.replace('/auth/login' as any)}
        >
          <Text style={styles.registerButtonText}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* LOGIN */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>
            Sudah punya akun?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/auth/login' as any)}
          >
            <Text style={styles.loginLink}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FB',
  },

  content: {
    paddingBottom: 40,
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

  form: {
    paddingHorizontal: 25,
    paddingTop: 35,
  },

  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#E91E63',
  },

  title: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 25,
    fontSize: 14,
    color: '#777',
  },

  label: {
    marginTop: 16,
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

  registerButton: {
    height: 54,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  loginRow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 14,
    color: '#777',
  },

  loginLink: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '700',
    color: '#E91E63',
  },
});