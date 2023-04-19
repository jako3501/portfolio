<template>
    <div class="porfolio-item-container">
        
            <div v-for="item in state" :key="item" class="portfolio-item">
                <p class="p-category" :class="item.category">{{ item.category }}</p>
                <img :src="item.image" alt="item image">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <a :href="item.link">LinkedIn</a>
            </div>
        
    </div>
</template>



<script setup>
import portfoliodb from '../modules/portfoliodb'

const { state } = portfoliodb()

</script>


<style scoped>
.p-category {
    font-weight: 700;
    text-transform: uppercase;
}

.Web {
    color: #e17821;
    padding-left: 5px;
    border-left: 3px solid #e17821;
}

.Video {
    color: #3fc914;
    padding-left: 5px;
    border-left: 3px solid #3fc914;
}

.porfolio-item-container {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
}

.portfolio-item {
    border: 2px solid #ffffff;
    margin: 10px;
    
}
</style>