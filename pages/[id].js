import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps( { params } ) {
  
  const data = await getData(params.id);

  console.log({ data })
  return {
    props: {
      data,
    }
  };
}


export async function getStaticPaths() {
  const paths = await getAllIds();
  console.log({ paths: JSON.stringify(paths)})
  return {
    paths,
    fallback: false
  };
}
export default function Entry({data}){
   // console.log({relatedPeople})
   console.log({data})
  //  const postTitle = data.post_title
  //  const secondPost = data.post_title
  //  console.log('runing ID route');
    return(
        <Layout>
          <h1>List of Posts names</h1>

          
        </Layout>
    );
}



       
  {/* <div class="card-body">
    <h5 class="card-title">{itemData.post_title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{itemData.user_login}</h6>
    <p class="card-text">{itemData.post_content}</p>
    
  </div> */}
 // </div>