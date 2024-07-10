/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
//};

//export default sidebars;
module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'NCM Self Service 101',
      items: ['what_is_calm/what_is_calm',
              'calm_project/calm_project',
              'calm_marketplace/calm_marketplace',
              'calm_linux_track/calm_linux_app/calm_linux_app',
              'calm_windows_ad/calm_windows_ad'
               ],
    },
    {
      type: 'category',
      label: 'NCM Self Service 201',
      items: ['calm_linux_track/calm_day2_linux/calm_day2_linux',
              'calm_escript/calm_escript',
              'calm_aws/calm_aws'
             ],
    },
    {
      type: 'category',
      label: 'NCM Self Service 301',
      items: ['calm_api/calm_api',
              'calm_dsl/calm_dsl',
              'calm_vpc/calm_vpc'
             ],
    },
  ],
};
