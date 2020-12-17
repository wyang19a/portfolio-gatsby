import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.js');
  const { data } = await graphql(`
    query {
      project: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // console.log(data);

  data.project.nodes.forEach((i) => {
    actions.createPage({
      path: `/portfolio/${i.slug.current}`,
      component: projectTemplate,
      context: {
        slug: i.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnProjectsIntoPages(params)]);
}
