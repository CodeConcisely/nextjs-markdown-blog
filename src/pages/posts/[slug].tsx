import Head from 'next/head';
import { allPosts, type Post } from 'contentlayer/generated';

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find(postFromAll => postFromAll.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = allPosts.map(post => post.slug);
  const paths = slugs.map(slug => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="prose prose-slate">
        <h1 className="text-center mb-3">{post.title}</h1>
        <p className="text-slate-500 text-center">
          Posted on{' '}
          <time dateTime={post.date} title={new Date(post.date).toString()}>
            {new Date(post.date).toLocaleDateString('en-CA')}
          </time>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
}
