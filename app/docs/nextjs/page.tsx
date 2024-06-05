import Image from "next/image";

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
                <h1 style={{fontSize: "6vh"}}><img style={{borderRadius:"50%"}} src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt=""/></h1>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
                <div
                    className="group rounded-lg border border-transparent bg-transparent p-8 shadow-lg transition-colors hover:border-gray-300 hover:bg-transparent dark:bg-transparent dark:hover:bg-gray-950">
                    <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        NextJs Documentatie
                    </h2>
                    <p className="mb-4 text-base text-gray-700 dark:text-gray-300">
                        Next.js is een React-framework dat verschillende extra functies mogelijk maakt, waaronder
                        server-side rendering en het genereren van statische websites.
                    </p>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Installatie:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">Om een nieuwe Next.js-app te maken,
                            voert u uit:</p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            npx create-next-app@latest
                        </code>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Bestandsstructuur:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            In een Next.js-project worden pagina's gemaakt in de <code
                            className="text-gray-900 dark:text-gray-100">app</code> directory. Bijvoorbeeld, <code
                            className="text-gray-900 dark:text-gray-100">app/page.jsx</code> zou uw startpagina zijn.
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Routing:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Next.js gebruikt bestandsgebaseerde routing. Het maken van een nieuw bestand in de <code
                            className="text-gray-900 dark:text-gray-100">app</code> directory voegt automatisch een
                            nieuwe route toe aan uw applicatie.
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Server-side Rendering
                            (SSR):</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Met SSR wordt een pagina bij elke aanvraag op de server gerenderd. Om SSR te gebruiken,
                            exporteert u een asynchrone functie genaamd <code
                            className="text-gray-900 dark:text-gray-100">getServerSideProps</code> van uw pagina.
                            Bijvoorbeeld:
                        </p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            {`export async function getServerSideProps(context) { \n return { props: {}, // wordt als props doorgegeven aan de pagina component }; \n}`}
                        </code>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Statische Generatie:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Next.js kan pagina's vooraf renderen tijdens de buildtijd. Om statische generatie te
                            gebruiken, exporteert u een asynchrone functie genaamd <code
                            className="text-gray-900 dark:text-gray-100">getStaticProps</code> van uw pagina.
                            Bijvoorbeeld:
                        </p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            {`export async function getStaticProps() { \n return { props: {}, // wordt als props doorgegeven aan de pagina component }; \n}`}
                        </code>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">API Routes:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            U kunt API-routes maken in de <code
                            className="text-gray-900 dark:text-gray-100">app/api</code> directory. Bijvoorbeeld, <code
                            className="text-gray-900 dark:text-gray-100">app/api/hello.jsx</code> zou toegankelijk zijn
                            op <code className="text-gray-900 dark:text-gray-100">/api/hello</code>. Hier is een
                            voorbeeld:
                        </p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            {`export default function handler(req, res) { \n res.status(200).json({ text: 'Hello' }); \n}`}
                        </code>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">CSS en Sass:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Next.js ondersteunt CSS en Sass standaard. U kunt CSS-bestanden rechtstreeks in uw pagina's
                            of componenten importeren. Bijvoorbeeld:
                        </p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            {`import '../styles/globals.css'; \n function MyApp({ Component, pageProps }) { \n return <Component {...pageProps} />; \n} \n export default MyApp;`}
                        </code>
                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Beeldoptimalisatie:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Next.js bevat een Image-component die beelden op aanvraag optimaliseert. Om het te
                            gebruiken, importeert u de Image-component en specificeert u de src, breedte en hoogte.
                            Bijvoorbeeld:
                        </p>
                        <pre className="block bg-gray-800 text-white p-2 rounded mb-4">
    {`import Image from 'next/image'; \n function HomePage() { \n return ( \n <div> \n <Image src="/me.png" alt="Afbeelding van de auteur" width={500} height={500} /> \n </div> \n ); \n} \n export default HomePage;`}
</pre>

                    </div>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">Omgevingsvariabelen:</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            Next.js ondersteunt omgevingsvariabelen. Maak een <code
                            className="text-gray-900 dark:text-gray-100">.env.local</code> bestand in de hoofdmap van uw
                            project om omgevingsspecifieke variabelen toe te voegen. Bijvoorbeeld:
                        </p>
                        <code className="block bg-gray-800 text-white p-2 rounded mb-4">
                            {`NEXT_PUBLIC_API_URL=https://api.example.com`}
                        </code>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            U kunt deze variabelen vervolgens in uw code gebruiken met <code
                            className="text-gray-900 dark:text-gray-100">process.env.NEXT_PUBLIC_API_URL</code>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
