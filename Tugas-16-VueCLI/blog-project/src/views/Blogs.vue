<template>
  <v-container class="ma-0 pa-0" grid-list-sm>
    <div class="text-right">
      <v-btn small text to="/blogs" class="blue--text">
        All Blogs
      </v-btn>
    </div>
    <v-layout wrap>
      <blog-item-component 
        v-for="blog in blogs"  
        :key="`blog-${blog.id}`"
        :blog="blog"
      ></blog-item-component>
    </v-layout>
    <v-pagination
        v-model="page"
        @input="go"
        :length="lengthPage"
        :total-visible="perPage"
    ></v-pagination>
  </v-container>
</template>

<script>
import BlogItemComponent from '../components/BlogItemComponent.vue';
export default {
    data: () => ({
        apiDomain: "https://demo-api-vue.sanbercloud.com",
        blogs: [],
        page: 0,
        lengthPage: 0,
        perPage: 0,
    }),
    components: {
        'blog-item-component': BlogItemComponent
    },
    methods: {
        go(){
            const config = {
                method: "get",
                url: `${this.apiDomain}/api/v2/blog?page=${this.page}`
            };

            this.axios(config)
                .then(response => {
                    let { blogs } = response.data
                    this.blogs = blogs.data
                    this.page = blogs.current_page
                    this.lengthPage = blogs.last_page
                    this.perPage = blogs.per_page
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created(){
        this.go()
    }
};
</script>

