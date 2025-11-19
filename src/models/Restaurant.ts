class TipoRestaurant {
  infos: string[]
  category: string
  title: string
  nota: number
  image: string
  id: number

  constructor(
    infos: string[],
    category: string,
    title: string,
    nota: number,
    image: string,
    id: number
  ) {
    this.id = id
    this.infos = infos
    this.category = category
    this.title = title
    this.nota = nota
    this.image = image
  }
}

export default TipoRestaurant
