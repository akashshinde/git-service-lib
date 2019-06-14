import { GitSource, SecretType } from './modal/gitsource'
import {RepoCheck} from "./modal/response_model/repo_check";
import {BranchList} from "./modal/response_model/branch_list";

 export abstract class BaseService {
    protected gitsource: GitSource

    constructor(gitsource: GitSource) {
        this.gitsource = gitsource;
    }

    getRepoMetadata(){

    }

    abstract getRepoLanguageList()
    abstract getRepoBranchList(): Promise<BranchList>
    abstract isRepoReachable(): Promise<RepoCheck>

    getAuth() {
        switch (this.gitsource.secretType) {
            case SecretType.BASIC_AUTH:
                return {
                    username: this.gitsource.secretContent.username,
                    password: this.gitsource.secretContent.password,
                }
            default:
                return null;
        }
    }

}
