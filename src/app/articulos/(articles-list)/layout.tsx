import SuggestCelebrities from "@/components/layouts/SuggestCelebrities"

export default function ArticulosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <SuggestCelebrities />
    </>
  )
}
