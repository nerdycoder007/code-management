interface previewData {
  id: number;
  groupName: string;
  commands: Array<command>;
}
type command = {
  id: number;
  text: string;
};
export const previewData: Array<previewData> = [
  {
    id: 1,
    groupName: "React TS",
    commands: [
      { id: 1, text: "npm run dev" },
      { id: 2, text: "npx create-react-app my-app" },
      { id: 3, text: "yarn create vite" },
      { id: 4, text: "yarn add typescript postcss autoprefixer" },
    ],
  },
  {
    id: 2,
    groupName: "Apollo GraphQL",
    commands: [
      { id: 1, text: "npm  @apollo/server graphql" },
      { id: 2, text: "npm i @apollo/client" },
      { id: 3, text: "yarn add graphql-upload-express" },
    ],
  },
  {
    id: 3,
    groupName: "Python project",
    commands: [
      { id: 1, text: "pip install something" },
      { id: 2, text: "pip manage.py runserver:0.0.0.0" },
      { id: 3, text: "pip remove random package" },
      { id: 4, text: "yarn add typescript postcss autoprefixer" },
    ],
  },
  {
    id: 4,
    groupName: "Apollo GraphQL",
    commands: [
      { id: 1, text: "npm i @apollo/server graphql" },
      { id: 2, text: "npm i @apollo/client" },
      { id: 3, text: "yarn add graphql-upload-express" },
    ],
  },
];
