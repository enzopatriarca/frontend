<template>
    <div class="container-fluid">
        <Profile/>
    </div>
</template>

<script>
import Profile from '@/components/Profile.vue';
export default{
        name: 'ProfileView',
        components:{
            Profile,
        }
} 
</script>