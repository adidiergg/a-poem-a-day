import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Source_Sans_3 as FontSans} from "next/font/google"


const fontSans =  FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata = {
  title: "Poem daily",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable}`}>
      <body>
        <div className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2 ">
          <Link
        href="/"
        className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
      >
        <span className="text-2xl">Poem daily</span>
      </Link>
          <TRPCReactProvider>
            <main className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center lg:static lg:left-0 lg:top-0 lg:flex lg:translate-x-0 lg:translate-y-0">
               {children}
            </main> 
            <div className="container grid items-center gap-8 pb-8 pt-6 lg:py-6 max-w-lg">
              <Card>
                <CardHeader>

                </CardHeader>
                <CardContent>
                  <p>De estas calles que ahondan el poniente,
una habrá (no sé cuál) que he recorrido
ya por última vez, indiferente
y sin adivinarlo, sometido

a Quién prefija omnipotentes normas
y una secreta y rígida medida
a las sombras, los sueños y las formas
que destejen y tejen esta vida.

Si para todo hay término y hay tasa
y última vez y nunca más y olvido
¿quién nos dirá de quién, en esta casa,
sin saberlo nos hemos despedido?

Tras el cristal ya gris la noche cesa
y del alto de libros que una trunca
sombra dilata por la vaga mesa,
alguno habrá que no leeremos nunca.

Hay en el Sur más de un portón gastado
con sus jarrones de mampostería
y tunas, que a mi paso está vedado
como si fuera una litografía.

Para siempre cerraste alguna puerta
y hay un espejo que te aguarda en vano;
la encrucijada te parece abierta
y la vigila, cuadrifronte, Jano.

Hay, entre todas tus memorias, una
que se ha perdido irreparablemente;
no te verán bajar a aquella fuente
ni el blanco sol ni la amarilla luna.

No volverá tu voz a lo que el persa
dijo en su lengua de aves y de rosas,
cuando el ocaso, ante la luz dispersa,
quieras decir inolvidables cosas.

¿Y el incesante Ródano y el lago,
todo ese ayer sobre el cual hoy me inclino?
Tan perdido estará como Cartago
que con fuego y con sal borró el latino.

Creo en el alba oír un atareado
rumor de multitudes que se alejan;
son los que me han querido y olvidado;
espacio y tiempo y Borges ya me dejan.

</p>
                </CardContent>
                <CardFooter>

                </CardFooter>
              </Card>
            </div>
          </TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}
