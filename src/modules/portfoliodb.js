import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1,
            title: 'Longhorn BBQ',
            description: 'In this project me and my team designed and developed the website for Longhorn BBQ. We also designed a new logo for the brand. In relation to the project we made a report, documenting every step of the process from start to finish.',
            image: 'src/assets/longhorn.jpg',
            category: 'Web development & graphic design',
            link: 'https://www.linkedin.com',
            tech: 'CSS, HTML, GitHub, Photoshop, Illustrator, Indesign, XD'
        },
        {
            id: 2,
            title: 'Stopchildlabour',
            description: 'In this project i worked on a re-branding for an international non-profit organizatiion called Stopchildlabour. My part in this was creating a new and more appealing logo than the previous one, and to make content for promotion on the internet.',
            image: 'src/assets/stopchildlabour.jpg',
            category: 'Graphic design',
            link: 'https://www.linkedin.com',
            tech: 'Illustrator, Photoshop'
        },
        {
            id: 3,
            title: 'Esbjerg Sommercup',
            description: 'In this project me and my team created a marketing campaign for Esbjerg Sommercup. The project consists of a variety of marketing material as well as the stategies regarding the campaing. Both video and photos are included as part of the material.',
            image: 'src/assets/esbjergsommercup.jpg',
            category: 'Photo & video production',
            link: 'https://www.linkedin.com',
            tech: 'Photoshop, Premiere Pro, After Effects'
        }
    ])

    return{
        state
    }
}




export default getPortfolio