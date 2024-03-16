import React from 'react';

const Page = () => {
  return (
    <div className="help-center-page">
      <h1>Centrum Pomocy</h1>
      <p>
        Znajdź odpowiedzi na swoje pytania lub skontaktuj się z nami, jeśli
        potrzebujesz dalszej pomocy.
      </p>

      <div className="help-section">
        <h2>Jak korzystać z BIP?</h2>
        <div className="help-item">
          <h3>Przewodnik po BIP</h3>
          <p>
            Przewodnik krok po kroku, jak efektywnie korzystać z Biuletinu
            Informacji Publicznej, w tym jak znaleźć interesujące Cię
            informacje.
          </p>
        </div>
        <div className="help-item">
          <h3>Dostęp do dokumentów</h3>
          <p>
            Informacje o tym, jak uzyskać dostęp do dokumentów publicznych
            znajdujących się w BIP, w tym procedury wnioskowania o dostęp do
            niepublikowanych dokumentów.
          </p>
        </div>
      </div>

      <div className="help-section">
        <h2>Nawigacja i funkcjonalności</h2>
        <div className="help-item">
          <h3>Wyszukiwanie informacji</h3>
          <p>
            Porady dotyczące efektywnego wyszukiwania informacji w BIP, w tym
            wykorzystanie zaawansowanych funkcji wyszukiwarki.
          </p>
        </div>
        <div className="help-item">
          <h3>Zgłaszanie błędów</h3>
          <p>
            Procedura zgłaszania błędów znalezionych na stronach BIP oraz sposób
            śledzenia statusu zgłoszenia.
          </p>
        </div>
      </div>

      <div className="help-section">
        <h2>Wsparcie techniczne</h2>
        <div className="help-item">
          <h3>Kontakt z działem wsparcia</h3>
          <p>
            Informacje kontaktowe do działu wsparcia technicznego, w tym godziny
            pracy i preferowane metody kontaktu.
          </p>
        </div>
        <div className="help-item">
          <h3>FAQ – Najczęściej zadawane pytania</h3>
          <p>
            Odpowiedzi na najczęściej zadawane pytania przez użytkowników BIP,
            które mogą pomóc w rozwiązaniu Twojego problemu.
          </p>
        </div>
      </div>

      <div className="help-section">
        <h2>Bezpieczeństwo i ochrona danych</h2>
        <div className="help-item">
          <h3>Polityka prywatności</h3>
          <p>
            Informacje o tym, jak chronimy dane osobowe użytkowników oraz jakie
            masz prawa w związku z przetwarzaniem Twoich danych przez BIP.
          </p>
        </div>
        <div className="help-item">
          <h3>Zasady korzystania z serwisu</h3>
          <p>
            Szczegółowe zasady korzystania z Biuletinu Informacji Publicznej, w
            tym prawa i obowiązki użytkowników.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
