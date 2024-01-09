export function convertToLink({
  name,
  title,
  id
}: {
  name: string
  title: string
  id: number
}) {
  if (title) {
    const replaceTitle = title
      ?.toLowerCase()
      .replaceAll(/[^\w\s]/gi, '')
      .replaceAll(' ', '-')
    return `${id}-${replaceTitle}`
  }

  if (name) {
    const replaceName = name
      ?.toLowerCase()
      .replaceAll(/[^\w\s]/gi, '')
      .replaceAll(' ', '-')
    return `${id}-${replaceName.toLowerCase()}`
  }
}
