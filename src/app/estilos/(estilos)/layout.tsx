import SuggestArticles from "@/components/layouts/SuggestArticles"

export default function EstilosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <SuggestArticles />
    </>
  )
}
