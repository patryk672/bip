export default function ContactForm() {
  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <p className="mt-1 text-sm leading-6 text-theme">
            Sprawdź czy powód kontaktu znajduje się na liście wyboru tematu. Z
            pewnością przyśpieszy to naszą odpowiedź. Jeśli nie, zaznacz opcję
            "Inny" i opisz dokładniej.
          </p>
        </div>

        <form className="shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 required"
                >
                  Adres e-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium leading-6 required"
                >
                  Temat
                </label>
                <div className="mt-2">
                  <select
                    id="subject"
                    name="subject"
                    autoComplete="subject"
                    required
                    className="block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                  >
                    <option>Temat 1</option>
                    <option>Temat 2</option>
                    <option>Temat 3</option>
                    <option>Inny (opisz poniżej)</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 required"
                >
                  Wiadomość
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="message"
                    rows={6}
                    required
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-text-primary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-2xl space-y-10 md:col-span-2 mt-8">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="dataProcessingConsent"
                        name="dataProcessingConsent"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 ring-brand-accent focus:ring-brand-accent"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="dataProcessingConsent"
                        className="font-medium required"
                      >
                        Zgoda na przetwarzanie danych
                      </label>
                      <p className="text-theme">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w
                        postaci adresu e-mail podanym w powyższym formularzu,
                        zgodnie z przepisami rozporządzenia Parlamentu
                        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                        2016 r. w sprawie ochrony osób fizycznych w związku z
                        przetwarzaniem danych osobowych i w sprawie swobodnego
                        przepływu takich danych oraz uchylenia dyrektywy
                        95/46/WE (ogólne rozporządzenie o ochronie danych), Dz.
                        Urz. UE z 4.5.2016 r. L 119, str. 1), w celu udzielenia
                        odpowiedzi na złożone zapytanie. Żądanie usunięcia
                        danych proszę kierować na adres dummy@bip.gov.pl.
                      </p>
                      <p className="text-theme">
                        Informujemy, że administratorem danych osobowych jest
                        Ministerstwo Cyfryzacji, z siedzibą przy ul. Królewskiej
                        27, 00-060 Warszawa, e-mail: dummy@bip.gov.pl, tel.:
                        (22) 581 93 99
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="submit"
              className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outring-brand-accent"
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
