/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { ComponentPropsWithoutRef } from "react"
import { GithubIcon } from "./icons/githubIcon"
import Link from "next/link" // Import the Link component from the 'next/link' library
import { LinkedinIcon } from "./icons/linkedinIcon"
import { Section } from "./Section"
import { cn } from "@/lib/utils"

const Code = ({className,...props}: ComponentPropsWithoutRef <'span'> ) => {
  return (
    <span className={cn("bg-accent/30 font-mono border border-accent px-1 py-0.5  text-primary rounded-sm" , className) } {...props} />
  )
}

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2" >
        <h2 className="font-caption font-bold text-5xl text-primary "  >Vanessa Berardozzi</h2>
        <h3 className="text-3xl font-caption" >Back-End Developer </h3>
        <p  className="texte-base ">
         I&apos;m a back-end developer with a passion for creating and improving web applications. See my work on {""}
        <Link href=" https://github.com/vanessa-berardozzi ">
        <Code className="inline-flex items-center gap-1"> <GithubIcon size={16} className="inline"/> Github</Code> </Link>
         and connect with me on {""}
         <Link href="https://www.linkedin.com/in/vanessa-berardozzi/">
         <Code> <LinkedinIcon size={16} className="inline"/> Linkedin.  </Code>
         </Link>
        </p>
      </div>
      <div className="flex-[2] max-md m-auto ml-auto">
        <img
        src="https://media.licdn.com/dms/image/C5603AQFHZV4aKgBRDg/profile-displayphoto-shrink_200_200/0/1569423474125?e=1723680000&v=beta&t=AuJUAOgPWikmHWr5qkRGyu26kDFXAXe4oYTmFHVB3IE"
        className="w-full h-auto max-w-ws ma-md:w-56 rounded-full border border-accent/30" 
        alt="vanessa berardozzi's photo"
         />

      </div>

    </Section>
  )
}