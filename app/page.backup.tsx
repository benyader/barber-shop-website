export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <h2 className="text-xl font-bold text-amber-500">
      BARBER
    </h2>

    <div className="hidden gap-8 md:flex">
      <a href="#services">Usługi</a>
      <a href="#about">O nas</a>
      <a href="#contact">Kontakt</a>
    </div>

    <a
      href="tel:+48123456789"
      className="rounded-full bg-amber-500 px-5 py-2 font-semibold text-black"
    >
      Rezerwacja
    </a>
  </div>
</nav>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#a16207_0%,transparent_35%),linear-gradient(to_bottom,#0a0a0a,#171717)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-500">
              Premium Barber Studio
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Styl, który robi pierwsze wrażenie.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-neutral-300">
              Profesjonalne strzyżenie, pielęgnacja brody i klasyczny barbering
              w nowoczesnym wydaniu.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+48123456789"
                className="rounded-full bg-amber-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-amber-400"
              >
                Zarezerwuj wizytę
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Zobacz usługi
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="flex aspect-[4/5] items-end rounded-[1.5rem] bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent),url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                  Since 2026
                </p>
                <h2 className="mt-2 text-3xl font-bold">Barber Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
  id="services"
  className="bg-neutral-900 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-500">
      Usługi
    </p>

    <h2 className="mb-12 text-5xl font-bold">
      Nasze usługi
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <h3 className="mb-4 text-2xl font-bold">
          Strzyżenie
        </h3>

        <p className="mb-6 text-neutral-400">
          Klasyczne oraz nowoczesne fryzury.
        </p>

        <p className="text-3xl font-bold text-amber-500">
          70 zł
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <h3 className="mb-4 text-2xl font-bold">
          Broda
        </h3>

        <p className="mb-6 text-neutral-400">
          Modelowanie i pielęgnacja brody.
        </p>

        <p className="text-3xl font-bold text-amber-500">
          40 zł
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <h3 className="mb-4 text-2xl font-bold">
          Pakiet Premium
        </h3>

        <p className="mb-6 text-neutral-400">
          Włosy + broda + stylizacja.
        </p>

        <p className="text-3xl font-bold text-amber-500">
          100 zł
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-500">
      Galeria
    </p>

    <h2 className="mb-12 text-5xl font-bold">
      Nasze realizacje
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="h-80 rounded-3xl bg-neutral-800"></div>

      <div className="h-80 rounded-3xl bg-neutral-800"></div>

      <div className="h-80 rounded-3xl bg-neutral-800"></div>

    </div>

  </div>
</section>

<section className="bg-neutral-950 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-500">
      Opinie
    </p>

    <h2 className="mb-12 text-5xl font-bold">
      Co mówią klienci
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <p className="mb-6 text-neutral-300">
          Najlepszy barber w mieście.
        </p>

        <h3 className="font-bold">
          Adam
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <p className="mb-6 text-neutral-300">
          Profesjonalna obsługa i świetny klimat.
        </p>

        <h3 className="font-bold">
          Michał
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
        <p className="mb-6 text-neutral-300">
          Zawsze wracam.
        </p>

        <h3 className="font-bold">
          Kamil
        </h3>
      </div>

    </div>

  </div>
</section>

<section
  id="contact"
  className="bg-neutral-900 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-500">
      Kontakt
    </p>

    <h2 className="mb-12 text-5xl font-bold">
      Umów wizytę
    </h2>

    <div className="grid gap-8 md:grid-cols-2">

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

        <h3 className="mb-4 text-2xl font-bold">
          Dane kontaktowe
        </h3>

        <p className="mb-3">
          📞 +48 123 456 789
        </p>

        <p className="mb-3">
          📍 Warszawa
        </p>

        <p>
          ✉️ barber@email.com
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

        <h3 className="mb-4 text-2xl font-bold">
          Godziny pracy
        </h3>

        <p>Pon-Pt: 9:00 - 20:00</p>
        <p>Sobota: 10:00 - 18:00</p>
        <p>Niedziela: Zamknięte</p>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}