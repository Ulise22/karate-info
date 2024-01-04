import SuggestArticles from "@/components/layouts/SuggestArticles"

export default function FamososLayout({
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
