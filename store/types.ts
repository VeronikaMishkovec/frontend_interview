export interface CategoryType {
  title: string
  img: string
}

export type MainType = {
  auth: {
    refreshToken: string
  },
  category: {
    list: CategoryType[]
  }
}
