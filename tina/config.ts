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
        label: "📄 Pages",
        name: "page",
        path: "content/pages",
        format: "mdx",
       
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true,
            isTitle: true,
          },
          {
            type: "rich-text",
            label: "Content",
            name: "Content",
            isBody: true,
            list: true,
            templates: [
              {
                name: "Parallaxhero",
                label: "Parallax Hero",
                
                fields: [
                  {
                    name: "heading",
                    label: "heading",
                    type: "string",
                  },
                  {
                    name: "summary",
                    label: "summary",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "image",
                  },
                  {
                    type: "string",
                    label: "Background Color",
                    name: "colour",
                    ui: {
                      component: "color",
                      colorFormat: "rgb",
                    },
                  },
                ],
              },
              {
                name: "Reviews",
                label: "Reviews",
                fields: [
                  {
                    name: "heading",
                    label: "heading",
                    type: "string",
                    description: "Please enter the heading you want to display above the reviews",
                  },
                ],
              },
              {
                name: "Partners",
                label: "Partners",
                
                fields: [
                  {
                    name: "heading",
                    label: "heading",
                    type: "string",
                  },
                
                ]
              },
              {
                name: "Content",
                label: "Content",
                
                fields: [
                  {
                    name: "heading",
                    label: "heading",
                    type: "string",
                  },
                
                ]
              },
              
            ]
          },
        ],
        },
         
              
      
      {
        label: "📚 Reviews",
        name: "reviews",
        path: "content/reviews",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            description: "Please enter the name of the client who has given the review",
            name: "name",
            required: true,
            isTitle: true,
          },
          {
          type: "rich-text",
          name: "review",
          label: "Review",
          description: "Please enter the review here",
          required: true,
          ui: {
            component: "textarea",
          }
          
    
        },



        ]
      },

      {
        name: "nav",
        label: "🧭 Navigation",
        path: "content/nav",
        format: "md",
       
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "image",
            label: "Header Image",
            description: "This is the image that will be displayed in the header.",
            type: "image",
            
          },
          { type: "reference", collections: ["page"], name: "headerLink", label: "Header Link", 
          description: "This is the link that the Header Image will navigate to."
        },
          {
            name: "links",
            label: "Navigaton Links",
            description: "These are the links that will be displayed in the navigation bar.",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.label }
              },
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "reference", collections: ["page"], name: "link", label: "Link" },    
            
            ],
          },
        ],
      },
    ],
  },
});
