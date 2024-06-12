import { GithubIcon } from "@/components/icons/githubIcon"
import { Section } from "./Section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LinkedinIcon } from "@/components/icons/linkedinIcon"

export const Header = () => {
  return (
    
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          vanessa-berardozzi.fr</h1>
        < div className="flex-1"/>
        <ul className="flex items-center gap-2 " >
          <Link 
            href="https://github.com/vanessa-berardozzi"
          className={cn(buttonVariants({variant: "outline"}),"size-6 p-0") } 
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>

          <Link 
            href="https://linkedin.com/vanessa-berardozzi"
          className={cn(buttonVariants({variant: "outline"}),"size-6 p-0") } 
          >
            <LinkedinIcon size={20} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  )
}