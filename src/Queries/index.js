
export const GET_DISCOUNT_BANNERS = `
query NewQuery {
    allBanner {
      nodes {
        discount_banner {
          btnname
          discountdate
          fieldGroupName
          image
          title
          slug
        }
        id
      }
    }
  }
`

export const GET_CATEGORY = `query NewQuery {
    productCategories {
      nodes {
        id
        name
        parentId
      }
    }
  }`

export const GET_ALLPRODUCTS = `query NewQuery {
    products {
      edges {
        node {
          ... on SimpleProduct {
            id
            name
            price
          }
        }
      }
    }
  }`

