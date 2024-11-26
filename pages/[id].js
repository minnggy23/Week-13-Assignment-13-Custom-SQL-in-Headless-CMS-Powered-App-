import Layout from "../components/layout";
import { getAllIds, getData } from "../lib/data";

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);

  //console.log({ itemData });
  return {
    props: {
      itemData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  console.log({ paths: JSON.stringify(paths) });
  return {
    paths,
    fallback: false,
  };
}
export default function Entry({ itemData }) {
  // console.log({relatedPeople})
  console.log({ itemData });
  //  const postTitle = data.post_title
  //  const secondPost = data.post_title
  //  console.log('runing ID route');
  return (
    <Layout>
      <article className="card col-6">
        <div class="card-body">
          <h5 class="card-title">{itemData.post_title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            {itemData.user_login}
          </h6>
          <p class="card-text">{itemData.post_content}</p>
        </div>
      </article>
    </Layout>
  );
}

