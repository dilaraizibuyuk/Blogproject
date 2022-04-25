
export interface Register{
    Email:string
    Password:string
    RePassword:string
  }
  export interface Login{
    Email:string
    Password:string
  }
 export interface DataResponseModel<T>{
  ValidationErrors:any[]
  HasError:boolean
  Message:string
  Data:T
 }

 export interface TokenModel{
   Token:string
 }
 /*{
      "Title": "What is Lorem Ipsum? - Kategori 1",
      "Content": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      "Image": "https://img.imageus.dev/https://internative.s3.eu-central-1.amazonaws.com/uploads/blogPictures/5af6fd64-c970-4884-83f0-71cbf2ad96e1.jpg?width=535&height=300&mode=cover",
      "CategoryId": "620ceebbc8312d04eec2be92",
      "Id": "620ceebbc8312d04eec2be96"
    },
 */
export interface Category{
  Title:string
  Image:string
  Id:string
}
export interface Blog{
  Title:string
  Content:string
  Image:string
  CategoryId:string
  Id:string
}