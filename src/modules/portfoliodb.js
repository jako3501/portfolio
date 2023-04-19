import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Portfolio 1',
            description: 'Lorem ipsum dolor sit amet, liquam nisl',
            image: 'https://picsum.photos/200/300',
            category: 'Web',
            link: 'https://www.linkedin.com',
            tech: 'Vue, Tailwind, Firebase'
        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: 'Lorem ipsum dolor sit amet, liquam nisl',
            image: 'https://picsum.photos/200/300',
            category: 'Video',
            link: 'https://www.linkedin.com',
            tech: 'Adobe AfterEffects, Premier Pro'
        }
    ])

    return{
        state
    }
}




export default getPortfolio