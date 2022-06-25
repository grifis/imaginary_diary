<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="松本家架空日記" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                松本家架空日記
            </h2>
            [<a href='/diary/create'>create</a>]
        </template>
        
        <div v-for="diary in diaries">
            <hr>
            <div class='diary'>
                <h2 class='title'>
                    <a href="/diary/{{ diary.id }}">{{ diary.title }}</a>
                </h2>
                <h3 class='date'>{{ diary.year }}年</h3>
                <p class='body'>{{ diary.body }}</p>
            </div>
        </div>
        
    </BreezeAuthenticatedLayout>
</template>

<script>
export default {
    props:{
        diaries: {
            type: Array,
        }
    },
}
</script>