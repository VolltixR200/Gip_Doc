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
                    <img style={{borderRadius:"50%"}} src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/30307/images/ZsUnCVKRSeSWIZQgQvJa_backward_forward.png" width={400} height={400} />
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
                        In januari startte we met het opstellen van de websitebestanden en probeerden we contact op te nemen met Smartschool voor samenwerking. Helaas werd dit verzoek afgewezen, waardoor we afhankelijk waren van de ICT-afdeling voor toegang tot de benodigde programma’s en informatie over de leerkrachten en hun lesroosters.
                    </p>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Van januari tot april wachtten we op een antwoord van ICT en volgden we stage. Tijdens deze stage leerden we <a
                        href="/docs/react" style={{textDecoration:"underline", color:'blue'}}>React</a>, wat ons deed
                        besluiten om de programmeertaal van Flask naar React te veranderen. Dit vereiste veel werk,
                        waaronder het verfraaien van de interface met CSS.
                    </p>
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        Hosting en Eindfase:
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        In mei probeerden we de applicatie te hosten, wat ingewikkelder bleek dan verwacht. Onze oorspronkelijke keuze was Microsoft Azure, maar vanwege trage toegang vanuit de ICT-afdeling en errors die we niet opgelost kregen moesten we andere oplossingen onderzoeken, zoals Firebase. Hoewel Firebase handig was voor hosting van <a
                        href="/docs/react" style={{textDecoration:"underline", color:'blue'}}>React</a> front-end, voldeed het niet als back-end. Dit leide tot veel aanpassingen en koste ons veel tijd.
                    </p>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Uiteindelijk moesten we opnieuw van platform veranderen naar <a style={{textDecoration:"underline", color:'blue'}} href="/docs/vercel">Vercel</a>, wat een laatste wijziging in de programmeertaal naar <a
                        href="/docs/nextjs" style={{textDecoration:"underline", color:'blue'}}>Next.js</a> vereiste. Ondanks deze tegenslagen is het ons gelukt om het project op tijd af te ronden.
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
