import logoImage from '../assets/images/icons/logo.png';

export const getBlogPosts = async () => {
  const context = require.context('../assets/blog/posts', false, /\.(txt|md|doc|docx)$/);
  const posts = [];

  for (const key of context.keys()) {
    const fileName = key.replace('./', '');
    const fileContent = await fetch(context(key)).then(response => response.text());
    
    // İlk satırı başlık olarak kullan
    const lines = fileContent.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    
    // Dosya isminden ID ve tarih bilgisini çıkar
    const fileNameParts = fileName.split('-');
    const date = `${fileNameParts[2]} ${fileNameParts[1]} ${fileNameParts[0]}`;
    
    // ID'yi tarih olmadan oluştur (sadece başlık kısmını al)
    const id = fileNameParts.slice(3).join('-').replace(/\.(txt|md|doc|docx)$/, '');
    
    // Görsel kontrolü
    let image;
    try {
      image = require(`../assets/blog/images/${id}.jpg`);
    } catch (e) {
      try {
        image = require(`../assets/blog/images/${id}.png`);
      } catch (e) {
        image = logoImage;
      }
    }

    // Yaklaşık okuma süresini hesapla (ortalama 200 kelime/dakika)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    posts.push({
      id,
      title,
      date,
      content,
      image,
      readTime: `${readTime} dk okuma`
    });
  }

  // Tarihe göre sırala (en yeni en üstte)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split(' ').reverse().join('-'));
    const dateB = new Date(b.date.split(' ').reverse().join('-'));
    return dateB - dateA;
  });
};