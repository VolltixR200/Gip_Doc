export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-transparent">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Ga&nbsp;
                    <code className="font-mono font-bold"><a href="/docs">Terug</a></code>
                </p>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <h1
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <p>2023/2024</p>
                    </h1>
                </div>
            </div>

            <div style={{height: "40vh"}}
                 className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 style={{fontSize: "6vh"}}>
                    <img style={{borderRadius:"50%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAAAD///+Tk5P8/Pxubm719fXNzc3s7Ozc3Nybm5uIiIji4uKwsLAuLi75+fnU1NSjo6NjY2NRUVGCgoKqqqpaWlq/v7/g4OB2dnbGxsa5ubkjIyM7OzsJCQlGRkYbGxtR4SmvAAACcElEQVR4nO3ZaVYbQQxFYWRssDHz4IAxZv+7DDlJA+6hSk1XRZLP/Vag96v69D05AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGSX1gfUNpN76xMqE1lbn1DXVkQerI+oafcxUE6tr6hp+WehPFqfUc9c/nq1PqSaxb+FZ9aH1LKSxpP1KXW8fQ6Uc+tb6th8LZQL62Nq2Mt31tfUsD5YeISfp89y6Mr6oOKuWwtvrA8q7Vba7qxPKuu9M/DYXoyX7kKZWR9V0n3PwON6Mc57F26tzyrnoXegyM76sGJOBxYurQ8r5XFgoMjc+rQyXgcHysL6tjLOhhfKyvq4Ep4SA4/jxeh/KRob6/Omu0gOFNlbHzhZZqD8sj5wqsvcQnm2PnGaq+xAuba+cZqb/EK5tT5yijvFQJF36zMnWOTnfXixPvPnZqqBEjiaKgfGjaZb7cKo0XSnHhg1mi71C2NG03l+1zcRo6nupWgEjKar/KoD4aLpW37ToXC/wDf5TS3Bouk+v6jD+uZx1vlBHaGiaTuH6kSKpu0cqhMomnZzqE6YaNqTQ3XCvBh9OVQnSDTtz6E61rfrpH9yp4WIpkM5VCdCNB3KoToBoulwDtVxH00TOVTHfTRN5VAd59E0nUN1rDekTXkpGq6jaS6H6niOpkUGeo6m+Ryq4zaaKnKojttoqsmhOk6jqS6H6viMpiVeiobLaKrNoToeo2nRgR6jqT6H6riLpiNyqI67aDomh+o4i6bjcqiOr2g6LofquIqmY3OojqNoOjqH6jj6Bf7zn9xpQX6BAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/H+/ASNrFaCFQOJnAAAAAElFTkSuQmCC" alt="Vercel Logo" width={200} height={200} />
                </h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
                <div
                    className="group rounded-lg border border-transparent bg-transparent p-8 shadow-lg transition-colors hover:border-gray-300 hover:bg-transparent dark:bg-transparent dark:hover:bg-gray-950">
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Inleiding:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        In september hadden we nog geen concrete plannen voor ons project. Dankzij een suggestie van meneer Vandesompele kregen we echter het idee om een website te ontwikkelen voor de leerkrachten van de eerste graad. Deze website zou hen helpen met het efficiënter en overzichtelijker bijhouden van attitude kaarten, een taak die zij tot dan toe voornamelijk op Excel en papier uitvoerden.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Ontwerpfase:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Het beslissen over het ontwerp van de website was soms uitdagend, maar uiteindelijk zijn we erin geslaagd om een functionele attitude-pagina te maken voor de leerkrachten.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Ontwikkelingsfase:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        In oktober begonnen we met een demo in Flask, aangezien we hier het vorige jaar uitgebreid mee hadden geoefend. We werkten aan deze versie tot januari.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Samenwerking en Obstakels:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        In januari startten we met het opstellen van de websitebestanden en probeerden we contact op te nemen met Smartschool voor samenwerking. Helaas werd dit verzoek afgewezen, waardoor we afhankelijk waren van de ICT-afdeling voor toegang tot de benodigde programma’s en informatie over de leerkrachten en hun lesroosters.
                    </p>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Van januari tot april wachtten we op een antwoord van ICT en volgden we stage. Tijdens deze stage leerden we React, wat ons deed besluiten om de programmeertaal van Flask naar React te veranderen. Dit vereiste veel werk, waaronder het verfraaien van de interface met CSS.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Hosting en Eindfase:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        In mei probeerden we de applicatie te hosten, wat ingewikkelder bleek dan verwacht. Onze oorspronkelijke keuze was Azure, maar vanwege trage toegang vanuit de ICT-afdeling moesten we andere oplossingen onderzoeken, zoals Firebase. Hoewel Firebase handig was voor hosting, voldeed het niet als database. Dit leidde tot veel aanpassingen en kostte ons veel tijd.
                    </p>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Uiteindelijk moesten we opnieuw van platform veranderen naar Vercel, wat een laatste wijziging in de programmeertaal naar Next.js vereiste. Ondanks deze tegenslagen is het ons gelukt om het project op tijd af te ronden.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Conclusie:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Dankzij doorzettingsvermogen en flexibiliteit is het ons gelukt om een bruikbare en efficiënte website te ontwikkelen voor de leerkrachten van de eerste graad. Deze website zal hen aanzienlijk helpen bij het bijhouden van attitude kaarten, waardoor zij meer tijd en energie kunnen besteden aan het onderwijs zelf.
                    </p>
                </div>
            </div>
        </main>
    );
}
