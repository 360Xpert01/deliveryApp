import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ActivityIndicator, Alert, Linking, I18nManager
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/themeContext';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { useTranslation } from 'react-i18next';

const LoginScreen = () => {

  const { t } = useTranslation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const { theme } = useTheme();

  useEffect(() => {
    if (token) {
      navigation.replace('drawer');
    }
  }, [token]);

  const openWhatsApp = () => {
    const phoneNumber = "+923253588091";
    const url = `whatsapp://send?phone=${phoneNumber}`;

    Linking.openURL(url).catch(() => {
      alert("WhatsApp is not installed on this device.");
    });
  };

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(number);
  };

  const handleLogin = () => {
    if (!validateMobileNumber(mobileNumber)) {
      Alert.alert(t('invalidMobile'), t('invalidMobileMessage'));
      return;
    }
    if (password.trim() === '') {
      Alert.alert(t('invalidPassword'), t('passwordEmpty'));
      return;
    }
    dispatch(loginUser({ mobileNumber, password }));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]} onPress={openWhatsApp}>
        <WhatsAppIcon width={35} height={35} />
      </TouchableOpacity>
      <Text style={[styles.logo, { color: theme.logo }]}>LOGO</Text>
      <View style={styles.signInContainer}>
        <Text style={[styles.title, { color: theme.text.primary, textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>
          {t('signInTo')} <Text style={{ color: theme.primary, fontWeight: 'bold' }}>{t("appName")}</Text>
        </Text>
        <Text style={[styles.subtitle, { color: theme.text.secondary, textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>
          {t('welcomeBack')}
        </Text>
      </View>
      <TextInput
        style={[styles.input, { backgroundColor: theme.input.background, borderColor: theme.input.border, textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        placeholder={t('mobileNumber')}
        placeholderTextColor={theme.text.light}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
        maxLength={15}
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.input.background, borderColor: theme.input.border, textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        placeholder={t('password')}
        placeholderTextColor={theme.text.light}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={[styles.errorText, { color: theme.error, textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>{error}</Text>}
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color={theme.text.onPrimary} /> : <Text style={[styles.buttonText, { color: theme.text.onPrimary }]}>{t('signIn')}</Text>}
      </TouchableOpacity>
    </View>
  );
};

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
