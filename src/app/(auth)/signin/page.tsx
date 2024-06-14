
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { SignInForm } from '../_components/signin-form';


export default function SignInPage(){
 
    return(
        <div className="flex flex-1 flex-col p-8 md:px-12 gap-1">
            <SignInForm />
        </div>
    );
}