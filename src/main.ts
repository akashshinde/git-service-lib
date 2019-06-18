/**
 * Some predefined delays (in milliseconds).
 */
import {SecretType, GitSource} from "./service/modal/gitsource";
import {GithubService} from "./service/github_service";

const gr = new GitSource(
  "https://github.com/redhat-developer/devconsole-git",
   SecretType.NO_AUTH,
  { username: 'akash.kindertouch@gmail.com', password: '9011543105' },
  'master'
);

const gs = new GithubService(gr);
gs.detectBuildType()
  .then((r)=> {
    console.log(r);
  })
  .catch((err: Error) => {
    console.error(err)
});
