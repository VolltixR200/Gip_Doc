import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-white">
                    Ga&nbsp;
                    <code className="font-mono font-bold"><a href="/">Terug</a></code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <h1
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-white"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <p>2023/2024</p>
                    </h1>
                </div>
            </div>

            <div style={{ height: "40vh" }} className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 style={{ fontSize: "5vh" }}><a href="#" className="text-white">Smartschoolapplicatie</a></h1>
            </div>

            <div className="mb-32 grid gap-8 lg:grid-cols-1">
                <a
                    href="/img/dash.png"
                    target='_blank'
                    className="group block rounded-lg bg-white border border-gray-200 hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30 transition-all duration-300"
                    rel="noopener noreferrer"
                >
                    <div className="p-6">
                        {/* Plaats voor afbeelding */}
                        <Image src="/img/dash.png" alt="Afbeelding" width={1200} height={400} />
                    </div>
                    <div className="px-6 py-4">
                        <h2 className="mb-2 text-xl font-semibold text-white">Project Reflectie</h2>
                        <p className="text-white">
                            Ik ben trots op twee aspecten van ons project. Ten eerste is ons eindresultaat bevredigend, wat getuigt van de vaardigheden die we tijdens het traject hebben verworven. Ten tweede hebben we, ondanks de tegengekomen uitdagingen, erin geslaagd nieuwe talen te leren en beter te communiceren met de leerkrachten, wat onze totale ervaring heeft verrijkt.
                            Tijdens het project zijn we echter tegen enkele problemen aangelopen. Een belangrijk probleem was het tijdsbeheer. De tijd die we besteedden aan het onderdeel TCI nam veel meer tijd in beslag dan gepland, waardoor we lange tijd vast zaten. Achteraf gezien denk ik dat een betere planning deze vertragingen had kunnen voorkomen.
                            Wat betreft de samenwerking zijn er zowel positieve als negatieve aspecten geweest. Aan de positieve kant is het eindresultaat bevredigend en hebben we nieuwe talen geleerd en beter leren communiceren met onze leerkrachten. Dit heeft ons zeker vooruit geholpen. Aan de andere kant was er ruimte voor verbetering in ons tijdsbeheer. We hadden meer tijd moeten besteden aan de planning en coördinatie om efficiëntie te verhogen en problemen sneller op te lossen.
                            Over het geheel genomen hebben we een goed eindresultaat bereikt en veel geleerd en vooruitgang geboekt op verschillende gebieden. Toch zijn er altijd kansen voor verbetering, met name op het gebied van tijdsbeheer, probleemoplossing, samenwerking, communicatie en coördinatie.
                        </p>
                    </div>
                </a>
            </div>

            <div
                className="group block rounded-lg bg-white border border-gray-200 hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30 transition-all duration-300 p-6">
                <h2 className="mb-2 text-xl font-semibold text-white">Afsluiting</h2>
                <p className="m-0 text-sm opacity-75 text-white">
                    Met de Smartschool-applicatie hebben we de mogelijkheid om de attitudebeoordeling in het onderwijs te transformeren. Net zoals het versturen van een WhatsApp-bericht zo eenvoudig is, kunnen we nu ook de attitudes van leerlingen op een efficiënte en effectieve manier beoordelen. Door deze innovatieve benadering kunnen we de betrokkenheid van leerlingen vergroten, docenten waardevolle inzichten bieden en het onderwijsproces verder verbeteren. Laten we samen streven naar een toekomst waarin het evalueren van attitudes net zo moeiteloos is als het sturen van een bericht. Dit was mijn GIP, dank u wel!
                </p>
            </div>
        </main>
    );
}
