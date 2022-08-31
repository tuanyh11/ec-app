
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

export const GET_ALLCATEGORIES = `query NewQuery {
    productCategories {
      nodes {
        id
        name
        parentId
        description
        image {
          mediaItemUrl
        }
      }
    }
  }`

export const GET_ALLPRODUCTS = `
query GetAllProducts {
  products {
    nodes {
      ... on SimpleProduct {
        id
        name
        image {
          id
          mediaItemUrl
        }
        galleryImages {
          nodes {
            id
            mediaItemUrl
          }
        }
        price
      }
      ... on VariableProduct {
        id
        name
        image {
          id
          mediaItemUrl
        }
        price
        galleryImages {
          nodes {
            id
            mediaItemUrl
          }
        }
      }
    }
  }
}
`

export const GET_ALLPAGES = `
query GetAllPage {
  allPages:allPagesCategories {
    pages:nodes {
      id
      name
      slug
    }
  }
}
`
export const GET_ALLBANNERS = `
query GetAllCategories {
  allBanner {
    nodes {
      banner {
        image {
          mediaItemUrl
        }
        url
        headline
        url
      }
    }
  }
}`