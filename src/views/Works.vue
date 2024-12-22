<template lang="pug">
Layout
    .flex.flex-wrap.justify-evenly.items-center.w-full.gap-10.select-none
        .flex.flex-col.work-container.min-h-60.max-w-90.p-5.rounded-md.cursor-pointer.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" @click="toBimBlox")
            h1.drop-shadow-2xl.m-0 bim blox.
            p.max-w-100.px-10 bim blox is an advanced platform designed to facilitate comprehensive IFC file management.

        .flex.flex-col.work-container.min-h-60.max-w-90.p-5.rounded-md.cursor-pointer.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" @click="toDSE")
            h1.drop-shadow-2xl.m-0 D S E
            p.max-w-100.px-10 Design Space Explorer is web-app that allows architects to explore a design space using Generative Algorithm.

        .flex.flex-col.work-container.min-h-60.max-w-90.p-5.rounded-md.cursor-pointer.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" @click="toCLI")
            h1.drop-shadow-2xl.m-0 cli-ifcjs
            p.max-w-100.px-10 cli-ifcjs is a CLI app (npm package) that helps BIM developers generate a simple IFC.js project templates.

        .flex.flex-col.work-container.min-h-60.max-w-90.p-5.rounded-md.cursor-pointer.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" @click="toAwatif")
            h1.drop-shadow-2xl.m-0 Awatif
            p.max-w-100.px-10 I contribute to Awatif, a web platform that empowers engineers by automating repetitive tasks through parametric modeling, leading to increased efficiency and productivity.


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
        toBimBlox(){
            // this.$router.push({name: 'bimblox.'})
            window.open('https://bimblox-021023.web.app/', "_blank");
        },
        toDSE(){
            window.open('https://www.youtube.com/watch?v=ZtRvm_P0C6w', "_blank");
        },
        toCLI(){
            window.open('https://www.youtube.com/watch?v=ZFogdJz8Rlk', "_blank");
        },
        toAwatif(){
            window.open('https://awatif.co/', "_blank");
        }

    }
})
</script>