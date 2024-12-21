<template lang="pug">
.flex.flex-grow.justify-center
    .flex.gap-3.w-full.m-0.px-5.pt-5.pb-20.rounded-md.shadow-lg.bg-violet-50
        .flex.flex-col.m-0.p-0.justify-center
            n-button(quaternary circle @click="openLinkedin")
                template( #icon )
                    n-icon
                        LogoLinkedin
            n-button(quaternary circle @click="openYoutube")
                template( #icon )
                    n-icon
                        LogoYoutube
            n-button(quaternary circle @click="openGithub")
                template( #icon )
                    n-icon
                        LogoGithub
        .flex.flex-col.gap-5.m-0
            .flex.justify-between.gap-10.m-0
                .flex.gap-1.items-center.m-0
                    n-icon
                        Mail
                    h5 eng.mazri@gmail.com
                .flex.gap-5.items-center.justify-left.m-0
                    .flex.gap-1.items-center.m-0
                        n-icon
                            FileTrayFullSharp
                        h5.cursor-pointer Works
                    .flex.gap-1.items-center.m-0
                        n-icon
                            DocumentText
                        h5.cursor-pointer Resume

            .flex.flex-wrap.justify-evenly.items-center
                .flex.flex-col(class="w-1/2")
                    h1.drop-shadow-2xl.m-0 Mazri Abderrahmane
                    p.w-auto.px-10 I'm a highly motivated software developer with a passion for creating elegant and user-friendly solutions. I enjoy collaborating with cross-functional teams to achieve project goals.
                
                img.w-70.rounded-full(class="img" src="../assets/img.png")


</template>
<script lang="ts">
import {defineComponent} from "vue";
import { 
    FileTrayFullSharp,
    Mail,
    DocumentText, 
    LogoLinkedin,
    LogoYoutube,
    LogoGithub
} from '@vicons/ionicons5';

export default defineComponent({
    components: {
        Mail,
        FileTrayFullSharp,
        DocumentText,
        LogoLinkedin,
        LogoYoutube,
        LogoGithub
    },
    data(){
        return{
            
        }
    },
    mounted(){
    },
    methods:{
        openLinkedin(){
            window.open('https://www.linkedin.com/in/abderrahmane-mazri-4638a81b8/','_blank')
        },
        openYoutube(){
            window.open('https://www.youtube.com/channel/UCEA6IkK-4C5VUwLd0tgm0hw','_blank')
        },
        openGithub(){
            window.open('https://github.com/ENG-Mazri','_blank')
        }
    }
})
</script>