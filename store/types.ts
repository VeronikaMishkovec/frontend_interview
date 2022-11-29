export interface CategoryType {
  title: string
  img: string
  _id: string
}

export type MainType = {
  auth: {
    refreshToken: string
  },
  category: {
    list: CategoryType[]
  }
}
