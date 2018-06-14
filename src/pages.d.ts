declare interface LandingPageProps {
  images: any
  sections: Array<Tile>
  lang: Lang
}

declare interface Tile {
  label: string
  to: string
  img: any
  lang?: Lang
}
