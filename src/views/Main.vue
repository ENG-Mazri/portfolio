<template lang="pug">
Layout
    .flex.flex-wrap.justify-evenly.items-center.gap-10.select-none.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }")
        .flex.flex-col.max-w-200
            h1.drop-shadow-2xl.m-0 Mazri Abderrahmane
            p.max-w-100.px-10 I'm a highly motivated software developer with a passion for creating elegant and user-friendly solutions. I enjoy collaborating with cross-functional teams to achieve project goals.

        img.max-w-70.rounded-full(class="img" src="../assets/img.png")



</template>
<script lang="ts">
import {defineComponent} from "vue";
import Layout from './Layout.vue';

export default defineComponent({
    components: { Layout },
    data(){
        return{
            
        }
    },
    mounted(){
    },
    methods:{

    }
})
</script>