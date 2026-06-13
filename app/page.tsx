import Image from "next/image";
import heroTools from "../barber-shop/pictures/tools-1.jpg.jpeg";
import interior1 from "../barber-shop/pictures/interior-1.jpg.jpeg";
import interior2 from "../barber-shop/pictures/interior-2.jpg.jpeg";
import chair1 from "../barber-shop/pictures/chair-1.jpg.jpeg";
import work1 from "../barber-shop/pictures/barber-work-1.jpg.jpeg";
import work2 from "../barber-shop/pictures/barber-work-2.jpg.jpeg";
import work3 from "../barber-shop/pictures/barber-work-3.jpg.jpeg";
import beard1 from "../barber-shop/pictures/beard-service-1.jpg.jpeg";
import beard2 from "../barber-shop/pictures/beard-service-2.jpg.jpeg";

// Real Royal Barbering business data — barber-shop/business-info/info.md.txt
const PHONE_DISPLAY = "697 353 538";
const PHONE_TEL = "+48697353538";
const WHATSAPP_URL =
  "https://wa.me/48697353538?text=" +
  encodeURIComponent(
    "Dzień dobry! Chciałbym umówić wizytę w Royal Barbering."
  );
const BOOKSY_URL = "https://royalbarbering.booksy.com";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Royal Barbering, Konopnickiej 5, 58-500 Jelenia Góra");

const services = [
  { name: "Strzyżenie klasyczne", desc: "Klasyczne cięcie maszynką i nożyczkami.", price: "60 zł" },
  { name: "Strzyżenie ze stylizacją", desc: "Cięcie wykończone stylizacją na gotowo.", price: "80 zł" },
  { name: "Combo — włosy + broda", desc: "Pełne strzyżenie i modelowanie brody.", price: "100 zł", popular: true },
  { name: "Combo + Cover", desc: "Combo z kamuflażem i wykończeniem premium.", price: "160 zł" },
  { name: "Golenie głowy", desc: "Gładkie golenie brzytwą z pielęgnacją.", price: "80 zł" },
  { name: "Broda — modelowanie", desc: "Trymowanie, konturowanie i golenie brzytwą.", price: "80 zł" },
  { name: "Strzyżenie dziecięce", desc: "Spokojne, dokładne cięcie dla najmłodszych.", price: "60 zł" },
  { name: "Combo + Sauna Parowa", desc: "Combo z relaksującym rytuałem sauny parowej.", price: "150 zł" },
  { name: "Cover siwizny", desc: "Subtelne tonowanie i kamuflaż siwizny.", price: "120 zł" },
];

const signature = {
  name: "Royal Treatment",
  desc: "Nasz autorski rytuał: strzyżenie, pielęgnacja brody, gorący ręcznik, golenie brzytwą i stylizacja od początku do końca.",
  price: "190 zł",
};

const hours = [
  { day: "Poniedziałek", time: "09:00 – 17:00" },
  { day: "Wtorek", time: "09:00 – 17:00" },
  { day: "Środa", time: "09:00 – 17:00" },
  { day: "Czwartek", time: "09:00 – 17:00" },
  { day: "Piątek", time: "Zamknięte", closed: true },
  { day: "Sobota", time: "10:00 – 15:00" },
  { day: "Niedziela", time: "Zamknięte", closed: true },
];

const testimonials = [
  {
    name: "Marcin K.",
    quote:
      "Najlepszy barber w Jeleniej Górze. Adam to prawdziwy mistrz — wychodzisz jak nowo narodzony.",
    initial: "M",
  },
  {
    name: "Tomasz W.",
    quote:
      "Klimat wnętrza, dbałość o detal i golenie brzytwą na najwyższym poziomie. Polecam Royal Treatment!",
    initial: "T",
  },
  {
    name: "Łukasz P.",
    quote:
      "Piotr zawsze wie, czego potrzebuję. Profesjonalnie, punktualnie i w świetnej atmosferze. Wracam co miesiąc.",
    initial: "Ł",
  },
];

const gallery = [
  { img: interior1, alt: "Wnętrze Royal Barbering", span: "lg:col-span-2 lg:row-span-2" },
  { img: work1, alt: "Efekt strzyżenia — Royal Barbering" },
  { img: beard1, alt: "Modelowanie brody" },
  { img: chair1, alt: "Klasyczny fotel barberski" },
  { img: work2, alt: "Precyzyjne wykończenie fryzury" },
  { img: interior2, alt: "Stanowisko barberskie" },
  { img: beard2, alt: "Pielęgnacja brody brzytwą" },
  { img: work3, alt: "Stylizacja męska" },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen scroll-smooth bg-[#150d07] text-amber-50 antialiased selection:bg-amber-500 selection:text-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-amber-500/15 bg-[#150d07]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Royal Barbering — strona główna">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-400/25 to-amber-800/10 font-serif text-xl font-bold text-amber-300 shadow-inner shadow-black/50">
              R
            </span>
            <span className="flex flex-col leading-none">
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-base font-semibold tracking-[0.3em] text-transparent">
                ROYAL
              </span>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.45em] text-amber-100/50">
                Barbering
              </span>
            </span>
          </a>

          <div className="hidden gap-10 text-sm font-medium text-amber-100/70 md:flex">
            <a href="#services" className="transition-colors hover:text-amber-400">
              Usługi
            </a>
            <a href="#about" className="transition-colors hover:text-amber-400">
              Wnętrze
            </a>
            <a href="#reviews" className="transition-colors hover:text-amber-400">
              Opinie
            </a>
            <a href="#contact" className="transition-colors hover:text-amber-400">
              Kontakt
            </a>
          </div>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-900/40 transition-all hover:scale-105 hover:shadow-amber-500/40"
          >
            Rezerwacja
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c4a14_0%,transparent_42%),radial-gradient(circle_at_bottom_left,#3a230c_0%,transparent_48%),linear-gradient(to_bottom,#160e07,#241606)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-amber-300">
              Royal Barbering · Jelenia Góra
            </p>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl md:leading-[1.05]">
              Królewski styl,{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                rzemiosło barberskie.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-pretty text-base leading-7 text-amber-100/75 sm:text-lg sm:leading-8">
              Klasyczny barbering w ciepłym, drewnianym wnętrzu. Precyzyjne
              strzyżenie, pielęgnacja brody i golenie brzytwą — w wykonaniu
              mistrzów rzemiosła.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-center font-semibold text-black shadow-xl shadow-amber-900/40 transition-all hover:scale-105 hover:shadow-amber-500/50"
              >
                Zarezerwuj w Booksy
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-8 py-4 text-center font-semibold text-emerald-300 transition-all hover:scale-105 hover:bg-emerald-500 hover:text-white"
              >
                <span>💬</span> Napisz na WhatsApp
              </a>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-amber-400">4.9★</p>
                <p className="text-sm text-amber-100/50">średnia ocen</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">533</p>
                <p className="text-sm text-amber-100/50">opinii klientów</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">2</p>
                <p className="text-sm text-amber-100/50">mistrzów barberingu</p>
              </div>
            </div>
          </div>

          <div className="group rounded-[2rem] border border-amber-500/15 bg-amber-500/5 p-4 shadow-2xl backdrop-blur transition-all duration-500 hover:border-amber-500/35 hover:shadow-amber-900/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={heroTools}
                alt="Narzędzia barberskie Royal Barbering"
                fill
                preload
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Konopnickiej 5 · Jelenia Góra
                </p>
                <h2 className="mt-2 text-3xl font-bold">Royal Barbering</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-[#1c1108] px-6 py-20 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Cennik usług
          </p>

          <h2 className="mb-10 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Nasze usługi
          </h2>

          {/* Signature service */}
          <div className="mb-8 grid items-center gap-8 overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent p-8 md:grid-cols-[1.5fr_1fr] md:p-10">
            <div>
              <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                Rytuał sygnaturowy
              </span>
              <h3 className="mb-3 text-3xl font-bold">{signature.name}</h3>
              <p className="max-w-xl text-amber-100/70">{signature.desc}</p>
            </div>
            <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
              <p className="text-5xl font-bold text-amber-400">{signature.price}</p>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-900/40 transition-all hover:scale-105"
              >
                Rezerwuj
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.name}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  s.popular
                    ? "border-amber-500/40 bg-gradient-to-b from-amber-500/12 to-transparent hover:border-amber-500/60 hover:shadow-amber-900/30"
                    : "border-amber-500/10 bg-gradient-to-b from-amber-50/[0.04] to-transparent hover:border-amber-500/35 hover:shadow-amber-900/20"
                }`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {s.popular && (
                  <span className="mb-3 inline-block rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Najczęściej wybierane
                  </span>
                )}
                <h3 className="mb-2 text-xl font-bold">{s.name}</h3>
                <p className="mb-6 text-sm text-amber-100/55">{s.desc}</p>
                <p className="text-2xl font-bold text-amber-400">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE — interior-1 full bleed */}
      <section id="about" className="relative">
        <div className="relative min-h-[60vh] overflow-hidden">
          <Image
            src={interior1}
            alt="Ciepłe, drewniane wnętrze Royal Barbering"
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#150d07] via-[#150d07]/70 to-[#150d07]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#150d07] via-transparent to-[#150d07]/40" />
          <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-24">
            <div className="max-w-xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
                Nasze wnętrze
              </p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Ciepłe drewno, mosiądz i światło świec
              </h2>
              <p className="text-lg leading-8 text-amber-100/80">
                Royal Barbering to miejsce stworzone z dbałością o każdy detal —
                naturalne drewno, skórzane fotele i atmosfera klasycznego
                zakładu barberskiego. Tu przychodzisz nie tylko po fryzurę, ale
                po chwilę dla siebie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
                  Adam Lebica
                </span>
                <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
                  Piotr Bystrzycki
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#150d07] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Galeria
          </p>

          <h2 className="mb-10 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Nasze realizacje
          </h2>

          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
            {gallery.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-amber-500/10 ring-1 ring-inset ring-transparent transition-all duration-500 hover:border-amber-500/30 hover:ring-amber-500/25 hover:shadow-2xl hover:shadow-amber-900/30 sm:rounded-3xl ${
                  item.span ?? ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <p className="absolute bottom-4 left-4 right-4 translate-y-2 text-sm font-medium text-amber-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="relative bg-[#1c1108] px-6 py-20 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
                Opinie
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Co mówią klienci
              </h2>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 px-6 py-4 text-center">
              <p className="text-3xl font-bold text-amber-400">4.9 / 5</p>
              <p className="text-sm text-amber-100/60">na podstawie 533 opinii</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group rounded-3xl border border-amber-500/10 bg-gradient-to-b from-amber-50/[0.04] to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-900/20"
              >
                <p className="mb-4 text-amber-400">★★★★★</p>
                <p className="mb-6 text-lg leading-relaxed text-amber-100/80">
                  „{t.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/20 font-bold text-amber-300">
                    {t.initial}
                  </span>
                  <h3 className="font-bold">{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative overflow-hidden bg-[#150d07] px-6 py-20 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Rezerwacja
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Zarezerwuj wizytę
          </h2>

          <p className="mb-12 text-lg text-amber-100/65">
            Wybierz termin online w Booksy lub napisz do nas bezpośrednio na
            WhatsApp — odpowiadamy szybko.
          </p>

          <div className="rounded-[2rem] border border-amber-500/15 bg-gradient-to-b from-amber-50/[0.05] to-transparent p-8 shadow-2xl backdrop-blur md:p-12">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-6 font-semibold text-black shadow-xl shadow-amber-900/40 transition-all hover:scale-[1.03] hover:shadow-amber-500/50"
              >
                <span className="text-2xl">📅</span>
                Rezerwacja online
                <span className="text-xs font-normal text-black/70">
                  przez Booksy
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-6 py-6 font-semibold text-emerald-300 transition-all hover:scale-[1.03] hover:bg-emerald-500 hover:text-white"
              >
                <span className="text-2xl">💬</span>
                WhatsApp
                <span className="text-xs font-normal opacity-70">
                  {PHONE_DISPLAY}
                </span>
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="flex flex-col items-center gap-2 rounded-2xl border border-amber-500/25 bg-amber-500/10 px-6 py-6 font-semibold text-amber-200 transition-all hover:scale-[1.03] hover:bg-amber-500 hover:text-black"
              >
                <span className="text-2xl">📞</span>
                Zadzwoń
                <span className="text-xs font-normal opacity-70">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-[#1c1108] px-6 py-20 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Kontakt
          </p>

          <h2 className="mb-10 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Odwiedź nas
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-amber-500/12 bg-gradient-to-b from-amber-50/[0.04] to-transparent p-8 transition-all duration-300 hover:border-amber-500/30">
              <h3 className="mb-6 text-2xl font-bold">Dane kontaktowe</h3>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 flex items-start gap-3 text-amber-100/80 transition-colors hover:text-amber-400"
              >
                <span className="text-amber-400">📍</span>
                <span>
                  Konopnickiej 5
                  <br />
                  58-500 Jelenia Góra
                </span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mb-4 flex items-center gap-3 text-amber-100/80 transition-colors hover:text-amber-400"
              >
                <span className="text-amber-400">📞</span> {PHONE_DISPLAY}
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-100/80 transition-colors hover:text-amber-400"
              >
                <span className="text-amber-400">🗓️</span> royalbarbering.booksy.com
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-200 transition-all hover:scale-[1.02] hover:bg-amber-500 hover:text-black"
              >
                <span>📍</span> Zobacz na mapie Google
              </a>
            </div>

            <div className="rounded-3xl border border-amber-500/12 bg-gradient-to-b from-amber-50/[0.04] to-transparent p-8 transition-all duration-300 hover:border-amber-500/30">
              <h3 className="mb-6 text-2xl font-bold">Godziny otwarcia</h3>

              <div className="space-y-2.5 text-amber-100/80">
                {hours.map((h, i) => (
                  <p
                    key={h.day}
                    className={`flex justify-between ${
                      i < hours.length - 1 ? "border-b border-amber-500/10 pb-2.5" : ""
                    }`}
                  >
                    <span>{h.day}</span>
                    <span
                      className={`font-medium ${
                        h.closed ? "text-amber-500/70" : "text-amber-50"
                      }`}
                    >
                      {h.time}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/12 to-transparent p-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-bold">Gotowy na królewski styl?</h3>
              <p className="mt-2 text-amber-100/70">
                Zarezerwuj termin online już dziś.
              </p>
            </div>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 font-semibold text-black shadow-xl shadow-amber-900/40 transition-all hover:scale-105 hover:shadow-amber-500/50"
            >
              Zarezerwuj wizytę
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-500/15 bg-[#150d07] px-6 py-10 text-center text-sm text-amber-100/40">
        <p>
          <span className="font-semibold text-amber-300">Royal Barbering</span> ·
          Konopnickiej 5, 58-500 Jelenia Góra · {PHONE_DISPLAY}
        </p>
      </footer>
    </main>
  );
}
