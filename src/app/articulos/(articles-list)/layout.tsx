import SuggestArticles from "@/components/layouts/SuggestArticles"

export default function ArticulosLayout({
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
