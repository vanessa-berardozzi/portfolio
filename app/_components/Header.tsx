import { GithubIcon } from "@/app/_components/icons/githubIcon"
import Link from "next/link"
import { LinkedinIcon } from "@/app/_components/icons/linkedinIcon"
import { Section } from "./Section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Header = () => {
  return (

    <header className="py-4  bg-transparent">
      <Section className="flex items-baseline">
        < div className="flex-1"/>
        <ul className="flex items-center gap-2 " >
          <Link
            href="https://github.com/vanessa-berardozzi"
            target="_blank"
          className={cn(buttonVariants({variant: "ghost"}),"size-6 p-0 rounded-full") }
          >
            <GithubIcon size={24} className="text-foreground rounded-full" />
          </Link>

          <Link
            href="https://linkedin.com/in/vanessa-berardozzi"
            target="_blank"
          className={cn(buttonVariants({variant: "outline"}),"size-6 p-0") }
          >
            <LinkedinIcon size={24} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  )
}