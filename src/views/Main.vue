<template lang="pug">
Layout
    .flex.flex-wrap.justify-evenly.items-center.gap-10.select-none.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }")
        .flex.flex-col.max-w-200
            h1.drop-shadow-2xl.m-0 Mazri Abderrahmane
            //- p.max-w-100.px-10 I'm a highly motivated software developer with a passion for creating elegant and user-friendly solutions. I enjoy collaborating with cross-functional teams to achieve project goals.
            n-highlight.max-w-100.px-5(
                class="sm:px-8"
                :text="text"
                :patterns="patterns"
                :highlight-style="{ color: '#646e68', background: 'none', 'font-weight': 'bold'}"
            )

        img.max-w-60.rounded-full(class="img sm:max-w-70" src="../assets/img.png")



</template>
<script lang="ts">
import {defineComponent} from "vue";
import Layout from './Layout.vue';

export default defineComponent({
    components: { Layout },
    data(){
        return{
            text: "I'm a highly motivated software developer with a passion for creating elegant and user-friendly solutions. I enjoy collaborating with cross-functional teams to achieve project goals.",
            patterns: ['motivated', 'elegant', 'user-friendly', 'collaborating', 'goals'],
        }
    },
    mounted(){
    },
    methods:{

    }
})
</script>