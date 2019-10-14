# Random Beer App

Simple App to get random Beer. 

**Improviments needed**:
- Fetch image on home page. 
I've created two hooks to fetch data from API (useBeerData and useRandomBeerData) but react doesn't allow combine two hooks in the same component to fetch data  and throws an error saying that I am using too many hooks. This can be discussed in more details if needed. In the meanwhile, I will try to find a better solution to fix this issue.

Possible solutions:
- Don't use hooks to fetch data
- Create a separated method to get image

## Stack

- React
- Next.js
- Styled Components
- Typescript


### Installing dependencies

- `yarn`

### Running

- `yarn dev`
