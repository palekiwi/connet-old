declare interface LandingPageProps {
  images: any
  sections: Array<Tile>
}

declare interface Tile {
  title: string
  subtitle: string
  basis?: string
  path: string
  img: any
}
