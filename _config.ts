import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume();

site
  .ignore("README.md")
  .use(blog());

export default site;
