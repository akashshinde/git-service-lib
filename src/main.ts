/**
 * Some predefined delays (in milliseconds).
 */
import {GitSource, SecretType} from "./service/modal/gitsource";
import {GithubService} from "./service/github_service";


const gr = new GitSource(
  "https://github.com/redhat-developer/devconsole-git",
  SecretType.NO_AUTH,
  null
);

const gs = new GithubService(gr);
gs.getRepoBranchList()
  .then((r)=> {
    console.log(r)
  })
  .catch((err: Error) => {
    console.error(err)
});
