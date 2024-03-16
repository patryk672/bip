import React from 'react';

const Page = () => {
  return (
    <div className="faq-page">
      <h1>Często Zadawane Pytania (FAQ)</h1>
      <div className="faq-section">
        <h2>Ogólne Informacje</h2>
        <div className="faq-item">
          <h3>Co to jest Biuletin Informacji Publicznej?</h3>
          <p>
            Biuletin Informacji Publicznej (BIP) to oficjalny system publikacji
            informacji publicznych, utworzony w celu zapewnienia obywatelom
            dostępu do informacji o działalności organów władzy publicznej i
            zarządzania publicznego.
          </p>
        </div>
        <div className="faq-item">
          <h3>Jak mogę znaleźć interesujące mnie informacje?</h3>
          <p>
            Informacje w BIP są uporządkowane tematycznie i dostępne przez menu
            główne oraz wyszukiwarkę. Zachęcamy do korzystania z obu metod w
            celu szybkiego znalezienia potrzebnych danych.
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Dostęp do Dokumentów</h2>
        <div className="faq-item">
          <h3>Jak uzyskać dostęp do dokumentów publicznych?</h3>
          <p>
            Dokumenty publiczne są dostępne dla każdego w sekcji "Dokumenty"
            naszej strony. Możesz również złożyć wniosek o udostępnienie
            dokumentów, jeśli nie znajdziesz ich w BIP.
          </p>
        </div>
        <div className="faq-item">
          <h3>Czy dostęp do wszystkich dokumentów jest bezpłatny?</h3>
          <p>
            Tak, dostęp do dokumentów w ramach BIP jest zasadniczo bezpłatny.
            Mogą jednak wystąpić opłaty związane z wydaniem kopii dokumentów w
            formie papierowej.
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Zgłaszanie Problemów</h2>
        <div className="faq-item">
          <h3>Na jakie problemy mogę natrafić podczas korzystania z BIP?</h3>
          <p>
            Problemy mogą obejmować trudności z dostępem do informacji, błędy na
            stronie lub problemy z wyświetlaniem niektórych dokumentów. W
            przypadku problemów technicznych prosimy o kontakt z naszym działem
            wsparcia.
          </p>
        </div>
        <div className="faq-item">
          <h3>Jak mogę zgłosić problem lub uwagę?</h3>
          <p>
            Jeśli napotkasz problem lub masz uwagi dotyczące działania BIP,
            prosimy o kontakt za pomocą formularza dostępnego w sekcji "Kontakt"
            lub bezpośrednio mailowo na adres wsparcia technicznego.
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Wsparcie i Pomoc</h2>
        <div className="faq-item">
          <h3>Gdzie mogę znaleźć pomoc przy korzystaniu z BIP?</h3>
          <p>
            Oferujemy instrukcje i poradniki dostępne w sekcji "Pomoc", które
            mogą ułatwić nawigację po BIP i dostęp do informacji. Dla bardziej
            złożonych problemów służy wsparcie techniczne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
