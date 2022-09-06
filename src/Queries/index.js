
export const GET_DISCOUNTBANNERS = `
{
  allDiscountBanner {
    nodes {
      id
      discountBanner {
        headline
        expiration
        url
        actions
        image {
          mediaItemUrl
        }
      }
    }
  }
}`

export const GET_ALLCATEGORIES = `{
  productCategories(first: 20) {
    nodes {
      id
      name
      parentId
      description
      slug
      image {
        mediaItemUrl
      }
      products{
        nodes{
          id
        }
      }
    }
  }
}`

export const GET_ALLPRODUCTS = `
query GetAllProducts {
  products(first: 60) {
    nodes {
      ... on SimpleProduct {
        id
        name
        date
        attributes {
          nodes {
            options
            name
            id
          }
        }
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
        productCategories {
          nodes {
            name
            slug
          }
        }
        price
      }
      ... on VariableProduct {
        id
        name
        date
        attributes {
          nodes {
            options
            name
            id
          }
        }
        image {
          id
          mediaItemUrl
        }
        productCategories {
          nodes {
            name
            slug
          }
        }
        price
        galleryImages {
          nodes {
            id
            mediaItemUrl
          }
        }
        variations {
          nodes {
            price
            name
            id
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

export const GET_LASTREVIEWS = `
{
  products(where: {}) {
    edges {
      node {
        id
        name
        reviews(first: 1) {
          edges {
            rating
            node {
              id
              content
            }
          }
        }
      }
    }
  }
}
`

export const GET_ALLPOLICY = `query GetAllPolicy {
  allPolicy {
    nodes {
      policy {
        description
        fieldGroupName
        heading
        icon
      }
    }
  }
}`