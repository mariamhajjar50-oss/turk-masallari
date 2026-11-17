  // MASAL VERİSİ. gorsel: masalın resmi (ana klasördeki dosya yolu; yoksa otomatik SVG kapak çizilir).
  // kaynak: raporda yazdığın kaynakla aynı olmalı. metin: kendi cümlelerinle yeniden anlattığın paragraflar.
  const masallar = [
    {
      id: "aslan-fare",
      gorsel: "aslan-fare.jpg",
      ad: "Aslan Padişah ile Fare",
      tur: "Hayvan",
      metin: [
        "Evvel zaman içinde, kalbur saman içinde, ormanların görkemli padişahı Aslan bir sabah büyük bir ağacın gölgesinde dinleniyormuş.",
        "Ufak bir fare yanlışlıkla aslanın pençesine basmasına sebep olmuş. Aslan tam onu yutacakken minik fare titreyerek yalvarmış: 'Beni bağışla padişahım, bir gün gelir benim de sana bir yardımım dokunur.'",
        "Günlerden bir gün aslan avcıların kurduğu güçlü bir tuzağa düşmüş. Ormanı inleten kükremesini duyan minik fare hemen koşup gelmiş ve keskin dişleriyle ipleri kemirerek aslanı kurtarmış."
      ]
    },
    {
      id: "altin-sacli",
      gorsel: "altin-sacli.jpg",
      ad: "Altın Saçlı Kız",
      tur: "Peri",
      metin: [
        "Eski zamanlarda saçları gece karanlığında bile güneş gibi parlayan çok güzel bir kız yaşarmış. Bu kızın saç tellerinden dökülen her tel bahçedeki çiçekleri saf altına çevirirmiş.",
        "Köydeki kötü niyetli ve açgözlü biri bu sırrı öğrenince kızın saçlarını ele geçirmeye kalkışmış, ancak doğanın ve sevginin sihri ona engel olmuş.",
        "İyilik ve saf kalplilik her zaman en büyük hazine olarak masallardaki yerini korumuş."
      ]
    },
    {
      id: "altin-top",
      gorsel: "altin-top.jpg",
      ad: "Altın Top",
      tur: "Peri",
      metin: [
        "Komşu iki evden biri zengin diğeri ise yoksulmuş. Zengin ailenin kasaları altınla doluymuş lakin evde huzurden eser yokmuş.",
        "Yoksul ailenin ise neşesi, çocukların bahçede oynarken bulduğu sihirli parlayan altın bir toptan ve neşeli kahkahalarından geliyormuş.",
        "Gerçek mutluluğun sandıklardaki paralarda değil, paylaşılan sevgide olduğu kasabanın dört bir yanında anlaşılmış."
      ]
    },
    {
      id: "tombul-gozleme",
      gorsel: "tombul-gozleme.jpg",
      ad: "Tombul Gözleme",
      tur: "Mizah",
      metin: [
        "Üç yaşlı nenenin hazırladığı mis kokulu nefis gözleme, tavada pişerken birden zıplayıp mutfaktan kaçmaya başlamış.",
        "Ormandaki hayvanları ve köylüleri peşinden koşturan neşeli gözleme, sonunda ormanda aç kalan kimsesiz çocuklara sığınarak onları doyurmuş.",
        "Gözlemenin tatlı macerası dilden dile tüm ülkeye yayılmış."
      ]
    },
    {
      id: "gozyaslari",
      gorsel: "gozyaslari.jpg",
      ad: "Sevgiyle Akan Gözyaşları",
      tur: "Efsane",
      metin: [
        "Padişahın güzel kızına âşık olan yoksul bir çoban, kalbinin saf sevgisini kanıtlamak için imtihanlarla dolu dağlara tırmanmış.",
        "Çekilen zorluklar ve dökülen saf gözyaşları, dağın tepesinde kuruyan ulu ağacı yeniden canlandırmış ve sihirli bir nehre dönüştürmüş.",
        "Gerçek sevginin aşamayacağı hiçbir engel olmadığı o gün dağlarda yankılanmış."
      ]
    },
    {
      id: "degirmenci",
      gorsel: "degirmenci.jpg",
      ad: "Yalancı Değirmenci",
      tur: "Mizah",
      metin: [
        "Köylüleri ve müşterilerini sürekli kandıran, kurnaz ama yalancı bir değirmenci kasabada yaşarmış.",
        "Küçük bir çocuğun zekice kurduğu yalan yarışı oyununa katılan değirmenci, kendi kazdığı kuyuya düşerek hayatının en büyük dersini almış.",
        "Yalandan uzak duranların her zaman kazandığı bir kez daha anlaşılmış."
      ]
    },
    {
      id: "tahir-zuhre",
      gorsel: "tahir-zuhre.jpg",
      ad: "Tahir ile Zühre",
      tur: "Efsane",
      metin: [
        "Sarayın bahçesinde birlikte büyüyen Tahir ile Zühre'nin dilden dile dolaşan saf ve masum aşkı tüm ülkeyi sarmış.",
        "Önlerine çıkan türlü tuzaklara ve engellere rağmen kalpleri hep birbirine bağlı kalmış.",
        "Adları efsanelere yazılan bu iki sevgilinin hikâyesi gökyüzündeki yıldızlara ilham olmuş."
      ]
    },
    {
      id: "balikci-deniz-kizi",
      gorsel: "balikci-deniz-kizi.jpg",
      ad: "Balıkçı ile Deniz Kızı",
      tur: "Peri",
      metin: [
        "Derin ve sessiz sularda huzurla yaşayan yaşlı balıkçının ağına bir gün sihirli ve parıltılı bir deniz kızı takılmış.",
        "Deniz kızı balıkçıya özgürlüğünü geri vermesi karşılığında ona huzurlu bir yaşam dilemiş.",
        "Ancak açgözlülük arttıkça her şey yok olmuş, en sonunda balıkçı yine sade ve huzurlu hayatına geri dönmüş."
      ]
    },
    {
      id: "keloglan-devler",
      gorsel: "keloglan-devler.jpg",
      ad: "Keloğlan ile Devler",
      tur: "Peri",
      metin: [
        "Keloğlan, padişahın hasta kızını iyileştirecek sihirli mor çiçeği bulmak üzere karanlık dağlara doğru yola koyulmuş.",
        "Yol üstünde devlerle karşılaşan Keloğlan kaba kuvvet yerine zekâsını ve hazırcevaplığını kullanarak devleri alt etmiş.",
        "Şifalı çiçeği saraya getirerek hem prensesi iyileştirmiş hem de kahraman olmuş."
      ]
    },
    {
      id: "nar-ayva",
      gorsel: "nar-ayva.jpg",
      ad: "Ağlayan Nar ile Gülen Ayva",
      tur: "Peri",
      metin: [
        "Padişahın bahçesinde sihirli bir nar ağacı ile gülen bir ayva ağacı yan yana dururmuş. Biri sürekli hüzünlüce ağlar, diğeri ise neşeyle gülermiş.",
        "Cesur bir prenses bu iki ağacın sırrını çözmek ve saraydaki huzursuzluğu bitirmek için uzun bir maceraya atılmış.",
        "Sevgi ve anlayış sayesinde ağaçlar barışmış, saraya neşe ve bolluk gelmiş."
      ]
    }
  ];

  // ---------- Kapak çizimi (internet gerektirmez; SVG'yi kod üretir) ----------
  const motifler = {
    Peri: '<path d="M110 50L120 85L155 95L120 105L110 140L100 105L65 95L100 85Z" fill="#D4B477"/>',
    Hayvan: '<ellipse cx="110" cy="112" rx="24" ry="19" fill="#D4B477"/><circle cx="78" cy="82" r="9" fill="#D4B477"/><circle cx="98" cy="64" r="9" fill="#D4B477"/><circle cx="122" cy="64" r="9" fill="#D4B477"/><circle cx="142" cy="82" r="9" fill="#D4B477"/>',
    Efsane: '<path d="M125 55A45 45 0 1 0 125 135A36 36 0 1 1 125 55Z" fill="#D4B477"/>',
    Mizah: '<circle cx="110" cy="95" r="40" fill="none" stroke="#D4B477" stroke-width="5"/><circle cx="96" cy="85" r="4" fill="#D4B477"/><circle cx="124" cy="85" r="4" fill="#D4B477"/><path d="M92 105Q110 128 128 105" fill="none" stroke="#D4B477" stroke-width="5" stroke-linecap="round"/>'
  };
  function satirla(baslik, max) {            // uzun başlığı satırlara böler
    const satirlar = []; let s = "";
    baslik.split(" ").forEach(k => {
      if ((s + " " + k).trim().length > max) { satirlar.push(s.trim()); s = k; } else s += " " + k;
    });
    satirlar.push(s.trim());
    return satirlar;
  }
  function kapak(m, i) {
    const yazi = satirla(m.ad, 16).map((s, j) => `<tspan x="110" dy="${j ? 22 : 0}">${s}</tspan>`).join("");
    return `<svg viewBox="0 0 220 280" preserveAspectRatio="xMidYMid slice" class="kart-gorsel" role="img" aria-label="${m.ad} kapağı">
      <defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2d7c"/><stop offset="1" stop-color="#0a0e2a"/></linearGradient></defs>
      <rect width="220" height="280" fill="url(#g${i})"/>
      <rect x="12" y="12" width="196" height="256" fill="none" stroke="#D4B477" stroke-opacity=".7" stroke-width="1.5"/>
      <rect x="18" y="18" width="184" height="244" fill="none" stroke="#D4B477" stroke-opacity=".35" stroke-width="1"/>
      ${motifler[m.tur] || motifler.Peri}
      <text x="110" y="200" text-anchor="middle" font-family="Constantia, Cambria, Georgia, serif" font-size="18" fill="#F5EBDD">${yazi}</text></svg>`;
  }

  // ---------- Durum ----------
  let aktifMasalId = null, sayfaIndex = 0, sonOdak = null, sayfalar = [], yon = "ileri";
  let okunanlar = new Set(), okumaBoyutu = 1.15, favoriler = new Set(), sadeceFavori = false;
  try {
    okunanlar = new Set(JSON.parse(localStorage.getItem("okunanMasallar") || "[]"));
    okumaBoyutu = parseFloat(localStorage.getItem("okumaBoyutu")) || 1.15;
    favoriler = new Set(JSON.parse(localStorage.getItem("favoriMasallar") || "[]"));
  } catch (e) {}
  function kaydet() {
    try { localStorage.setItem("okunanMasallar", JSON.stringify([...okunanlar])); localStorage.setItem("okumaBoyutu", okumaBoyutu); localStorage.setItem("favoriMasallar", JSON.stringify([...favoriler])); } catch (e) {}
  }

  const grid = document.getElementById("gridKartlar");
  const aramaInput = document.getElementById("aramaInput");
  const turSecim = document.getElementById("turSecim");
  const okuyucuModal = document.getElementById("okuyucuModal");
  const kitap = document.getElementById("kitapSayfalar");
  const tr = s => s.toLocaleLowerCase("tr");
  const sayfaBasi = () => window.matchMedia("(max-width: 768px)").matches ? 1 : 2;
  const aktifMasal = () => masallar.find(x => x.id === aktifMasalId);

  // ---------- Favoriler ----------
  const KALP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  function favDugmeHTML(m) {
    return `<button type="button" class="fav-dugme" data-id="${m.id}" aria-pressed="${favoriler.has(m.id)}" aria-label="${m.ad} masalını favorilere ekle veya çıkar" title="Favorilere ekle / çıkar">${KALP}</button>`;
  }
  function favGuncelle() {
    document.querySelectorAll(".fav-dugme").forEach(b => b.setAttribute("aria-pressed", favoriler.has(b.dataset.id)));
    document.querySelectorAll(".fav-sayi").forEach(e => e.textContent = favoriler.size);
    favModalGuncelle();
  }
  function favModalGuncelle() {
    if (aktifMasalId) document.getElementById("favModal").setAttribute("aria-pressed", favoriler.has(aktifMasalId));
  }
  function favoriDegis(id) {
    if (favoriler.has(id)) favoriler.delete(id); else favoriler.add(id);
    kaydet(); favGuncelle();
    if (sadeceFavori && okuyucuModal.hidden) kartlariCiz();           // favori listesindeyken çıkarılan kart kaybolsun
  }
  function favFiltreAyarla(durum) {
    sadeceFavori = durum;
    document.getElementById("favFiltre").setAttribute("aria-pressed", durum);
    kartlariCiz();
  }

  // ---------- Kartlar: başlıkta ve metinde arama + tür süzgeci ----------
  function kartlariCiz() {
    const arama = tr(aramaInput.value.trim()), tur = turSecim.value;
    grid.innerHTML = "";
    const sonuc = masallar.filter(m => (!arama || tr(m.ad + " " + m.metin.join(" ")).includes(arama)) && (!tur || m.tur === tur) && (!sadeceFavori || favoriler.has(m.id)));
    document.getElementById("sonucSayisi").textContent = `${sonuc.length} masal gösteriliyor` + (sadeceFavori ? " · yalnızca favoriler" : "");
    if (!sonuc.length) {
      grid.innerHTML = `<p class="bos-mesaj">${sadeceFavori && !favoriler.size ? "Henüz favori masalınız yok. Bir masalın kapağındaki kalbe dokunarak favorilerinize ekleyebilirsiniz." : "Aradığınız kriterlere uygun masal bulunamadı."}</p>`;
      return;
    }
    sonuc.forEach(m => {
      const i = masallar.indexOf(m);
      const kart = document.createElement("div");
      kart.className = "masal-kart"; kart.tabIndex = 0;
      kart.setAttribute("role", "button");
      kart.setAttribute("aria-label", `${m.ad}, ${m.tur}. Okumak için seç.`);
      kart.innerHTML = `${favDugmeHTML(m)}${okunanlar.has(m.id) ? '<span class="okundu-rozet">✓ Okundu</span>' : ""}
        ${m.gorsel ? `<img src="${m.gorsel}" alt="${m.ad} masalı için çizim" class="kart-gorsel">` : kapak(m, i)}
        <div class="kart-bilgi"><h3>${m.ad}</h3>
          <div class="kart-alt"><span class="tur-rozet">${m.tur}</span><span>Kitabı aç ›</span></div></div>`;
      const fd = kart.querySelector(".fav-dugme");
      fd.onclick = e => { e.stopPropagation(); favoriDegis(m.id); };
      fd.onkeydown = e => e.stopPropagation();
      kart.onclick = () => masalAc(m.id);
      kart.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); masalAc(m.id); } };
      grid.appendChild(kart);
    });
  }

  // ---------- Sayfalara bölme ----------
  // Metni, sayfaya gerçekten sığdığı kadar kelime ekleyerek böler; böylece sayfalar boş kalmaz
  // ve yazı boyutu ya da ekran değişince sayfa sayısı kendiliğinden güncellenir.
  function sayfalaraBol(m) {
    const ref = kitap.querySelector(".sayfa");
    const cs = getComputedStyle(ref);
    const maxH = ref.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - 26;
    if (maxH <= 40) return m.metin.map(p => [p]);                       // ölçüm yapılamazsa her paragraf bir sayfa
    const olcer = document.createElement("div");
    olcer.className = "sayfa olcer";
    olcer.style.width = ref.offsetWidth + "px";
    olcer.innerHTML = '<div class="sayfa-icerik"></div>';
    document.body.appendChild(olcer);
    const ic = olcer.firstChild;
    const sigar = pp => {
      ic.replaceChildren(...pp.map(t => { const p = document.createElement("p"); p.textContent = t; return p; }));
      return ic.offsetHeight <= maxH;
    };
    const sonuc = []; let cur = [];
    m.metin.forEach(par => {
      let yeni = true;
      par.split(" ").forEach(k => {
        const dene = yeni ? [...cur, k] : [...cur.slice(0, -1), cur[cur.length - 1] + " " + k];
        if (cur.length === 0 || sigar(dene)) cur = dene;                // sığdı
        else { sonuc.push(cur); cur = [k]; }                            // sığmadı: yeni sayfa
        yeni = false;
      });
    });
    if (cur.length) sonuc.push(cur);
    olcer.remove();
    return sonuc;
  }
  // Tek sayfaya sığan kısa bir masalı, iki sayfalı kitapta dengeli görünsün diye ikiye böler
  function ikiyeBol(pp) {
    if (pp.length >= 2) {
      const toplam = pp.join("").length; let en = 1, fark = Infinity, sayac = 0;
      for (let i = 1; i < pp.length; i++) {
        sayac += pp[i - 1].length;
        if (Math.abs(sayac - toplam / 2) < fark) { fark = Math.abs(sayac - toplam / 2); en = i; }
      }
      return [pp.slice(0, en), pp.slice(en)];
    }
    const k = pp[0].split(" "), yari = Math.ceil(k.length / 2);
    return [[k.slice(0, yari).join(" ")], [k.slice(yari).join(" ")]];
  }
  // Son sayfalar: toplam sayfa sayısı çift kalsın ki iki sayfalı kitapta boş sayfa olmasın
  function sayfaListesiKur(m, adim) {
    let bolunmus = sayfalaraBol(m);
    if (adim === 2 && bolunmus.length === 1) bolunmus = ikiyeBol(bolunmus[0]);   // kısa masal: iki sayfaya dengeli dağıt
    const metinSayfalari = bolunmus.map(pp => ({ tip: "metin", pp }));
    const liste = [...metinSayfalari];
    if (adim === 2 && metinSayfalari.length % 2 === 0) { liste.push({ tip: "son" }, { tip: "kaynak" }); }
    else liste.push({ tip: "sonkaynak" });
    return liste;
  }
  function sayfaHTML(pg, no, m) {
    if (!pg) return '<div class="sayfa" aria-hidden="true"></div>';
    const kaynak = `<p class="kaynak-baslik">Kaynak</p><p>${m.kaynak || "raporda belirtilecek"}</p>`;
    const son = `<p class="son-yazi">Masal burada biter.</p>`;
    if (pg.tip === "metin") return `<div class="sayfa"><div class="sayfa-icerik">${pg.pp.map(p => `<p>${p}</p>`).join("")}</div><div class="sayfa-no">${no}</div></div>`;
    if (pg.tip === "son") return `<div class="sayfa son"><div class="sayfa-icerik">${son}</div><div class="sayfa-no"></div></div>`;
    if (pg.tip === "kaynak") return `<div class="sayfa kaynak-sayfa"><div class="sayfa-icerik">${kaynak}</div><div class="sayfa-no"></div></div>`;
    return `<div class="sayfa son"><div class="sayfa-icerik">${son}${kaynak}</div><div class="sayfa-no"></div></div>`;
  }

  // ---------- Okuyucu ----------
  function masalAc(id) {
    sonOdak = document.activeElement;
    aktifMasalId = id; sayfaIndex = 0;
    okuyucuModal.hidden = false;
    document.body.classList.add("okuyor");
    document.body.style.overflow = "hidden";
    try { if (location.hash !== "#" + id) location.hash = id; } catch (e) {}
    kitabiKur();
    document.getElementById("kapatModal").focus();
  }
  function masalKapat() {
    if (okuyucuModal.hidden) return;
    okuyucuModal.hidden = true;
    document.body.style.overflow = "";
    document.body.classList.remove("okuyor");
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { try { location.hash = ""; } catch (e2) {} }
    kartlariCiz();
    if (sonOdak) sonOdak.focus();
  }
  function kitabiKur() {                       // sayfaları yeniden ölç ve çiz
    const m = aktifMasal(), adim = sayfaBasi();
    document.getElementById("modalBaslik").textContent = m.ad;
    favModalGuncelle();
    document.documentElement.style.setProperty("--okuma-fs", okumaBoyutu + "rem");
    kitap.className = "kitap-sayfalar";
    kitap.innerHTML = '<div class="sayfa"><div class="sayfa-icerik"></div></div>'.repeat(adim);   // ölçüm için boş sayfalar
    sayfalar = sayfaListesiKur(m, adim);
    sayfaIndex = Math.min(sayfaIndex, sayfalar.length - 1);
    sayfaIndex -= sayfaIndex % adim;
    sayfayiCiz();
  }
  function sayfayiCiz() {
    const m = aktifMasal(), adim = sayfaBasi();
    kitap.className = "kitap-sayfalar " + yon;
    kitap.innerHTML = Array.from({ length: adim }, (_, k) => sayfaHTML(sayfalar[sayfaIndex + k], sayfaIndex + k + 1, m)).join("");
    const son = Math.min(sayfaIndex + adim, sayfalar.length);
    document.getElementById("sayfaGosterge").textContent = `Sayfa ${son} / ${sayfalar.length}`;
    document.getElementById("oncekiSayfa").disabled = sayfaIndex === 0;
    document.getElementById("sonrakiSayfa").disabled = sayfaIndex + adim >= sayfalar.length;
    if (sayfaIndex + adim >= sayfalar.length) { okunanlar.add(m.id); kaydet(); }   // sona gelince "okundu"
  }
  function sayfaGit(d) {
    const yeni = sayfaIndex + d * sayfaBasi();
    if (yeni >= 0 && yeni < sayfalar.length) { yon = d > 0 ? "ileri" : "geri"; sayfaIndex = yeni; sayfayiCiz(); }
  }
  function boyutDegis(d) {
    okumaBoyutu = Math.min(1.7, Math.max(0.95, +(okumaBoyutu + d).toFixed(2)));
    kaydet(); kitabiKur();
  }

  document.getElementById("oncekiSayfa").onclick = () => sayfaGit(-1);
  document.getElementById("sonrakiSayfa").onclick = () => sayfaGit(1);
  document.getElementById("kapatModal").onclick = masalKapat;
  document.getElementById("kucult").onclick = () => boyutDegis(-0.1);
  document.getElementById("buyut").onclick = () => boyutDegis(0.1);
  document.getElementById("rastgeleBtn").onclick = () => masalAc(masallar[Math.floor(Math.random() * masallar.length)].id);
  // ---------- 1. sayfa (yıldızlı açılış) <-> 2. sayfa (masal dünyası) ----------
  const giris = document.getElementById("top"), uygulama = document.getElementById("uygulama");
  function uygulamayiAc(hizli) {
    if (!uygulama.hidden) return;
    uygulama.hidden = false;
    window.scrollTo(0, 0);
    if (hizli) { giris.hidden = true; return; }
    if (window.gokyuzu) [0, 200, 420].forEach(t => setTimeout(() => window.gokyuzu.meteor(), t));   // girerken kayan yıldız
    giris.classList.add("cikis");
    setTimeout(() => { if (giris.classList.contains("cikis")) giris.hidden = true; }, 800);
    setTimeout(() => { const h = document.querySelector(".baslik-alan h2"); h.tabIndex = -1; h.focus({ preventScroll: true }); }, 900);
  }
  function girisiGoster() {
    uygulama.hidden = true;
    giris.hidden = false; void giris.offsetWidth; giris.classList.remove("cikis");
    window.scrollTo(0, 0);
  }
  document.getElementById("baslaBtn").onclick = () => uygulamayiAc(false);
  document.querySelector(".marka").onclick = e => { e.preventDefault(); girisiGoster(); };
  document.getElementById("favFiltre").onclick = () => favFiltreAyarla(!sadeceFavori);
  document.getElementById("navFav").onclick = () => { favFiltreAyarla(true); document.getElementById("kutuphaneBolumu").scrollIntoView({ behavior: "smooth" }); };
  document.getElementById("favModal").onclick = () => favoriDegis(aktifMasalId);
  aramaInput.oninput = kartlariCiz;
  turSecim.onchange = kartlariCiz;

  document.addEventListener("keydown", e => {            // Esc kapatır, ok tuşları sayfa çevirir
    if (okuyucuModal.hidden) return;
    if (e.key === "Escape") masalKapat();
    if (e.key === "ArrowRight") sayfaGit(1);
    if (e.key === "ArrowLeft") sayfaGit(-1);
  });
  function hashKontrol() {                               // #masal-adı ile doğrudan açma
    const id = location.hash.slice(1);
    if (id && masallar.some(m => m.id === id) && (okuyucuModal.hidden || aktifMasalId !== id)) { uygulamayiAc(true); masalAc(id); }
  }
  window.addEventListener("hashchange", hashKontrol);
  let yenidenBoyut;
  window.addEventListener("resize", () => {              // ekran değişince sayfaları yeniden böl
    clearTimeout(yenidenBoyut);
    yenidenBoyut = setTimeout(() => { if (!okuyucuModal.hidden) kitabiKur(); }, 150);
  });

  kartlariCiz();
  favGuncelle();
  hashKontrol();

  // ---------- Gece gökyüzü: parıldayan yıldızlar + kayan yıldız ----------
  (function () {
    const cv = document.getElementById("gokyuzu"), ctx = cv.getContext("2d");
    const durgun = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renkler = ["255,255,255", "255,244,214", "200,220,255", "255,226,170"];
    let W, H, yildizlar = [], gokTaslari = [], sonraki = 0.9, onceki = 0;

    function boyutla() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(450, Math.round(W * H / 4200));
      yildizlar = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() < 0.08 ? 1.6 + Math.random() * 0.8 : 0.3 + Math.random(),
        faz: Math.random() * 6.28, hiz: 0.5 + Math.random() * 1.8,
        renk: renkler[Math.floor(Math.random() * renkler.length)]
      }));
      if (durgun) ciz(0);
    }
    function yildizCiz(t) {
      yildizlar.forEach(y => {
        const a = durgun ? 0.8 : 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * y.hiz + y.faz));
        ctx.fillStyle = `rgba(${y.renk},${a.toFixed(3)})`;
        ctx.beginPath(); ctx.arc(y.x, y.y, y.r, 0, 6.2832); ctx.fill();
        if (y.r > 1.5) {                                   // büyük yıldızlara hafif ışıltı
          const g = ctx.createRadialGradient(y.x, y.y, 0, y.x, y.y, y.r * 5);
          g.addColorStop(0, `rgba(${y.renk},${(a * 0.35).toFixed(3)})`); g.addColorStop(1, `rgba(${y.renk},0)`);
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(y.x, y.y, y.r * 5, 0, 6.2832); ctx.fill();
        }
      });
    }
    function gokTasiYap() {                                // sağ üstten sol alta doğru kayar
      const aci = (22 + Math.random() * 20) * Math.PI / 180, hiz = 700 + Math.random() * 500;
      gokTaslari.push({
        x: W * (0.25 + Math.random() * 0.85), y: -40 + Math.random() * H * 0.35,
        ux: -Math.cos(aci), uy: Math.sin(aci), hiz, boy: 140 + Math.random() * 120, omur: 0, sure: 1.1 + Math.random() * 0.5
      });
    }
    function gokTasiCiz(m) {
      const a = Math.min(1, m.omur / 0.15) * Math.min(1, (m.sure - m.omur) / 0.35);
      const tx = m.x - m.ux * m.boy, ty = m.y - m.uy * m.boy;
      const g = ctx.createLinearGradient(tx, ty, m.x, m.y);
      g.addColorStop(0, "rgba(180,210,255,0)"); g.addColorStop(0.7, `rgba(200,225,255,${(a * 0.5).toFixed(3)})`); g.addColorStop(1, `rgba(255,255,255,${a.toFixed(3)})`);
      ctx.strokeStyle = g; ctx.lineWidth = 2.2; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(m.x, m.y); ctx.stroke();
      const h = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 9);
      h.addColorStop(0, `rgba(255,255,255,${a.toFixed(3)})`); h.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = h; ctx.beginPath(); ctx.arc(m.x, m.y, 9, 0, 6.2832); ctx.fill();
    }
    function ciz(t) { ctx.clearRect(0, 0, W, H); yildizCiz(t); gokTaslari.forEach(gokTasiCiz); }
    function dongu(ms) {
      const t = ms / 1000, dt = Math.min(0.05, t - onceki); onceki = t;
      sonraki -= dt;
      if (sonraki <= 0) { gokTasiYap(); sonraki = 1.8 + Math.random() * 3.2; }
      gokTaslari.forEach(m => { m.x += m.ux * m.hiz * dt; m.y += m.uy * m.hiz * dt; m.omur += dt; });
      gokTaslari = gokTaslari.filter(m => m.omur < m.sure && m.x > -m.boy && m.y < H + m.boy);
      ciz(t); requestAnimationFrame(dongu);
    }
    window.gokyuzu = { meteor() { if (!durgun) gokTasiYap(); } };
    window.addEventListener("resize", boyutla);
    boyutla();
    if (!durgun) requestAnimationFrame(dongu);
  })();
