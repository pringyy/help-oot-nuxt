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
        label: "Pages",
        name: "page",
        path: "content/",
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
            templates: [
              {
                name: "Parallax",
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
            ]
          },
        ],
        },
         
              
      //         {
      //           name: "Contact",
      //           label: "Contact",
      //           fields: [
      //             {
      //               name: "Contact",
      //               label: "Contact",
      //               type: "reference",
      //               collections: ["contact"],
      //             },
      //           ],
      //         },
      //         {
      //           name: "Parallax",
      //           label: "Parallax",
      //           fields: [
      //             {
      //               name: "image",
      //               label: "Image",
      //               type: "image",
      //             },
      //             {
      //               type: "string",
      //               label: "Background Color",
      //               name: "colour",
      //               ui: {
      //                 component: "color",
      //                 colorFormat: "rgb",
      //               },
      //             },
      //             {
      //               type: "rich-text",
      //               label: "Content",
      //               name: "children",
      //               isBody: true,
      //               templates: [
      //                 {
      //                   name: "Hero",
      //                   label: "Hero",
      //                   fields: [
      //                     {
      //                       name: "heading",
      //                       label: "heading",
      //                       type: "string",
      //                     },
      //                     {
      //                       name: "summary",
      //                       label: "summary",
      //                       type: "string",
      //                       ui: {
      //                         component: "textarea",
      //                       },
      //                     },
      //                     {
      //                       type: "rich-text",
      //                       label: "Content",
      //                       name: "children",
      //                       isBody: true,
      //                       templates: [
      //                         {
      //                           name: "Buttongroup",
      //                           label: "Button Group",
      //                           fields: [
      //                             {
      //                               type: "rich-text",
      //                               label: "Content",
      //                               name: "children",
      //                               isBody: true,
      //                               templates: [
      //                                 {
      //                                   name: "Buttonprimary",
      //                                   label: "Button",
      //                                   fields: [
      //                                     {
      //                                       name: "label",
      //                                       label: "Button Text",
      //                                       type: "string",
      //                                     },
      //                                   ],
      //                                 },
      //                               ],
      //                             },
      //                           ],
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },

      {
        label: "Contact",
        name: "Contact",
        path: "content/contact",
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
            templates: [
              {
                name: "Contact",
                label: "Contact",
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
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
