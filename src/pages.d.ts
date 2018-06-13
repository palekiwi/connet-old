declare interface LandingPageProps {
  images: any
  sections: Array<Tile>
  lang: Lang
}

declare interface Tile {
  title: string
  subtitle: string
  path: string
  img: any
}
