import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ActivityIndicator, Platform, Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/themeContext';
import WhatsAppIcon from '../../components/WhatsAppIcon';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const { theme } = useTheme();
  useEffect(() => {
    if (token) {
      navigation.replace('Home');
    }
  }, [token]);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter email and password');
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]}>
        <WhatsAppIcon width={35} height={35} />
      </TouchableOpacity>

      {/* LOGO */}
      <Text style={[styles.logo, { color: theme.logo }]}>LOGO</Text>

      {/* Sign-in Text (Left Aligned) */}
      <View style={styles.signInContainer}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          Sign in to <Text style={{ color: theme.primary, fontWeight: 'bold' }}>[App Name]</Text>
        </Text>
        <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
          Welcome back to your home for help. Please enter your account details below to sign in.
        </Text>
      </View>

      {/* Input Fields */}
      <TextInput
        style={[styles.input, { backgroundColor: theme.input.background, borderColor: theme.input.border }]}
        placeholder="Mobile Number"
        placeholderTextColor={theme.text.light}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.input.background, borderColor: theme.input.border }]}
        placeholder="Password"
        placeholderTextColor={theme.text.light}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Error Message */}
      {error && <Text style={[styles.errorText, { color: theme.error }]}>{error}</Text>}

      {/* Sign-in Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color={theme.text.onPrimary} /> : <Text style={[styles.buttonText, { color: theme.text.onPrimary }]}>Sign in</Text>}
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  whatsappButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 999, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  whatsappLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  signInContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: 5,
    paddingRight: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  errorText: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'left',
    width: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
