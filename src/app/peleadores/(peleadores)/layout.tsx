import SuggestArticles from "@/components/layouts/SuggestArticles"

export default function PeleadoresLayout({
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
