<template lang="pug">
Layout
    .flex.flex-wrap.justify-evenly.items-center.w-full.gap-10.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }")
        .flex.flex-col.w-full.work-container.min-h-50.max-w-100.p-5.rounded-md.cursor-pointer
            h1.drop-shadow-2xl.m-0 bim blox.
            p.max-w-100.px-10 bim blox is an advanced platform designed to facilitate comprehensive IFC file management.

        .flex.flex-col.w-full.work-container.min-h-50.max-w-100.p-5.rounded-md.cursor-pointer
            h1.drop-shadow-2xl.m-0 DSE
            p.max-w-100.px-10 Design Space Explorer is web-app that allows architects to explore a design space using Generative Algorithm.

        .flex.flex-col.w-full.work-container.min-h-50.max-w-100.p-5.rounded-md.cursor-pointer
            h1.drop-shadow-2xl.m-0 cli-ifcjs
            p.max-w-100.px-10 cli-ifcjs is a CLI app (npm package) that helps BIM developers generate a simple IFC.js project templates.


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