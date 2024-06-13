import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { SignUpForm } from '../_components/signup-form';


export default function SignUpPage(){

    return(
        <div className="flex flex-1 flex-col p-8 md:px-12 gap-3">
            <SignUpForm />
                      
        </div>
    );
}