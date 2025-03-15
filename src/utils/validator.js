/**
 * Input ve form validasyonları için kullanılacak güvenlik fonksiyonları
 */

/**
 * XSS saldırıları için tehlikeli karakterleri temizler
 * @param {string} input - Kullanıcı girdisi
 * @returns {string} - Temizlenmiş girdi
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  
  // HTML özel karakterlerini escape eder
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * SQL enjeksiyon saldırılarına karşı koruma
 * @param {string} input - Kullanıcı girdisi
 * @returns {boolean} - Girdi güvenli mi?
 */
export const isSqlInjectionSafe = (input) => {
  if (!input) return true;
  
  const sqlPattern = /(\b(select|insert|update|delete|drop|alter|create|where|from|having|join)\b)|(--|\/\*|\*\/|;)/i;
  return !sqlPattern.test(input);
};

/**
 * E-posta adreslerinin geçerli formatını kontrol eder
 * @param {string} email - E-posta adresi
 * @returns {boolean} - E-posta geçerli mi?
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

/**
 * Telefon numarası formatını kontrol eder
 * @param {string} phone - Telefon numarası
 * @returns {boolean} - Telefon numarası geçerli mi?
 */
export const isValidPhone = (phone) => {
  if (!phone) return false;
  // Türkiye telefon formatı (isteğe bağlı başında +90 veya 0 ile başlayan 10 haneli numara)
  const phonePattern = /^(\+90|0)?[0-9]{10}$/;
  return phonePattern.test(phone.replace(/\s+/g, ''));
};

/**
 * Formları göndermeden önce tüm input değerlerini kontrol eden fonksiyon
 * @param {Object} formData - Form verileri
 * @returns {Object} - Hata mesajları ve formun geçerli olup olmadığı bilgisi
 */
export const validateForm = (formData) => {
  const errors = {};
  let isValid = true;
  
  // Ad Soyad kontrolü
  if (!formData.name || formData.name.length < 3) {
    errors.name = 'Lütfen geçerli bir ad ve soyad girin';
    isValid = false;
  }
  
  // SQL enjeksiyon kontrolü
  if (!isSqlInjectionSafe(formData.name) || 
      !isSqlInjectionSafe(formData.email) || 
      !isSqlInjectionSafe(formData.phone) || 
      !isSqlInjectionSafe(formData.message)) {
    errors.general = 'Geçersiz karakter kombinasyonu tespit edildi';
    isValid = false;
  }
  
  // E-posta kontrolü
  if (!isValidEmail(formData.email)) {
    errors.email = 'Lütfen geçerli bir e-posta adresi girin';
    isValid = false;
  }
  
  // Telefon kontrolü
  if (!isValidPhone(formData.phone)) {
    errors.phone = 'Lütfen geçerli bir telefon numarası girin';
    isValid = false;
  }
  
  // Mesaj kontrolü
  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Lütfen en az 10 karakter içeren bir mesaj yazın';
    isValid = false;
  }
  
  return { isValid, errors };
};