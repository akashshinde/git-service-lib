/**
 * Some predefined delays (in milliseconds).
 */
import {GitSource, SecretType} from "./service/modal/gitsource";
import {GithubService} from "./service/github_service";


var gs = new GitSource(
  "https://github.com/redhat-developer/devconsole-operator",
  SecretType.NO_AUTH,
  null
);

var github = new GithubService(gs);
github.getRepoBranchList().then(b => console.log(b));
