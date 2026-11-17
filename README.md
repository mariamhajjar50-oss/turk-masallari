# Eski Zaman Hikâyeleri – Türk Masalları Derlemesi

Programlamaya Giriş dersi vize projesi: 10 Türk masalının okunabildiği bir web sayfası.
Bu sürümde proje, tek dosyalık yapıdan **üç ayrı dosyaya** (HTML + harici CSS + harici JavaScript) ayrılmıştır.

## Canlı Demo
GitHub Pages bağlantısı: `https://KULLANICI_ADI.github.io/REPO_ADI/`

## Ne yapar?
- Yıldızlı, kayan yıldızlı bir açılış sayfası; "Keşfetmeye Başla" düğmesiyle masal koleksiyonuna geçilir.
- Masalları başlıkta ve metinde arama, türe göre süzme.
- Masalları favorilere ekleme / çıkarma ve yalnızca favorileri gösterme (tarayıcıda saklanır).
- İki sayfalı kitap görünümünde okuma, yazı boyutunu değiştirme, ok tuşlarıyla sayfa çevirme.
- Okunan masalların işaretlenmesi.
- Bilgisayar ve telefon ekranına uyumlu tasarım.

## Bu sürümde yapılan değişiklikler (External CSS ve JS)
- `<style>` içindeki tüm stiller `css/style.css` dosyasına taşındı ve `<link rel="stylesheet" href="css/style.css">` ile bağlandı.
- `<script>` içindeki tüm kodlar `js/script.js` dosyasına taşındı ve `</body>` öncesinde `<script src="js/script.js"></script>` ile bağlandı.
- HTML içine base64 olarak gömülü olan masal görselleri `images/` klasörüne ayrı `.jpg` dosyaları olarak çıkarıldı; `script.js` artık bu dosyaların yoluna başvuruyor.
- Satır içi `style="..."` kullanımı kaldırıldı, yerine `.bos-mesaj` CSS sınıfı eklendi.
- Tasarım ve işlevler önceki sürümle aynıdır.

## Dosya Yapısı
```
├── index.html        Sayfa iskeleti (HTML)
├── css/
│   └── style.css     Tüm stiller
├── js/
│   └── script.js     Masal verisi, arama/süzme, favoriler, okuyucu, gökyüzü animasyonu
├── images/
│   ├── *.jpg         Masal kapak görselleri
│   └── ekran/        Ekran görüntüleri
└── README.md
```

## Nasıl açılır?
Repoyu indirin (Code → Download ZIP) ve `index.html` dosyasını tarayıcıda açın. Başka bir kurulum veya internet bağlantısı gerekmez.
Klasör yapısı bozulmamalıdır; `css/`, `js/` ve `images/` klasörleri `index.html` ile aynı yerde durmalıdır.

## Ekran Görüntüleri
![Açılış](images/ekran/ekran-acilis.png)
![Masaüstü](images/ekran/ekran-masaustu.png)
![Okuyucu](images/ekran/ekran-okuyucu.png)
![Mobil](images/ekran/ekran-mobil.png)

## Kullanılan Teknolojiler
HTML5, CSS3, JavaScript (kütüphanesiz), `localStorage`, Canvas API.

## Bağlantılar
- YouTube sunum videosu: https://youtu.be/QSVX8glw74g

## Not
Görsellerin kaynağı ve üretim ayrıntıları raporda belirtilmiştir.

## Geliştirici
Mariam Al Hajjar– Öğrenci No 86240066
