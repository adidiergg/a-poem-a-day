
import Link from 'next/link';
import { Button } from '~/components/ui/button';



export default function SignInPage(){
    return(
        <div className="flex flex-1 flex-col p-8 md:px-12 gap-1">
            
            <div className="flex flex-col gap-4">
              <h1 className="text-center text-xl font-semibold text-primary/90">
              Iniciar sesión
              </h1>
              <p className="text-sm text-center font-light text-primary/90">
              Cada día, descubre un nuevo poema. Regístrate para recibir contenido exclusivo.
              </p>

              <Button asChild>
                <Link href="/signup">Crear cuenta</Link>
              </Button>
            </div>
            <div className="flex">
              <span className="w-full border-t" /> 
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-primary/90">
                ¿Ya tienes una cuenta?
              </p>
              <Button variant="outline" asChild><Link href="/signin">Iniciar sesion</Link></Button>
            </div>
            
            
            
        </div>
    );
}