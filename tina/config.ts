import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [

      
    
      {
        name: "reviews",
        label: "Reviews",
        path: "content/why-choose-us/reviews",
        fields: [
          {
            type: "string",
            name: "reviewer",
            label: "Reviewer",
            isTitle: true,
            required: true,
          }, 
          {
            type: "string",
            component: 'textarea',
            name: "review",
            label: "Review",
            required: true,
            isBody: true,
          },
        ],
      },
      {
        label: "Blog Posts",
        name: "post",
         path: '_posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'string',
            label: 'Excerpt',
            name: 'excerpt',
          },
          {
            type: 'image',
            label: 'Cover Image',
            name: 'coverImage',
          },
          {
            type: 'string',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'object',
            label: 'Author',
            name: 'author',
            fields: [
              {
                type: 'string',
                label: 'Name',
                name: 'name',
              },
              {
                type: 'string',
                label: 'Picture',
                name: 'picture',
              },
            ],
          },
          {
            type: 'object',
            label: 'OG Image',
            name: 'ogImage',
            fields: [
              {
                type: 'string',
                label: 'Url',
                name: 'url',
              },
            ],
          },
          {
            type: 'string',
            label: 'Body',
            name: 'body',
            isBody: true,
            ui: {
                component: "textarea"
                }
           
          },
        ]
      }
    ],
  },
});
