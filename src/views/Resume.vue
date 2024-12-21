<template lang="pug">
Layout
    .flex.flex-col.justify-evenly.items-center.gap-5.duration-1500( v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }")
            
        .flex.flex-col.items-center.gap-7.justify-evenly.mx-10

            .flex.flex-col.gap-5.w-full.tech-container.p-5.rounded-md
                h3.drop-shadow-2xl.m-0.self-left Tech I use on daily basis
                .flex.flex-wrap.gap-2.w-full.justify-evenly.items-center.rounded-md
                    img.w-10(class="img" src="../assets/html.svg")
                    img.w-10(class="img" src="../assets/css.svg")
                    img.w-10(class="img" src="../assets/ts.svg")
                    img.w-10(class="img" src="../assets/vue.svg")
                    img.w-10(class="img" src="../assets/three.svg")
                    img.w-10(class="img" src="../assets/node.svg")
                    img.w-10(class="img" src="../assets/nest.svg")
                    img.w-10(class="img" src="../assets/electron.svg")
                    img.w-10(class="img" src="../assets/postman.svg")
                    img.w-10(class="img" src="../assets/vite.svg")
                    img.w-10(class="img" src="../assets/git.svg")
                    img.w-10(class="img" src="../assets/vscode.svg")

            .flex.flex-col.gap-5.w-full.tech-container.p-5.rounded-md
                h3.drop-shadow-2xl.m-0.self-left Tech I happen to use
                .flex.flex-wrap.gap-2.w-full.justify-evenly.items-center.rounded-md
                    img.w-10(class="img" src="../assets/nuxt.svg")
                    img.w-10(class="img" src="../assets/react.svg")
                    img.w-10(class="img" src="../assets/python.svg")
                    img.w-10(class="img" src="../assets/flask.svg")
                    img.w-10(class="img" src="../assets/sass.svg")
                    img.w-10(class="img" src="../assets/d3.svg")
                    img.w-10(class="img" src="../assets/p5.svg")
                    img.w-10(class="img" src="../assets/firebase.svg")
                    img.w-10(class="img" src="../assets/bash.svg")
                    img.w-10(class="img" src="../assets/mysql.svg")
                    img.w-10(class="img" src="../assets/postgres.svg")
                    img.w-10(class="img" src="../assets/sequelize.svg")
                    img.w-10(class="img" src="../assets/graphql.svg")
                    img.w-10(class="img" src="../assets/docker.svg")
                    img.w-10(class="img" src="../assets/jupyter.svg")

        .flex.gap-5.items-center
            //- Vue3Lottie(ref="finished" :animationData="downloadJSON" :height="100" :width="100" :loop="true" :auto-play="true")
            h2.cursor-pointer Download resume
            //- n-button(quaternary @click="downloadResume") Download resume
            //-     template( #icon )
            //-         n-icon
            //-             DocumentAttach
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { DocumentAttach } from '@vicons/ionicons5';
import Layout from './Layout.vue';
import { Vue3Lottie } from "vue3-lottie";
import downloadJSON from '../assets/download.json';

export default defineComponent({
    components: { Layout, Vue3Lottie, DocumentAttach },
    data(){
        return{
            downloadJSON
        }
    },
    mounted(){
    },
    methods:{
        downloadResume(){

        }
    }
})
</script>